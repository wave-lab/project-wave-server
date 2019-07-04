// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router({mergeParams: true})

router.use('/', require('./controller/song/song_routes'));

//user
router.use('/', require('./controller/user/user_routes'));

//search
router.use('/', require('./controller/search/search_routes'));

//playlists
router.use('/playlists', require('./controller/playlists/playlists_routes'));

router.use('/test', require('./controller/default/default'));

module.exports = router;