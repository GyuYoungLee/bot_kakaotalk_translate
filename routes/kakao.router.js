const router        = require('express').Router()
const KakaoService  = require('../services/kakao.service')
const Util          = require('../utils/Util')
const kakaoService  = new KakaoService()


router.get('/keyboard', (req, res) => {
    res.send(Util.getKeyboard())
})

router.post('/message', (req, res) => {
    const { content, type } = req.body
    console.log('/message - content:', content)
    console.log('/message - type:', type)

    // 키보드 보여주기
    if (content.includes('언어 변경')) {
        return res.send(kakaoService.showKeyboard())
    }

    // 키보드 요청 처리
    if (content.includes('->')) {
        return res.send(kakaoService.changeLanguage(content)) 
    }

    // 번역 처리
    res.send(kakaoService.translate(content))
})

module.exports = router