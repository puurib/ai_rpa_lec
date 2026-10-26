// 초보자용 용어 설명. 비유는 이해를 돕기 위한 것이며 실제 기술의 모든 특성을 나타내지는 않습니다.
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
    "caution": "“에이전트”라고 해서 모든 일을 자동으로 할 수 있는 것은 아니에요. ABC Lab에서 가능한 기능과 권한은 사내 가이드로 확인해야 해요.",
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
      "request",
      "api-key",
      "packet",
      "permission"
    ]
  },
  {
    "id": "packet",
    "name": "패킷",
    "korean": "네트워크로 보내는 작은 데이터 묶음",
    "pronunciation": "패킷",
    "english": "Packet",
    "category": "연결과 통신",
    "tagline": "인터넷으로 데이터를 나눠 보내는 작은 묶음",
    "definition": "네트워크에서 데이터를 전달할 때 사용하는 작은 묶음이에요. 전달할 내용의 일부와, 목적지 같은 전달에 필요한 정보를 담아요.",
    "analogy": "큰 물건을 여러 택배 상자에 나눠 담아 보내는 것과 비슷해요. 받는 쪽의 통신 체계가 내용을 알맞게 처리해요. 실제 전송 과정은 이 비유보다 복잡해요.",
    "example": "AI 서비스에 질문을 보낼 때 그 데이터도 네트워크를 통해 전달돼요. 입문 단계에서는 패킷을 직접 다루기보다 이런 통신이 있다는 정도만 알아도 충분해요.",
    "caution": "패킷은 AI 전용 용어가 아니에요. 한 번의 API 요청이 패킷 하나라는 뜻도 아니고, AI의 토큰과도 다른 개념이에요.",
    "related": [
      "api",
      "request",
      "token"
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
      "context",
      "packet"
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
    "example": "존재하지 않는 사내 규정, 사람 이름, 논문이나 링크를 사실처럼 답할 수 있어요.",
    "caution": "중요한 날짜·금액·규정·출처는 원문과 대조하세요. “확실해?”라고 한 번 더 묻는 것만으로 검증이 되지는 않아요.",
    "related": [
      "llm",
      "rag",
      "prompt"
    ]
  },
  {
    "id": "request",
    "name": "요청·응답",
    "korean": "프로그램이 부탁하고 결과를 받는 과정",
    "pronunciation": "요청과 응답",
    "english": "Request / Response",
    "category": "연결과 통신",
    "tagline": "“이 일을 해줘”와 “이것이 결과야”",
    "definition": "프로그램이 서비스에 일을 부탁하며 보내는 것이 요청이고, 서비스가 처리 결과를 돌려주는 것이 응답이에요.",
    "analogy": "식당에서 주문을 넣는 것이 요청, 주문 결과를 받는 것이 응답이라고 생각해보세요. 항상 성공하는 것은 아니라서 “재료가 없어요” 같은 실패 안내도 돌아올 수 있어요.",
    "example": "“이 글을 요약해줘”라는 자료를 보내고 요약 결과를 받는 흐름을 생각해보세요. 실제 통신 형식은 서비스마다 달라요.",
    "caution": "요청이 실패했다고 무작정 반복하면 중복 처리나 추가 비용이 생길 수 있어요. 오류 안내와 재시도 규칙을 확인하세요.",
    "related": [
      "api",
      "packet",
      "api-key"
    ]
  },
  {
    "id": "api-key",
    "name": "API 키",
    "korean": "API 이용자를 식별·인증하는 비밀 값",
    "pronunciation": "에이피아이 키",
    "english": "API Key",
    "category": "안전한 활용",
    "tagline": "서비스 이용을 위한 비밀 출입증",
    "definition": "API를 이용할 때 호출하는 주체나 프로젝트를 식별하고, 서비스에 따라 인증에도 사용하는 비밀 값이에요.",
    "analogy": "사무실 출입증처럼 생각해보세요. 다른 사람이 가져가면 내 권한으로 이용하거나 비용을 발생시킬 수 있어요.",
    "example": "연동 도구가 API 키를 요구한다면, 회사에서 승인한 비밀정보 저장·설정 경로를 사용해야 해요. 모든 API가 키 방식인 것은 아니에요.",
    "caution": "여기에 실제 키를 입력하거나 채팅·소스 코드·공유 문서에 붙여넣지 마세요. 유출되면 담당자에게 알리고 폐기·재발급 절차를 따르세요.",
    "related": [
      "api",
      "permission",
      "request"
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
    "caution": "자료를 참고해도 오답이 사라지지는 않아요. 자료의 최신성·검색 정확도·접근 권한을 확인해야 해요. ABC Lab의 실제 지원 기능은 별도 확인이 필요해요.",
    "related": [
      "knowledge",
      "llm",
      "hallucination",
      "permission"
    ]
  },
  {
    "id": "knowledge",
    "name": "지식 자료",
    "korean": "답변의 근거로 참고할 문서",
    "pronunciation": "지식 자료",
    "english": "Knowledge Source",
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
      "api-key",
      "agent",
      "rag"
    ]
  }
];
