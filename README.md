# 🎬 넷플릭스 클론
이 프로젝트는 넷플릭스 홈페이지를 클론 코딩한 것이다. The Movie DB API를 사용해서 영화 정보를 가져오고, React를 사용해서 구현했다.
<img width="936" alt="스크린샷 2024-09-29 오후 9 16 37" src="https://github.com/user-attachments/assets/6a072062-dec8-41a0-b29c-f96009d54c4c">

## 💡 주요 기능
### 🔍 검색
<img width="1187" alt="스크린샷 2024-09-29 오후 9 18 55" src="https://github.com/user-attachments/assets/037d344d-8022-4683-8fb1-c69e8a9fc3a3">

- 상단 검색 창에 검색어를 입력하면 영화를 검색할 수 있다.
- 검색 결과 중 특정 영화를 누르면 해당 영화의 사진이 나온다.

### 🎞️ 상세 정보
<img width="1187" alt="스크린샷 2024-09-29 오후 9 18 37" src="https://github.com/user-attachments/assets/357f1679-61c6-41c3-8dda-6cdbdf5ad06f">

- 각 영화 포스터를 클릭하면 상세 정보 모달창이 뜨며, 개봉 날짜, 평점, 줄거리 등의 정보를 확인할 수 있다.

### ▶️ 예고편
![예고편-화질낮춤](https://github.com/user-attachments/assets/9704b8f1-e338-4ba3-93b1-c74eb5f78603)

_(GIF 용량을 줄이기 위해 FPS가 낮게 설정되어 화면 전환이 매끄럽지 않다.)_

- Play 버튼을 누르면 해당 영화와 관련된 유튜브 영상을 볼 수 있다.

### 📽️ 장르별 영화 목록
![영화목록](https://github.com/user-attachments/assets/98506f61-398e-4b29-a88f-cb41b7136630)

- 넷플릭스 오리지널, Trending Now, Top Rated, 액션 영화, 로맨스 영화, 코미디 영화, 다큐멘터리 등 장르별로 영화 목록을 볼 수 있다.
- 화살표를 클릭하거나 터치로 슬라이드할 수 있다.

### 📝 푸터
<img width="707" alt="스크린샷 2024-09-29 오후 9 19 16" src="https://github.com/user-attachments/assets/a70532b2-7dd2-4837-b4e2-8df6219410d3">

- 넷플릭스 관련 사이트 링크들을 포함한 푸터가 있다.
- 항목들을 클릭하면 해당 사이트로 넘어간다.

## 🛠️ 기술 스택
- ⚛️ React: 컴포넌트 기반 UI 구현
- 🎥 TMDb API: 영화 및 TV 프로그램 정보 제공
