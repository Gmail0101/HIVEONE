/**************/
/* scroll spy */
/**************/
var navHeight = $(".visual").height(); 
// visual의 크기를 구하기
$(window).scroll(function(){  // 윈도우 스크롤 기능 작동
    var rollDown = $(this).scrollTop() >= navHeight; 
// 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

/*
scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
*/
if(rollDown){ 
//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
        $("#header").css({"box-shadow":"0px 5px 10px rgba(0,0,0,0.3)"});
    } else{
      // 높이가 같거나 크지 않는다면
      $("#header").css({"background":"#fff","box-shadow":"0px 5px 10px rgba(0,0,0,0)"});
    }
});




/**************/
/*     GNB    */
/**************/
$(function(){
    // 마우스 오버 했을경우
    $(".gnb").on({mouseover : function(){
            $(".submenu>li").stop().show();
            $("#header").css({"height":"300px"})
        },
        // 마우스가 해당 영역을 벗어날경우
        mouseleave : function(){
            $(".submenu>li").stop().hide();
            $("#header").css({"height":"100px"})
        }
    })

    // /* 사이드 메뉴 */
    // $(".menuBar").click(function(){
    //     $(".sidemenu").animate({"right":"0%"}).show();
    // });

    // $(".side-close").click(function(){
    //     $(".sidemenu").css({"right":"-50%"}).hide();
    // });
})



/**************/
/* JDSlider   */
/**************/
    $('.slider1').jdSlider({
        wrap: '.slide-inner',
        slideShow: 2,
        slideToScroll: 1,
        responsive: [{
            viewSize: 1024,
            settings: {
                slideShow: 1,
                slideToScroll: 1
            },
            viewSize: 768,
            settings: {
                slideShow: 1,
                slideToScroll: 1
            },
            viewSize: 320,
            settings: {
                slideShow: 1,
                slideToScroll: 1
            }
        }]
    });




    /************/
    /*   탭메뉴 */
    /***********/

    // 탭 컨텐츠 숨기기
$(".tab_content").hide();

// 첫번째 탭콘텐츠 보이기
$(".tab_container").each(function () {
  $(this).children(".tabs li:first").addClass("active");
  $(this).children(".tab_content").first().show();
});
//탭메뉴 클릭 이벤트
$(".tabs li a").click(function () {
  
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().find(".tab_content").hide();
  var activeTab = $(this).attr("rel");
   $("#" + activeTab).fadeIn();
});
