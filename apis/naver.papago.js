require('dotenv').config()
const request = require('request-promise')

const SUPPORTED_LANG_CODE = {
    한국어  : 'ko',
    영어    : 'en',
    일본어  : 'ja',
    중국어  : 'zh-CN',
}

class NaverPapago {
    constructor() {
        this._sourceLangCode = SUPPORTED_LANG_CODE['한국어']
        this._targetLangCode = SUPPORTED_LANG_CODE['영어']
    }
    get sourceLangCode()    { return this._sourceLangCode }
    set sourceLangCode(key) { this._sourceLangCode = SUPPORTED_LANG_CODE[key] }
    get targetLangCode()    { return this._targetLangCode }
    set targetLangCode(key) { this._targetLangCode = SUPPORTED_LANG_CODE[key] }

    // 번역 처리    
    async translate(query) {
        const option = {
            method  : 'POST',
            url     : process.env.PAPAGO_TRANSLATE_API,
            headers : this.getHeaders(),
            body    : { 
                'source': this.sourceLangCode,
                'target': this.targetLangCode,
                'text': query 
            },
            json    : true
        }
        
        let translatedText
        try {
            const data = await request(option)
            translatedText = data.message.result.translatedText
        } catch(err) { 
            console.error(err) 
        }

        // 번역된 글 리턴
        return translatedText
    }

    // 언어 감지 (sourceLangCode 설정)
    async detectLanguage(query) {
        const option = {
            method  : 'POST',
            uri     : process.env.PAPAGO_DETECT_LANGS_API,
            headers : this.getHeaders(),  
            body    : { query },
            json: true
        }

        let langCode
        try {
            const data = await request(option)
            langCode = data.langCode
        } catch(err) { 
            console.error(err) 
        }

        // 감지된 언어 코드 리턴
        return langCode
    }

    getHeaders() {
        return {
            'X-Naver-Client-Id'     : process.env.PAPAGO_CLIENT_ID, 
            'X-Naver-Client-Secret' : process.env.PAPAGO_CLIENT_SECRET                
        }
    }
}

module.exports = { NaverPapago, SUPPORTED_LANG_CODE }