let express = require('express')
let app = express()
//解决跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    // 千万不要网%%￥￥￥###
    // 千万不要网
    // 千万不要网
    next();
})

let chartOne = require("./router/one.js")
let chartTwo = require("./router/two.js")
let chartThree = require("./router/three.js")
let chartFour = require("./router/four.js")
let chartMap = require('./router/map.js')

// 中间件
app.use("/one",chartOne)
app.use("/two",chartTwo)
app.use("/three",chartThree)
app.use("/four",chartFour)
app.use('/map',chartMap)

app.listen(8888)