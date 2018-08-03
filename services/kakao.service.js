const { NaverPapago, SUPPORTED_LANG_CODE }  = require('../apis/naver.papago')
const googleTTS                             = require('google-tts-api')
const naverPapago                           = new NaverPapago()

module.exports = class KakaoService {

    // 키보드 보여주기
    showKeyboard() {

        // 응답 메시지
        const retMsg = {
            message: {
                text: '대상 언어를 선택해 주세요'
            },
            keyboard: this.getKeyboard()
        }
        return retMsg
    }

    // 키보드 요청 처리 (targetLangCode 설정)
    changeLanguage(content) {
        const targetLanguage = content.split('->')[1].split(' ')[0]
        naverPapago.targetLangCode = targetLanguage
        
        // 응답 메시지
        const retMsg = {
            message: {
                text: `${targetLanguage}로 번역을 시작합니다`
            }
        }
        return retMsg
    }

    // 번역 처리
    async translate(content) {
        console.log('translate() - content:', content)
        let retMsg

        try {
            // 언어 감지
            const langCode = await naverPapago.detectLanguage(content)
            console.log('translate() - detectLanguage:', langCode)

            if (langCode != SUPPORTED_LANG_CODE['한국어']) {
                // 응답 메시지        
                retMsg = {
                    message: {
                        text: "한국어를 입력해 주세요"
                    }
                }  
            } else {
                // 번역 처리
                const translatedText = await naverPapago.translate(content)
                console.log('translate() - translatedText:', translatedText)

                // 발음 듣기
                const url = await googleTTS(translatedText, naverPapago.targetLangCode, 1)
                console.log('translate() - url:', url)   

                // 응답 메시지
                retMsg = {
                    message: {
                        text: translatedText, 
                        message_button: {
                            label: "발음 듣기",
                            url
                        }
                    }
                }                  
            }   
        } catch(err) {
            console.error(err) 
        }

        return retMsg
    }

    getKeyboard() {
        return {
            type: 'buttons',
            buttons: ['한국어->영어 번역', '한국어->일본어 번역', '한국어->중국어 번역']
        }
    }
}