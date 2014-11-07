
$(document).ready(function(){
    var winHeight = document.documentElement.clientHeight;
    var winWidth = document.documentElement.clientWidth;
    
    var w;
    var current;

     function sendCommand(id,type,childId){
      $.ajax({
        type : "post",
        url : url,

        cache : false,
        success : function(data) {}}
        );

     };
     function unlock(){
      $(".box").removeClass("yueding-disable");
      clearInterval(w); 
      current.text("");
      $(".lock-tab").toggleClass("close");
     };
		$(".header-nav").click(function(){
			$(this).toggleClass("qinzi-head");
			$(this).siblings().toggleClass("qinzi-head");
			$("#yueding").toggleClass("close");
			$("#record").toggleClass("close");
	});
		/*上锁函数*/
		$(".box").click(function(){
       current=$(".lock-tab-time");
        var s = 1;//用来记录秒,因为需求是从1开始的。
        var m = 0;//用来记录分钟
         w = setInterval(function () {
        s++;
        if (s == 60) {//当秒跑到60时，分钟加1，秒钟从0开始。
          m++;
          s = 0;
      }
      current.text( m + ":" + (s < 10 ? "0" + s : s)); //显示时间(秒小于10时，前补0)
      if (m == 15) { 
        clearInterval(w); 
        unlock;
      } //到过15分钟时停止
      },1000);
    });
    $(".box").click(function(){
      $(this).children("div").addClass("yueding-lock");
      $(this).siblings().addClass("yueding-disable");
      $(".lock-tab").toggleClass("close");
    });
      /*解锁函数*/
     $(".lock-tab").click(unlock);  
});
/*响应用户点击，发出对应指令*/

/*后台响应函数*/

/*进入倒计时*/
        

/*===========================信息显示================================*/



