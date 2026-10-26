// 비전공 실무자를 위한 직접 작성 설명. 실습에는 가상 자료만 사용합니다.
export const glossaryTerms = [
  {
    "id": "ai",
    "name": "AI",
    "korean": "인공지능",
    "pronunciation": "에이아이",
    "english": "Artificial Intelligence",
    "category": "AI 첫걸음",
    "tagline": "사람의 지적 작업을 돕는 기술",
    "definition": "글을 이해하거나 사진을 구분하고, 문제를 푸는 등 사람이 하던 지적인 작업을 컴퓨터가 하도록 만드는 기술을 말해요.",
    "analogy": "스마트폰이 사진 속 고양이를 구분하거나, 길찾기 앱이 도착 시간을 예측하는 기능을 떠올려보세요. AI는 이런 다양한 기술을 아우르는 큰 이름이에요.",
    "example": "문서 초안을 만들거나 문의 내용을 분류하는 데 AI를 활용할 수 있어요.",
    "caution": "모든 AI가 대화를 하거나 스스로 생각하는 것은 아니에요. 목적에 따라 할 수 있는 일이 달라요.",
    "related": [
      "generative",
      "llm",
      "agent"
    ]
  },
  {
    "id": "generative",
    "name": "생성형 AI",
    "korean": "새로운 내용을 만드는 AI",
    "pronunciation": "생성형 에이아이",
    "english": "Generative AI",
    "category": "AI 첫걸음",
    "tagline": "글·그림 같은 새 결과물을 만드는 AI",
    "definition": "배운 패턴과 내가 준 요청을 바탕으로 글, 이미지, 소리 같은 새로운 결과물을 만들어주는 AI예요.",
    "analogy": "완성된 정답 카드를 꺼내는 자판기보다는, 요청에 맞춰 초안을 만드는 글쓰기 도우미에 가까워요.",
    "example": "“신입사원을 위한 환영 메일 초안을 써줘”라고 요청해서 문장 초안을 받을 수 있어요.",
    "caution": "새로 만들어낸 내용이 항상 사실이거나 저작권 문제가 없는 것은 아니에요. 사용 전에 확인해야 해요.",
    "related": [
      "ai",
      "llm",
      "hallucination"
    ]
  },
  {
    "id": "llm",
    "name": "LLM",
    "korean": "대규모 언어 모델",
    "pronunciation": "엘엘엠",
    "english": "Large Language Model",
    "category": "AI 첫걸음",
    "tagline": "많은 글에서 말의 패턴을 배운 모델",
    "definition": "아주 많은 글을 통해 언어의 패턴을 학습하고, 주어진 문맥에 맞는 말을 이어서 만들어내는 AI 모델이에요.",
    "analogy": "수많은 글을 읽으며 말의 패턴을 익힌 글쓰기 도우미라고 생각해보세요. 질문을 받으면 어울리는 답을 만들지만, 백과사전처럼 모든 사실을 정확히 보관하는 것은 아니에요.",
    "example": "보고서를 요약하거나, 어색한 문장을 다듬고, 가상 회의록에서 할 일을 뽑는 데 활용할 수 있어요.",
    "caution": "LLM은 AI 전체가 아니라 AI의 한 종류예요. 말이 자연스러워도 사실은 틀릴 수 있어요.",
    "related": [
      "ai",
      "prompt",
      "token",
      "hallucination"
    ]
  },
  {
    "id": "prompt",
    "name": "프롬프트",
    "korean": "AI에게 주는 요청과 정보",
    "pronunciation": "프롬프트",
    "english": "Prompt",
    "category": "AI 첫걸음",
    "tagline": "AI에게 건네는 구체적인 업무 요청",
    "definition": "AI에게 무엇을 해달라고 부탁하는 지시와, 그 일을 하는 데 필요한 정보를 말해요.",
    "analogy": "동료에게 “보고서 해줘”라고만 말하는 것보다 “누구에게, 어떤 자료로, 몇 줄짜리 보고서를 만들지” 알려주는 것과 같아요.",
    "example": "“아래 가상 회의록을 결정 사항과 할 일로 나눠 정리해줘. 담당자가 없으면 확인 필요로 표시해줘.”처럼 요청해보세요.",
    "caution": "프롬프트를 잘 써도 사실 오류가 완전히 사라지지는 않아요. 기밀정보나 비밀번호를 넣지 마세요.",
    "related": [
      "llm",
      "context",
      "hallucination"
    ]
  },
  {
    "id": "agent",
    "name": "AI 에이전트",
    "korean": "목표를 따라 여러 단계를 수행하는 AI",
    "pronunciation": "에이아이 에이전트",
    "english": "AI Agent",
    "category": "AI 첫걸음",
    "tagline": "목표와 도구를 갖춘 업무 도우미",
    "definition": "정해진 목표를 이루기 위해 필요한 단계를 선택하고, 허용된 도구를 사용하도록 설계한 AI 시스템이에요.",
    "analogy": "질문에 답만 해주는 안내원에서, 허락받은 범위 안에서 자료를 찾아 정리하는 업무 도우미로 역할을 넓힌 모습이에요.",
    "example": "승인된 문서를 찾아 질문에 답하고, 근거가 없으면 담당자에게 확인하도록 안내하는 도우미를 설계할 수 있어요.",
    "caution": "“에이전트”라고 해서 모든 일을 자동으로 할 수 있는 것은 아니에요. 사용하는 도구의 지원 기능과 권한을 공식 문서에서 확인하세요.",
    "related": [
      "llm",
      "api",
      "workflow",
      "permission"
    ]
  },
  {
    "id": "api",
    "name": "API",
    "korean": "프로그램 사이의 약속된 연결 창구",
    "pronunciation": "에이피아이",
    "english": "Application Programming Interface",
    "category": "연결과 통신",
    "tagline": "프로그램끼리 일을 부탁하는 창구",
    "definition": "한 프로그램이 다른 프로그램의 기능이나 데이터를 정해진 규칙에 맞춰 요청하고 사용할 수 있게 만든 연결 창구예요.",
    "analogy": "식당의 주문 창구와 메뉴판을 떠올려보세요. 주방을 직접 조작하지 않고 정해진 방식으로 주문하듯, 프로그램도 API 규칙에 맞춰 필요한 일을 부탁해요.",
    "example": "회사에서 승인한 일정 서비스 API가 있다면, 권한 범위 안에서 일정 목록을 요청하는 기능을 만들 수 있어요. 실제 사내 지원 여부는 별도 확인이 필요해요.",
    "caution": "API가 있다고 누구나 쓸 수 있는 것은 아니에요. 사용 권한, 호출 한도, 비용과 데이터 처리 규칙을 확인해야 해요.",
    "related": [
      "permission"
    ]
  },
  {
    "id": "token",
    "name": "토큰",
    "korean": "모델이 글을 나눠 처리하는 단위",
    "pronunciation": "토큰",
    "english": "Token",
    "category": "AI 첫걸음",
    "tagline": "AI가 읽고 쓰는 글의 작은 조각",
    "definition": "언어 모델이 글을 처리할 때 나누는 작은 단위예요. 한 단어일 수도 있고, 단어의 일부나 문장부호일 수도 있어요.",
    "analogy": "긴 글을 작은 조각으로 나눠 읽는다고 생각해보세요. 다만 띄어쓰기나 글자 수대로 정확히 나누는 것은 아니에요.",
    "example": "긴 문서와 대화를 넣으면 더 많은 토큰을 사용할 수 있어요. 도구에 따라 입력 한도나 비용이 토큰 수와 관련될 수 있어요.",
    "caution": "토큰 1개가 항상 한 글자나 한 단어인 것은 아니에요. 네트워크의 패킷이나 로그인용 인증 토큰과도 달라요.",
    "related": [
      "llm",
      "context"
    ]
  },
  {
    "id": "context",
    "name": "컨텍스트",
    "korean": "지금 답할 때 참고하는 맥락",
    "pronunciation": "컨텍스트",
    "english": "Context",
    "category": "AI 첫걸음",
    "tagline": "AI가 이번 답변에 참고하는 배경 정보",
    "definition": "이번 답변을 만들 때 모델이 참고할 수 있도록 제공된 정보예요. 요청, 대화 내용, 문서 일부 등이 포함될 수 있어요.",
    "analogy": "회의에 들어가기 전 책상 위에 올려둔 회의 자료와 메모라고 생각해보세요. 어떤 자료를 올려두느냐에 따라 답변이 달라져요.",
    "example": "“신입사원이 읽을 안내문이고, 전문용어는 풀어서 설명해줘”라는 배경을 알려주면 답변을 목적에 맞추기 쉬워져요.",
    "caution": "한 번에 참고할 수 있는 분량에는 한도가 있어요. 긴 대화의 모든 내용이 항상 유지되거나 영구히 기억되는 것은 아니에요.",
    "related": [
      "prompt",
      "token",
      "rag"
    ]
  },
  {
    "id": "hallucination",
    "name": "환각",
    "korean": "그럴듯하지만 사실이 아닌 답변",
    "pronunciation": "환각 · 할루시네이션",
    "english": "Hallucination",
    "category": "안전한 활용",
    "tagline": "AI가 없는 사실을 그럴듯하게 말하는 현상",
    "definition": "AI가 실제로 없거나 근거가 맞지 않는 내용을 자신 있게 만들어내는 현상을 말해요.",
    "analogy": "정답을 모르는 사람이 빈칸을 그럴듯하게 채워 말하는 모습에 비유할 수 있어요. AI가 일부러 속인다는 뜻은 아니에요.",
    "example": "존재하지 않는 내부 규정, 사람 이름, 논문이나 링크를 사실처럼 답할 수 있어요.",
    "caution": "중요한 날짜·금액·규정·출처는 원문과 대조하세요. “확실해?”라고 한 번 더 묻는 것만으로 검증이 되지는 않아요.",
    "related": [
      "llm",
      "rag",
      "prompt"
    ]
  },
  {
    "id": "rag",
    "name": "RAG",
    "korean": "자료를 찾아 참고하며 답하는 방식",
    "pronunciation": "알에이지 · 래그",
    "english": "Retrieval-Augmented Generation",
    "category": "에이전트 활용",
    "tagline": "관련 자료를 찾은 뒤, 그 자료를 참고해 답하기",
    "definition": "질문과 관련된 자료를 먼저 검색해 가져온 다음, 그 내용을 모델에 제공해 답변을 만들게 하는 방식이에요.",
    "analogy": "시험 전에 외운 기억만으로 답하는 대신, 관련 설명서를 펼쳐놓고 답하는 오픈북 방식에 비유할 수 있어요.",
    "example": "사용 승인을 받은 업무 매뉴얼에서 관련 문단을 찾아, 근거와 함께 FAQ 답변을 만들도록 설계할 수 있어요.",
    "caution": "자료를 참고해도 오답이 사라지지는 않아요. 자료의 최신성·검색 정확도·접근 권한을 확인해야 해요. 사용하는 도구가 어떤 기능을 지원하는지도 확인하세요.",
    "related": [
      "knowledge",
      "llm",
      "hallucination",
      "permission"
    ]
  },
  {
    "id": "knowledge",
    "name": "지식 베이스",
    "korean": "참고할 자료를 모아둔 저장소",
    "pronunciation": "지식 베이스",
    "english": "Knowledge Base",
    "category": "에이전트 활용",
    "tagline": "도우미에게 참고하라고 주는 업무 자료",
    "definition": "에이전트가 답변할 때 근거로 활용하도록 준비한 문서나 정보를 말해요. 도구에 따라 자료를 연결하는 방식은 달라요.",
    "analogy": "새로 온 동료에게 건네는 최신 업무 매뉴얼과 같아요. 오래되거나 엉뚱한 자료를 주면 답변도 잘못될 수 있어요.",
    "example": "사용이 승인된 FAQ나 매뉴얼을 준비하고, 작성일·담당자·열람 가능한 대상을 함께 정리해보세요.",
    "caution": "문서를 올리는 것이 곧 모델을 새로 학습시키는 것과 같은 뜻은 아니에요. 비밀 문서를 승인 없이 연결하지 마세요.",
    "related": [
      "rag",
      "context",
      "permission"
    ]
  },
  {
    "id": "workflow",
    "name": "워크플로",
    "korean": "일이 진행되는 순서와 규칙",
    "pronunciation": "워크플로",
    "english": "Workflow",
    "category": "에이전트 활용",
    "tagline": "업무를 어떤 순서로 처리할지 정한 흐름",
    "definition": "일이 시작해서 끝날 때까지 거치는 단계와, 조건에 따라 다음 일을 정하는 규칙을 말해요.",
    "analogy": "“초안 작성 → 담당자 검토 → 승인 후 공유”처럼 업무 순서를 그린 길 안내 지도예요.",
    "example": "AI가 문서 초안을 만들고, 사람이 검토한 뒤, 승인된 경우에만 공유하는 흐름을 설계할 수 있어요.",
    "caution": "AI가 모든 단계를 자동으로 수행할 필요는 없어요. 전송·수정·삭제 같은 중요한 단계에는 사람의 승인을 두세요.",
    "related": [
      "agent",
      "api",
      "permission"
    ]
  },
  {
    "id": "permission",
    "name": "권한",
    "korean": "누가 무엇을 할 수 있는지 정한 범위",
    "pronunciation": "권한",
    "english": "Permission / Access Control",
    "category": "안전한 활용",
    "tagline": "볼 수 있는 자료와 할 수 있는 일을 정하는 규칙",
    "definition": "사용자나 프로그램이 어떤 자료를 보고, 어떤 작업을 할 수 있는지 정한 허용 범위예요.",
    "analogy": "회사 출입증으로 들어갈 수 있는 구역이 다른 것과 같아요. 도구에 연결했다고 모든 문서가 열리는 것은 아니어야 해요.",
    "example": "특정 팀만 볼 수 있는 문서를 다루는 도우미라면, 응답에서도 그 접근 제한이 유지되는지 확인해야 해요.",
    "caution": "필요한 범위만 허용하는 최소 권한 원칙을 지키세요. 실제 권한 설정·승인 방법은 사내 담당자와 공식 가이드에서 확인하세요.",
    "related": [
      "agent",
      "rag"
    ]
  },
  {
    "id": "context-window",
    "name": "컨텍스트 윈도우",
    "korean": "한 번에 참고할 수 있는 정보의 범위",
    "pronunciation": "컨텍스트 윈도우",
    "english": "Context Window",
    "category": "AI 첫걸음",
    "tagline": "AI가 한 번에 펼쳐볼 수 있는 작업 공간",
    "definition": "모델이 한 번의 처리에서 참고할 수 있는 정보량의 한도예요. 보통 토큰 단위로 설명하며, 세부 한도는 모델과 서비스에 따라 달라요.",
    "analogy": "책상의 크기에 비유할 수 있어요. 자료를 많이 올릴 수 있어도 모든 내용을 반드시 정확히 찾는 것은 아니에요.",
    "example": "긴 대화에서는 핵심 조건과 필요한 가상 자료만 묶어 새로 전달하면 좋아요.",
    "caution": "영구 기억과는 달라요. 분량 안에 들어가도 내용이 누락되거나 요약될 수 있어요. 고정된 제품별 한도는 공식 문서에서 확인하세요.",
    "related": [
      "context",
      "token",
      "prompt"
    ]
  },
  {
    "id": "mcp",
    "name": "MCP",
    "korean": "AI와 도구를 연결하는 공통 규격",
    "pronunciation": "엠씨피",
    "english": "Model Context Protocol",
    "category": "연결과 통신",
    "tagline": "AI 도구 연결을 위한 약속",
    "definition": "AI 애플리케이션이 외부 도구나 데이터와 연결될 수 있도록 정한 공개 규격이에요.",
    "analogy": "여러 기기를 공통된 방식으로 연결하는 포트 규격에 비유할 수 있어요. 연결 규격이지 연결할 도구 자체는 아니에요.",
    "example": "지원되는 앱에서 허용된 자료를 조회하는 도구를 연결할 수 있어요. 실제 지원 기능은 공식 문서를 확인해야 해요.",
    "caution": "MCP가 모든 접근 권한을 주거나 승인 절차를 없애지는 않아요. 모든 에이전트가 MCP를 필요로 하는 것도 아니에요.",
    "related": [
      "api",
      "agent",
      "permission"
    ]
  },
  {
    "id": "duplicate",
    "name": "중복 자료",
    "korean": "같은 내용이 불필요하게 반복된 자료",
    "pronunciation": "중복 데이터",
    "english": "Duplicate Data",
    "category": "데이터 다루기",
    "tagline": "불필요한 사본은 묶고 다른 근거는 구분하기",
    "definition": "같은 내용이 같은 출처·적용 범위·버전으로 여러 번 반복된 자료를 말해요. 비슷한 내용도 중복 후보지만 맥락을 확인해야 해요.",
    "analogy": "같은 안내문을 여러 번 복사해 놓아도 근거가 늘어나는 것은 아니에요. 다만 대상이 다른 안내문은 구분해야 해요.",
    "example": "같은 가상 교육 안내의 사본은 대표본으로 묶고, 초안·구버전·다른 대상의 안내는 별도로 표시해요.",
    "caution": "단순히 비슷하다고 삭제하지 않아요. 출처·적용 대상·기간·버전이 다를 수 있어요. 원본과 정리 기록을 보존해요.",
    "related": [
      "cleansing",
      "metadata",
      "conflict"
    ]
  },
  {
    "id": "masking",
    "name": "마스킹",
    "korean": "민감한 값의 일부나 전체를 가리기",
    "pronunciation": "마스킹",
    "english": "Data Masking",
    "category": "안전한 활용",
    "tagline": "가리는 것과 비밀을 없애는 것은 달라요",
    "definition": "민감한 값이 그대로 보이지 않도록 일부를 가리거나 다른 표현으로 바꾸는 방법이에요.",
    "analogy": "이름표를 가려도 주변 정보로 사람을 알아볼 수 있는 것처럼, 가림 처리만으로 안전해지지는 않아요.",
    "example": "이 교육은 실제 자료를 가린 파일 대신 처음부터 만든 가상 표와 가상 회의록만 사용해요.",
    "caution": "회사명 삭제·열 숨김·부분 가림은 익명화나 기업비밀 제거를 보장하지 않아요. 실제 자료는 별도 승인 없이 반입하지 마세요.",
    "related": [
      "permission"
    ]
  },
  {
    "id": "rpa",
    "name": "RPA",
    "korean": "정해진 절차를 반복하는 업무 자동화",
    "pronunciation": "알피에이",
    "english": "Robotic Process Automation",
    "category": "업무 자동화",
    "tagline": "반복 클릭과 정해진 처리의 도우미",
    "definition": "사람이 반복하던 화면 조작이나 자료 처리를 정해진 규칙대로 수행하도록 만드는 업무 자동화 방식이에요.",
    "analogy": "정해진 순서대로 같은 작업을 수행하는 작업 절차에 비유할 수 있어요. 실제 기계 로봇이 필요한 것은 아니에요.",
    "example": "가상 파일을 정해진 이름 규칙으로 정리하고, AI가 요약 초안을 만든 뒤 사람이 확인하는 흐름을 설계할 수 있어요.",
    "caution": "RPA가 항상 내용의 의미를 이해하는 것은 아니에요. 화면 변경·누락·중복 실행에 대비하고 실제 계정이나 사내 시스템은 연결하지 않아요.",
    "related": [
      "ai",
      "workflow",
      "permission"
    ]
  },
  {
    "id": "cleansing",
    "name": "AI 자료 정제",
    "korean": "AI가 참고할 자료의 품질 높이기",
    "pronunciation": "에이아이 자료 정제",
    "english": "Reference Data Cleansing / Knowledge Curation",
    "category": "자료 정제",
    "tagline": "AI가 헷갈리지 않게 참고 자료 정리하기",
    "definition": "AI에게 참고시킬 자료의 불필요한 중복을 줄이고, 분류·적용 범위·버전·상충·근거를 점검해 목적에 맞는 자료로 만드는 일이에요.",
    "analogy": "동료에게 자료를 건네기 전 사본을 정리하고, 어떤 안내가 누구에게 언제 적용되는지 표시하는 과정과 비슷해요.",
    "example": "가상 FAQ를 주제별로 분류하고, 최신 승인본과 과거본을 구분하며, 해결되지 않은 충돌은 보류해요.",
    "caution": "자료 정제는 넓은 의미의 전처리에 포함될 수 있어요. 모델 재학습과 같은 뜻은 아니며, 좋은 자료도 정답을 보장하지 않아요.",
    "related": [
      "duplicate",
      "metadata",
      "conflict",
      "rag"
    ]
  },
  {
    "id": "metadata",
    "name": "메타데이터",
    "korean": "자료를 설명하는 이름표",
    "pronunciation": "메타데이터",
    "english": "Metadata",
    "category": "자료 정제",
    "tagline": "주제·대상·출처·시행일·버전의 이름표",
    "definition": "자료의 내용과 사용 조건을 설명하는 정보예요. 문서 유형, 주제, 적용 대상, 출처, 시행일, 버전, 승인 상태 등을 기록할 수 있어요.",
    "analogy": "서류에 붙인 분류표와 적용 조건 메모를 떠올려보세요.",
    "example": "가상 안내문에 “주제: 교육 신청 / 대상: 일반 과정 / 상태: 승인 / 버전: 2”처럼 표시해요.",
    "caution": "태그가 있다고 내용이 검증된 것은 아니에요. 분류 기준을 통일하고, 확인되지 않은 항목은 추측해서 채우지 마세요. 필요하면 여러 보조 태그를 쓸 수 있어요.",
    "related": [
      "cleansing",
      "conflict",
      "knowledge"
    ]
  },
  {
    "id": "conflict",
    "name": "상충 자료",
    "korean": "같은 조건인데 답이 다른 자료",
    "pronunciation": "상충 자료",
    "english": "Conflicting Information",
    "category": "자료 정제",
    "tagline": "다른 답을 임의로 섞지 않기",
    "definition": "같은 대상과 시점·조건에 대해 서로 맞지 않는 내용을 담은 자료예요. 조건이 다르다면 서로 다른 안내일 수 있어요.",
    "analogy": "같은 모임의 시작 시간이 두 안내문에 다르게 적혀 있을 때, 중간 시간으로 정하는 대신 공식 안내를 확인하는 것과 같아요.",
    "example": "가상 신청 마감이 3일 전과 5일 전으로 다르면 승인본·적용 대상·시행일·대체 관계를 확인해요.",
    "caution": "수정일이 최근이라는 이유만으로 정답을 고르지 않아요. 근거가 부족하면 충돌을 표시하고 답변 자료에서 보류해요.",
    "related": [
      "metadata",
      "cleansing",
      "hallucination"
    ]
  }
];
