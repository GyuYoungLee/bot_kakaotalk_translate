require('dotenv').config()
const request = require('request-promise')


module.exports = class NaverPapago {

    // 번역 처리
    async translate(query) {
        var option = {
            method  : 'POST',
            url     : process.env.PAPAGO_TRANSLATE_API,
            headers : { 
                'X-Naver-Client-Id': process.env.PAPAGO_CLIENT_ID, 
                'X-Naver-Client-Secret': process.env.PAPAGO_CLIENT_SECRET
            },
            body    : { 'source': 'ko', 'target': 'en', 'text': query },
            json    : true
        }
        
        let translatedText
        try {
            const data = await request(option)
            translatedText = data.message.result.translatedText
        } catch(err) { 
            console.error(err) 
        }

        return translatedText
    }
}