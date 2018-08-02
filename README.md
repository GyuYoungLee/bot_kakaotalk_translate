# bot_kakaotalk_translation

### Description : 번역 기능을 제공하는 카카오톡 챗봇 

- 카카오톡 앱에서 동작
- node.js 로 구현 
- 서버는 heroku 에 배포   
- 번역 기능은 파파고 연동해서 구현 

### 봇 사용법

- URL : http://pf.kakao.com/_HAYgC
- 사용법

### Tech

- Node.js
  - npm i --save express
  - npm i --save body-parser
  - npm i --save request
  - npm i --save request-promise 
- 플랫폼 : 카카오톡 플러스친구 API, 파파고 NMT API
- 인프라 : heroku

### Reference

- 카카오톡 플러스친구 생성  : https://center-pf.kakao.com/   
- 카카오톡 플러스친구 API   : https://github.com/plusfriend/auto_reply
- Heroku 앱 생성            : https://www.heroku.com/
- Heroku 배포된 서비스 URL  : https://bot-kakaotalk-translation.herokuapp.com/keyboard
- 파파고 앱 등록            : https://developers.naver.com/apps/#/register?api=ppg_n2mt
- 파파고 NMT API            : https://developers.naver.com/docs/papago/papago-nmt-example-code.md#node-js

### Commit history

- 카카오톡 API : git checkout 42d4021
