var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData;
});

var listData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    this.body = listData;
});









// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });
// router.get('/api/1', function *(next) {
//     this.body = 'test data 1'
// });
// router.get('/api/2', function *(next) {
//     this.body = {
//         a: 1,
//         b: '123'
//     }
// });

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
