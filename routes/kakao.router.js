const router        = require('express').Router()
const KakaoService  = require('../services/kakao.service')
const kakaoService  = new KakaoService()

router.get('/keyboard', (req, res) => {
    const data = {
        "type": "text"
    }
    res.send(data)
})

router.post('/message', async (req, res) => {
    const { content, type } = req.body

    // 키보드 보여주기
    if (content.includes('언어 변경')) {
        const data = kakaoService.showKeyboard()
        return res.send(data)
    }

    // 키보드 요청 처리
    if (content.includes('->')) {
        const data = kakaoService.changeLanguage(content)
        return res.send(data) 
    }

    // 번역 처리
    try {
        const data = await kakaoService.translate(content)
        res.send(data)
    } catch(err) { console.error(err) }
})

module.exports = router