let express = require("express")
let router = express.Router()
let chinaData = require("../mock/china.json")

router.get("/data",(req,res) =>{
	res.send({msg:"我是地图的路由地址",chartMap:chinaData})
})

module.exports = router