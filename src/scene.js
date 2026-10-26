import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mix = (from, to, amount) => from + (to - from) * amount;

export function initScene(container, colors) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.6));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, container.clientWidth / container.clientHeight, 0.1, 50);
  camera.position.set(0, 0.15, 9.2);

  const environmentScene = new RoomEnvironment();
  const environment = new THREE.PMREMGenerator(renderer).fromScene(environmentScene, 0.04);
  scene.environment = environment.texture;
  environmentScene.dispose();

  const sculpture = new THREE.Group();
  scene.add(sculpture);

  // AI neural sphere: evenly spaced neurons, local connections and traveling signals.
  const blue = new THREE.Color('#2872f8');
  const violet = new THREE.Color('#8854ed');
  const neuralGroup = new THREE.Group();
  sculpture.add(neuralGroup);
  const nodeCount = 88;
  const nodePositions = [];
  const nodeGeometry = new THREE.SphereGeometry(1, 12, 10);
  const nodeMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.35, roughness: 0.24, emissive: '#294bba', emissiveIntensity: 0.3
  });
  const nodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
  const dummy = new THREE.Object3D();
  const nodeColor = new THREE.Color();
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let index = 0; index < nodeCount; index++) {
    const y = 1 - (index / (nodeCount - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = goldenAngle * index;
    const point = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius).multiplyScalar(1.86);
    nodePositions.push(point);
    dummy.position.copy(point);
    dummy.scale.setScalar(index % 7 === 0 ? 0.071 : 0.043);
    dummy.updateMatrix();
    nodes.setMatrixAt(index, dummy.matrix);
    nodes.setColorAt(index, nodeColor.copy(blue).lerp(violet, (y + 1) / 2));
  }
  nodes.castShadow = true;
  neuralGroup.add(nodes);

  const edgePositions = [];
  const edgeColors = [];
  const edges = [];
  for (let a = 0; a < nodeCount; a++) {
    for (let b = a + 1; b < nodeCount; b++) {
      const distance = nodePositions[a].distanceTo(nodePositions[b]);
      if (distance > 0.94) continue;
      edges.push([nodePositions[a], nodePositions[b]]);
      for (const index of [a, b]) {
        const point = nodePositions[index];
        edgePositions.push(point.x, point.y, point.z);
        nodeColor.copy(blue).lerp(violet, (point.y / 1.86 + 1) / 2);
        edgeColors.push(nodeColor.r, nodeColor.g, nodeColor.b);
      }
    }
  }
  const edgeGeometry = new THREE.BufferGeometry();
  edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3));
  edgeGeometry.setAttribute('color', new THREE.Float32BufferAttribute(edgeColors, 3));
  neuralGroup.add(new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0.55, depthWrite: false
  })));

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.6, 1),
    new THREE.MeshPhysicalMaterial({
      color: '#6179ef', metalness: 0.5, roughness: 0.22,
      emissive: '#3948b8', emissiveIntensity: 0.38,
      transparent: true, opacity: 0.8, clearcoat: 1
    })
  );
  neuralGroup.add(core);
  const coreCage = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.78, 1)),
    new THREE.LineBasicMaterial({ color: '#788bee', transparent: true, opacity: 0.45 })
  );
  neuralGroup.add(coreCage);

  // Sparse spokes connect the outer network to its processing core.
  const spokes = [];
  nodePositions.forEach((point, index) => {
    if (index % 7 !== 0) return;
    const inner = point.clone().normalize().multiplyScalar(0.78);
    spokes.push(inner.x, inner.y, inner.z, point.x, point.y, point.z);
  });
  neuralGroup.add(new THREE.LineSegments(
    new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(spokes, 3)),
    new THREE.LineBasicMaterial({ color: '#6c79e9', transparent: true, opacity: 0.22, depthWrite: false })
  ));

  const orbit = new THREE.Mesh(
    new THREE.TorusGeometry(2.35, 0.014, 8, 180),
    new THREE.MeshStandardMaterial({ color: '#4a87ff', metalness: 0.45, roughness: 0.25, transparent: true, opacity: 0.7 })
  );
  orbit.rotation.set(1.05, 0.08, -0.28);
  sculpture.add(orbit);
  const smallOrbit = new THREE.Mesh(
    new THREE.TorusGeometry(2.14, 0.01, 8, 160),
    new THREE.MeshStandardMaterial({ color: '#9863ee', metalness: 0.35, roughness: 0.28, transparent: true, opacity: 0.6 })
  );
  smallOrbit.rotation.set(0.35, 0.95, 0.42);
  sculpture.add(smallOrbit);

  const signalGeometry = new THREE.SphereGeometry(0.045, 10, 8);
  const signalMaterial = new THREE.MeshBasicMaterial({ color: '#55bdff' });
  const signals = Array.from({ length: Math.min(14, edges.length) }, (_, index) => {
    const mesh = new THREE.Mesh(signalGeometry, signalMaterial);
    neuralGroup.add(mesh);
    return { mesh, edge: edges[(index * 17) % edges.length], phase: index / 14 };
  });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ color: colors.ink, opacity: 0.16 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.44;
  floor.receiveShadow = true;
  scene.add(floor);

  const key = new THREE.DirectionalLight('#ffffff', 4.2);
  key.position.set(-4, 7, 6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 0.5, far: 25 });
  key.shadow.bias = -0.0005;
  scene.add(key);

  const rim = new THREE.DirectionalLight('#7a88ff', 2.6);
  rim.position.set(5, 1, -4);
  scene.add(rim, new THREE.HemisphereLight('#fffdf7', '#8b887e', 1.25));

  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  let progress = 0;
  let reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = true;

  function onPointerMove(event) {
    if (reduced || event.pointerType !== 'mouse') return;
    pointerTarget.set(event.clientX / innerWidth - 0.5, event.clientY / innerHeight - 0.5);
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('pointerleave', () => pointerTarget.set(0, 0));
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(container);

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio, width < 700 ? 1.25 : 1.6));
    renderer.setSize(width, height);
  }
  new ResizeObserver(resize).observe(container);

  let lastFrame = performance.now();
  let elapsed = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    const delta = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    elapsed += delta;
    pointer.lerp(pointerTarget, 1 - Math.pow(0.001, delta));
    const drift = reduced ? 0 : Math.sin(elapsed * 0.45) * 0.035;
    sculpture.rotation.y = mix(-0.42, 0.36, progress) + pointer.x * 0.32;
    sculpture.rotation.x = -0.08 + pointer.y * 0.18;
    sculpture.rotation.z = drift + progress * 0.08;
    sculpture.position.y = mix(0.05, -0.65, progress) + drift;
    sculpture.scale.setScalar(mix(1, 0.82, progress));
    orbit.rotation.z += reduced ? 0 : delta * 0.08;
    smallOrbit.rotation.z -= reduced ? 0 : delta * 0.05;
    const activityTime = reduced ? 0 : elapsed;
    neuralGroup.rotation.y = activityTime * 0.055;
    core.rotation.y = activityTime * 0.18;
    core.rotation.z = activityTime * 0.1;
    core.scale.setScalar(reduced ? 1 : 1 + Math.sin(activityTime * 1.8) * 0.045);
    coreCage.rotation.y = -activityTime * 0.09;
    signals.forEach(({ mesh, edge, phase }) => {
      const travel = (activityTime * 0.3 + phase) % 1;
      mesh.position.lerpVectors(edge[0], edge[1], travel);
      mesh.scale.setScalar(0.6 + Math.sin(travel * Math.PI) * 0.7);
    });
    camera.position.z = mix(9.2, 8.6, progress);
    camera.lookAt(0, -0.08, 0);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);

  return {
    update(nextProgress) { progress = clamp(nextProgress); },
    setReduced(value) {
      reduced = value;
      if (value) pointerTarget.set(0, 0);
    }
  };
}
