const Util = require('../utils/Util')

module.exports = class KakaoService {

    showKeyboard() {
        return {
            message: {
                text: '번역 언어를 선택해 주세요'
            },
            keyboard: Util.getKeyboard()
        }
    }

    changeLanguage(content) {
        const splitMsg = content.split('->')
        const sourceLanguage = splitMsg[0]
        const targetLanguage = splitMsg[1].split(' ')[0]

        return {
            message: {
                text: `${sourceLanguage}를 입력해 주세요`
            }
        }
    }

    translate(content) {
        return {
            message: {
                text: content
            }
        }
    }
} 