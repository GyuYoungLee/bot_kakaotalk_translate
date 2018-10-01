# bot_kakaotalk_translation

### Description : 번역 기능을 제공하는 카카오톡 챗봇 

- 카카오톡 앱에서 동작
- node.js 로 구현 
- 서버는 heroku 에 배포   
- 번역 기능은 파파고 연동해서 구현 

### 봇 사용법

- URL : http://pf.kakao.com/_HAYgC/chat
- 사용법
  - 언어 변경
- ![이미지](./etc/20180803_165016.jpg)

### Tech

- Node.js
  - npm i --save express
  - npm i --save body-parser
  - npm i --save request
  - npm i --save request-promise
  - npm i --save google-tts-api
   
- 플랫폼
  - 카카오톡 플러스친구 API
  - 파파고 NMT 번역 API
  - 파파고 언어감지 API
- 인프라 : heroku

### Reference

- 카카오톡 플러스친구 생성   : https://center-pf.kakao.com/   
  - 카카오톡 플러스친구 API  : https://github.com/plusfriend/auto_reply
- Heroku 앱 생성             : https://www.heroku.com/
  - Heroku 배포된 서비스 URL : https://bot-kakaotalk-translation.herokuapp.com/keyboard
- 파파고 앱 등록             : https://developers.naver.com/apps/#/register?api=ppg_n2mt
  - 파파고 번역 NMT API      : https://developers.naver.com/docs/papago/papago-nmt-example-code.md#node-js
  - 파파고 언어 감지 API     : https://developers.naver.com/docs/papago/papago-detectlangs-example-code.md#node-js 
- 구글 TTS                   : https://github.com/zlargon/google-tts

### Commit history

- 카카오톡 플러스친구 API : git checkout 42d4021
- 파파고 번역 API         : git checkout feef1ff
- 파파고 언어감지 API     : git checkout 3225aad
- TTS 추가                : git checkout 63c1fb8
