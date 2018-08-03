const NaverPapago   = require('../apis/naver.papago')
const Util          = require('../utils/Util')
const naverPapago   = new NaverPapago()


module.exports = class KakaoService {

    // 키보드 보여주기
    showKeyboard() {
        const retMsg = {
            message: {
                text: '번역 언어를 선택해 주세요'
            },
            keyboard: Util.getKeyboard()
        }

        return retMsg
    }

    // 키보드 요청 처리
    changeLanguage(content) {
        const splitMsg = content.split('->')
        const sourceLanguage = splitMsg[0]
        const targetLanguage = splitMsg[1].split(' ')[0]

        const retMsg = {
            message: {
                text: `${targetLanguage}로 번역을 시작합니다`
            }
        }

        return retMsg
    }

    // 번역 처리
    async translate(content) {
        let translatedText
        try {
            translatedText = await naverPapago.translate(content)
        } catch(err) { 
            console.error(err) 
        }

        const retMsg = {
            message: {
                text: translatedText
            }
        }       

        return retMsg
    }
}