//expressWebServer의 express 객체를 생성한다.
//생성된 객체가 있다면 생성된 객체를 참고하기 때문이다.
var express = require('express');
var router = express.Router();//express 객체중에서 routing하는 능력이 있는 객체를 추출해낸다.

/* GET home page. */
router.get('/', function (req, res) {//만약 get 방식이며 "/"로 시작한다면 여기서 처리를 한다.
    //res는 client에게 돌려주는 변수이며 
    // render는 view에 준비한 화면을 뿌려주는 역활을 한다.
    res.render("index");//view 폴더에서 index 파일을 뿌려준다는 의미
});

/*
//여기서는 URL binding을 사용하기에 "/"다음에 오는 주소는 userName으로사용하여 view에서 뿌려줄때 이용한다.
router.get("/a", function (req, res) {
    var name = req.query.myName; // 쿼리 스트링 방식
    res.render("param", {
        name: name
    });

});
*/
module.exports = router;// module을 require 할때 반환 되는 것은 router 이다.