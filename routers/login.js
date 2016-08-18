var router = require('express').Router();

router.get('/', function(req, res, next) {
    //res.end('这是一个login页面,请填写username,pass');
    res.render('html/login');
});
var TEST = true;
router.post('/', function(req, res, next) {
    if (!req.body.username) return res.send('meiyou username');
    if (!req.body.pass) return res.send('meiyou pass');
    if (TEST) {
        return res.send({flag:true});
       // res.render('html/index');
    }


 /*   httpClient.post(config.backend + "/login", req.body, function(json) {
        res.send({
            name: 'nimeide',
            data: '您成功登录=====>>>>>>>username:' + req.body.username + ';pass:' + req.body.pass
        });
        res.redirect('/static/login.html');
    });*/
});


module.exports = router;