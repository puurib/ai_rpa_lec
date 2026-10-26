# 기획자의 AI 작업실 · by puurib

코딩 비전공 경영기획·사무 실무자를 위한 한국어 AI 학습 사이트입니다. **AI가 중심, RPA는 보조 주제**입니다.

## 학습 구성

- 7개 독립 메뉴: 홈, AI 첫걸음, 용어 사전, 프롬프트, AI 자료 정제, 경영기획 실습, RPA 맛보기
- 5개 과정 · 14개 레슨. AI·자료 정제·기획 활용 13개, RPA 보조 1개
- 필요한 용어 21개: 한 줄 뜻, 비유, 업무 예시, 주의점, 관련 용어
- 선택형 프롬프트 구성, 가상 자료 템플릿 3개, 경영기획 사례 3개
- 가상 안내문 6장으로 중복·범주·상충·버전·출처를 구분하는 자료 정제 실습
- 기존 3D 신경망 구체와 모션 보존
- 브라우저에 레슨 ID만 저장하는 자가 학습 체크. 공식 수료 기록이나 계정 동기화가 아님

## AI 자료 정제의 범위

표의 날짜·숫자 형식보다 AI가 참고할 자료의 품질에 집중합니다.

1. 불필요한 사본은 대표본으로 묶되 원본과 출처를 보존합니다. 다른 대상·기간·버전은 무조건 삭제하지 않습니다.
2. 주제·문서 유형·적용 대상의 기준을 통일하고, 필요한 보조 태그를 사용합니다.
3. 상충하는 자료는 승인 상태·공식 출처·시행일·버전·명시적 대체 관계를 확인합니다. 최근 수정일만으로 정답을 고르지 않습니다.
4. 해결되지 않은 상충은 답변 자료에서 보류합니다. 출처·관련성·정확성·누락과 시험 질문도 점검합니다.

자료 정제는 넓은 의미의 전처리에 포함될 수 있으나 모델 재학습과는 다릅니다. 정제한 자료도 정답을 보장하지 않습니다. 날짜·단위·빈칸은 보조 점검으로만 다룹니다.

## 보안 원칙

- 실제 회사명·실적·예산·전략·계약·인사·고객정보·인증정보를 교육에 반입하지 않습니다.
- 파일 업로드, 자유 입력형 업무자료 폼, AI API 호출, 실제 사내 시스템 연결을 구현하지 않았습니다.
- 프롬프트와 사례의 금액·문서·담당 역할은 모두 처음부터 만든 가상 자료입니다.
- 회사명 삭제·부분 가림·열 숨김만으로 기업비밀이 제거되는 것은 아닙니다.
- 실제 업무 적용은 승인된 도구·목적·접근 권한·데이터 보관 및 학습 이용 정책을 별도 확인해야 합니다.

## 실행

Node.js 24 LTS 이상을 권장합니다.

```powershell
npm ci
npm run dev
```

빌드와 로컬 미리보기:

```powershell
npm test
npm run build
npm run preview
```

배포 주소는 **https://puurib.github.io/ai_rpa_lec/** 이며 배포·미리보기 기본 경로는 `/ai_rpa_lec/`입니다. 페이지 이동은 해시 라우팅을 사용합니다. 공개 소스는 https://github.com/puurib/ai_rpa_lec 에서 관리합니다.

## 파일

- `index.html`: 7개 메뉴와 접근성 기본 구조
- `src/brand.js`: 교육과정, 레슨, 프롬프트, 참고 출처
- `src/activities.js`: 가상 안내문 정제·프롬프트·기획 사례·RPA 확인 문제
- `src/glossary-data.js`, `src/glossary.js`: 쉬운 용어와 검색·팝업
- `src/main.js`: 메뉴·학습 체크·3D 연결
- `src/style.css`: 데스크톱·모바일 레이아웃
- `src/scene.js`: 보존한 원본 3D. 수정하지 않음

`prompts/`, `samples/`는 이전 스타터의 예시이며 현재 교육 화면이나 빌드 입력에서 사용하지 않습니다.

## 공개·배포

사용자가 기존 이력의 일반적인 회사 표현을 확인하고 공개를 승인했습니다. 사이트는 공개 저장소 `puurib/ai_rpa_lec`에서 프로젝트 주소로 GitHub Pages 배포합니다. 루트 주소의 기존 사이트는 변경하지 않습니다. 이전 이력을 강제로 덮어쓰거나 삭제하지 않습니다.

자동 push 배포는 사용하지 않습니다. `.github/workflows/deploy-pages.yml`의 수동 실행으로 테스트·빌드·배포를 진행합니다. `validate.yml`은 테스트·빌드만 실행하는 수동 검증 워크플로입니다. 실제 회사 자료를 반입하지 않는 교육 원칙은 그대로 유지합니다.

## 참고 자료

공개된 주제 구성과 설명 방식을 참고해 학습 설명·가상 사례·실습을 새로 작성했습니다. 원 영상과 강의의 권리는 각 제작자에게 있으며 제휴나 공식 인증을 뜻하지 않습니다. 제품별 가격·성능·고정 한도는 옮기지 않았습니다.

- 혼잡스, AI 용어 12개: https://www.youtube.com/watch?v=N3st1ZrB_zc
- GPT 연대경영, AI 필수 용어 10개: https://www.youtube.com/watch?v=T4e0T8fBllM
- Microsoft Learn, 생성형 AI 및 Copilot 소개: https://learn.microsoft.com/ko-kr/training/modules/fundamentals-generative-ai/
- Google Skills, 생성형 AI 소개: https://www.skills.google/course_templates/536?locale=ko
- 유건교육, 생성형 AI 업무 활용 기초: https://yoogun.co.kr/course-ai-basics.html
- 충남대학교 · K-MOOC, 생성형 AI 활용 실무: https://www.kmooc.kr/view/course/detail/19003
- Microsoft Learn · Azure Databricks, RAG 자료 준비·중복·메타데이터: https://learn.microsoft.com/en-us/azure/databricks/agents/tutorials/ai-cookbook/quality-data-pipeline-rag
