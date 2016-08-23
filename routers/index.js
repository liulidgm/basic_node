/**
 * Created by msjrIT on 2016/8/18.
 */
var router = require('express').Router();

router.use("/",function(req,res,next){
    res.render('html/index');
});

module.exports = router;