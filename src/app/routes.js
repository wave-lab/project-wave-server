// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router({mergeParams: true})

//schedule
router.use('/', require('./controller/scheduler/scheduler_routes'));

//playlists
router.use('/playlists', require('./controller/playlists/playlists_routes'));

//song
router.use('/', require('./controller/songs/songs_routes'));

//user
router.use('/', require('./controller/user/user_routes'));

//search
router.use('/', require('./controller/search/search_routes'));

module.exports = router;