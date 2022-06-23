# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

## 🧑‍💻 Introduce

**[마포1기] 기업연계형 프론트엔드 실무 프로젝트 과정 수강 중인 전영주 입니다.**

Javascript와 react에 대한 심화 교육을 받고 협업을 통한 프로젝트를 희망하여 원티드 프리온보딩 코스에 지원하게 되었습니다.

   
# 과제풀이


## 구조
```bash
├── public
│   ├── data
│   │    ├── feedData
│   │    └── userData
│   └── index.html
└── src
    ├── components
    │    ├── Login
    │    ├── Main
    │    ├── Gnb
    │    ├── FeedList
    │    └── Feed
    ├── pages
    ├── styles
    ├── App.js
    └── index.js
``` 

## Login
- 첫 페이지로, input 2개와 button 한개로 구성된 form입니다.
- email과 password 작성 시 onChange이벤트를 통해 두 가지 이벤트를 작성하였습니다.
  - 유효성 검사가 실행됩니다. 설정한 표현식과 일치한다면 생성해둔 state에 true값을 저장합니다. 두 작성란에서 모두 true가 된다면 setState를 통해 submit button의 색상이 진하게 변경되도록 설정하였습니다.
  - 작성한 값이 setState를 통해 설정해둔 변수에 저장됩니다.
- submit 버튼을 누르면 form에서 onSubmit이벤트가 작동합니다.
  - 해당 이벤트에서는 두 가지 기능이 작동됩니다.
    1. fetch를 통해 userData를 가져와 저장된 email, password 샘플과 입력된 값을 비교합니다. 입력된 값이 샘플데이터에 있다면 true를 반환하고 email과 password에서 모두 true가 반환되면 home으로 이동합니다. 그렇지 않은 경우 alert창이 나옵니다.
    2. 입력된 email과 password를 localStorage에 저장합니다.

## Main
- Main 컴포넌트에서는 Gnb와 FeedList 컴포넌트를 불러옵니다. 

### Gnb
- Gnb는 position: fixed 로 상단에 고정되어 있습니다.
- 화면의 크기가 480px 이하가 된다면 가운데 검색창이 사라지고 로고와 util list가 양 옆으로 정렬됩니다.
- util list의 가장 오른쪽에는 logout 버튼이 있습니다.
  - logout 버튼 클릭시 localStorage에 저장된 email과 password가 삭제되고 login 페이지로 이동합니다.

### FeedList
- FeedList 컴포넌트에서는 fetch를 사용해 public에 있는 feedData를 가져옵니다. map을 돌려 feedData의 수만큼 Feed 컴포넌트를 불러옵니다.

### Feed
- Feed 컴포넌트는 크게 상단 유저의 정보를 보여주는 box와 가운데 content, 하단 댓글 form으로 나뉘어집니다.
- 댓글달기
  - 하단 댓글 input에서는 onChange를 통해 입력된 값이 state에 저장됩니다.
  - 게시 버튼을 누르면 onSubmit을 통해 state에 저장됩니다. 댓글을 모두 저장하기 위해 스프레드 연산자를 통해 내용을 deep copy하고 push를 통해 새로 작성된 댓글을 추가로 저장합니다.
  - props를 통해 저장된 댓글들을 `<FeedTxT>` 컴포넌트로 전송합니다. `<FeedTxt>`컴포넌트에서는 댓글의 수만큼 map을 돌려 댓글을 출력합니다.
  - input의 value를 state값으로 설정하고 submit 버튼 클릭시 state값을 '' 빈 값으로 변경하기때문에 input은 초기화됩니다.
- 상단과 하단을 제외한 content는 `<FeedImg>` 와 `<FeedTxt>` 컴포넌트로 나뉩니다.
  - [imgLoading, setImgLoading] 이라는 state를 선언합니다. 초기값은 true입니다.
  - [txtFeed, setTxtFeed] 라는 state를 선언합니다. 초기값은 false 입니다.
  - `<FeedImg>`에서 img에 onload 이벤트를 통해 setImgLoading을 작동시키고 값을 false로 변경합니다.
  - `<Feed>`에서는 useEffect를 통해 imgLoading이 true인 경우 콘솔에 '로딩중'을 찍고, false인 경우엔 setTxtFeed를 통해 txtFeed의 값을 true로 변경합니다.
  - txtFeed의 값이 true인 경우엔 <FeedTxt> 컴포넌트를 보여주고, false인 경우 <LoadingFeed> 컴포넌트를 보여줍니다.
  - 최종적으로는 img가 로딩된 후에 아래 textFeed가 로딩됩니다.
