//--------定义数据--------
var datas=[];

datas["housework"]={
    "moudle": "qzy",
    "action":"housework",
    "extend":""
};
datas["xizao"]={
    "moudle": "qzy",
    "action":"housework",
    "extend":""
};
datas["shuijiao"]={
    "moudle": "qzy",
    "action":"housework",
    "extend":""
}

document.addEventListener("blendready", function(dom) {
    Blend.lightInit({
    ak:"mLezG9Zoat7MAxOU7sgn1U7z", //轻应用apikey，请参考《获取API Key》文档
    module:["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready",function(){
    
});
    var tabs;
    // <!--孩子学习信息-->
    Blend.ui.layerInit("childInfo",function(){
        Blend.ui.on("back",function(event){
            InfoLayer.out();
        });
      $('back',dom).on("click",function(){
        Blend.ui.fire("back","0");
      });  
    });
    Blend.ui.layerInit("0", function(dom) {
        tabs = new Blend.ui.LayerGroup({
            id: "tabs",
            layers: [{
                id: 'qinzi',
                url: 'tab1.html',
                "active": true,
                'autoload': true,

            }, {
                id: 'recorded',
                url: 'tab2.html',
                'autoload': true,
                "pullToRefresh": true,
                "pullBgColor": "ff0000",
                "pullText": "下拉刷新",
                "loadingText": "更新中...",
                "releaseText": "释放更新",
                "ptrFn": function() {
                    console.log("refresh1 callback");
                    //执行刷新函数
                    // loadData();
                    setTimeout(function() {
                        Blend.ui.layerStopRefresh("recorded");
                    },800);
                }
            }],
            onshow: function(event) {
                var id = event['detail'];
                $(".header-nav").removeClass('qinzi-head');
                $("#" + id).addClass('qinzi-head');
            },
            left: 0,
            top: 100
        });
        $("nav a").on("touchend", function(e) {
            // alert("in");
            e.preventDefault();
            tabs.active(this.id);
            return false;
        });
        $("nav a").on("touchstart", function(e) {
            // alert("in");
            e.preventDefault();
            tabs.active(this.id);
            return false;
        });
        $("nav a").on("click", function(e) {
            // alert("in");
            e.preventDefault();
            tabs.active(this.id);
            return false;
        });
        
        //跳转个人信息
       
    
    $('#goInfo').on("click",function(e){
            e.preventDefault();            
            // new Blend.ui.Layer({ "id":"childInfo", "url":"studyinfo.html", "active":true });
            Blend.ui.fire("createInfoLayer","0");                        
    });
    
        var InfoLayer;
        Blend.ui.on("createInfoLayer",function(e){
            if (Blend.ui.get("childInfo")) {
                InfoLayer.in();
            }else{
                InfoLayer=new Blend.ui.Layer({
                    "id":"childInfo",
                    "url":"studyinfo.html",
                    "active":true,
                    "top":0,
                    "left":0
                });
            }
        });
        Blend.ui.on("backhome", function (event) {
           InfoLayer.out();
        });
    });
    Blend.ui.layerInit("qinzi", function(dom) {
        var w;
        var current;
        //离线状态
        // var status=getStatus('');
        $(".box",dom).on("click", function(e) {
            e.preventDefault();
            //发送指令
            sendCommand($(this));
            //上锁
           lock($(this));
        });
        $(".lock-tab").bind("click",function(e){
            // e.preventDefault();
            alert($(".box").data("extend"));
            if($(".box").data("extend")=="cancel"){
                unlock();
            }
            
        })
        var sendCommand=function(box){
            console.log(box.data("id"));
            
            alert("点击了"+box.data("id"));
            // alert("点击了"+datas[actions].action);
            box.data("extend","cancel");
            // $.ajax(url, settings, settings)

        }
        var lock =function (box){
            box.children("div").addClass("yueding-lock");
            box.siblings().addClass("yueding-disable");
            $(".lock-tab").toggleClass("close");
            current = $(".lock-tab-time");
            var s = 1; //用来记录秒,因为需求是从1开始的。
            var m = 0; //用来记录分钟
            w = setInterval(function() {
                s++;
                if (s == 60) { //当秒跑到60时，分钟加1，秒钟从0开始。
                    m++;
                    s = 0;
                }
                current.text(m + ":" + (s < 10 ? "0" + s : s)); //显示时间(秒小于10时，前补0)
                if (m == 15) {
                    clearInterval(w);
                    unlock();
                } //到过15分钟时停止
            }, 1000);
        };
        var unlock = function() {
            $(".box").removeClass("yueding-disable");
            clearInterval(w);
            current.text("");
            $(".lock-tab").toggleClass("close");
        };
    });
    Blend.ui.layerInit("recorded",function(dom){
        $(".r-day-type").on("click",function(e){
            console.log("点击了时间选择");
            e.preventDefault();
            $(".popup-date").addClass("popup-date-touch");
        });
        $(".date-sure").on("click",function(e){
            e.preventDefault();
            $(".popup-date").removeClass("popup-date-touch");
            alert("您选择的日期是"+$("#date-select").attr("value"));
        });
        $(".date-cancel").on("click",function(e){
            e.preventDefault();
            $(".popup-date").removeClass("popup-date-touch");
            alert("您没有选择日期");
        });
    });
    Blend.ui.layerInit("childInfo", function(dom) {
        $(".backhome").click(function(){
            Blend.ui.fire("backhome","0");
        }
        );
    });
});