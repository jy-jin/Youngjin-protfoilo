$(document).ready(function(){

  let yOffset = 0;
  var showskill = $('.viewmoreSkill a');
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  $(document).ready(()=>{
    // 모바일 체크
  if(isMobile){
    alert('이 사이트는 모바일을 지원하지 않습니다.');
    window.history.back();
  }
  });
 

//페럴렉스 (네이게이션 클릭시 섹션이동)
$("#nav ul li").click(function () {
    var navIndex = $(this).index();
    var sectionTop = $(".section").eq(navIndex).offset().top;

    $("#nav ul li").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate({ scrollTop: sectionTop }, 500, "easeInOutBack");
  });

  showskill.click(function(e){
    e.preventDefault();
    $('html, body').animate( { scrollTop : $('.skillList').offset().top }, 700, "easeInOutBack" );
  
});
// 스크롤시 그래프 애니메이션 시작점
const pinStartOffset = $('#abotMe_tit').offset().top;
const appStartOffset = $('#section4').offset().top;
const typingStartOffset = $('#section5').offset().top;
let startBtn_pin = true;
let startBtn_app = true;
let startBtn_typing = true;
// 스크롤시 그래프 애니메이션 시작점 end

// 스크롤이벤트
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var bodyHeight = $("body").height();
    var screenBottom = bodyHeight - $(window).height();

    for (var i = 0; i < $(".section").length; i++) {
      var sectionTop = $(".section").eq(i).offset().top;
      var sectionHeight = $(".section").eq(i).outerHeight();
      var sectionBottom = sectionTop + sectionHeight;
      // console.log(sectionHeight);
      if (scroll >= sectionTop - 10 && scroll < sectionBottom - 10) {
        $("#nav ul li").eq(i).addClass("active");
       
      } else {
        $("#nav ul li").eq(i).removeClass("active");
   
      }

      if (scroll == screenBottom - 10) {
        $("#nav ul li").eq(5).removeClass("active");
        $("#nav ul li").eq(6).addClass("active");
      }
    }
    // 스크롤시 헤더 변경 
    // var scroll = $(this).scrollTop();
    yOffset = window.pageYOffset;

    let sec1Offset = $('#section2').offset().top
    var $nav = $('#nav'); //헤더를 변수에 넣기
    if ( yOffset >= sec1Offset){
        $nav.addClass('activated')
    }else{
        $nav.removeClass('activated')
    }
 
    // 스크롤시 그래프 애니메이션 작동
    if(startBtn_pin == true && yOffset > pinStartOffset){
      pinB();
      startBtn_pin = false;
    }else{
      startBtn_pin = true;
    }

    if(startBtn_app == true && yOffset >= appStartOffset){
      setTimeout(function(){
        $('.section4_bg').css('transform','translateY(-600%)')
      },1800);
      startBtn_app = false;
    }

    if(startBtn_typing == true && yOffset >= typingStartOffset){
      activeTyping();
      startBtn_typing = false;
    }
  });


    // header 스크롤 바탕색 변경 1번
var activateHeader = function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var secTop = $("#section4").offset().top-10 ;
    var secHeight = $("#section4").outerHeight();
    var secBottom = secTop + secHeight;
    //var headerHeight = $("#nav").outerHeight();

    if(scroll >= secTop && scroll < secBottom){
      $("#nav.activated").addClass("on");
    
    } else {
      $("#nav.activated").removeClass("on");
    }
  });
}

activateHeader();  

var i = true

    // i == true &&
    
    // var $changeheader = $('nav'); //색상이 변할 부분
    // var $window = $(window);
    
    // var pageOffsetTop = $changeheader.offset().top;//색상 변할 부분의 top값 구하기


    // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    //     pageOffsetTop = $changeheader.offset().top;
    // });
    

$(function getsize(){
  var fontsize = $("#section1 title_box h2")
  var size = fontsize.css("font-size");
  if( size == '200px')
  $("title_box").addClass('on')
});


  function animated_contents() {
      $(".zt-skill-bar > div ").each(function (i) {
          var $this  = $(this),
              skills = $this.data('width');

          $this.css({'width' : skills + '%'});

      });
  }
  
  if($('#nav ul li').eq(2).hasClass('active')){
    alert('asd');
  }
  if(jQuery().appear) {
      $('.zt-skill-bar').appear().on('appear', function() {
          animated_contents();
      });
  } else {
      animated_contents();
  }


  // 그래프 관련 
  function pinB(){$('.chart1').easyPieChart({
    barColor: '#369CD6',  //차트가 그려질 색
    trackColor: '#ddd',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
    scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
    lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
    lineWidth: 30, // 차트 선의 두께
    size: 300, // 차트크기
    animate: 1000, // 그려지는 시간 
    onStart: $.noop,
    onStop: $.noop
  });
  }

// 입력창이 비어있을때
$('input[type="text"],textarea').on("propertychange change keyup paste input", function(){
  let textarea_value = $("textarea[name='message']").val();
    let text_value = $('input[name="phoen"]').val();
    let text_value2 = $('input[name="from_name"]').val();
    let text_value3 = $('input[name="email"]').val();

    if(textarea_value != '' && text_value != '' && text_value2 != '' && text_value3 != '') {
      $('button[type="button"]').attr('disabled', false);
      console.log('email input not null!');
    } else {
      $('button[type="button"]').attr('disabled', true);
      console.log('email input null!');
    }
});
// $('input[type="text"],textarea').on('keyup',function() {
//   console.log('keyUp')
//   let textarea_value = $("textarea[name='message']").val();
//   let text_value = $('input[name="phoen"]').val();
//   let text_value2 = $('input[name="from_name"]').val();
//   let text_value3 = $('input[name="email"]').val();
  
//   if(textarea_value != '' && text_value != '' && text_value2 != '' && text_value3 != '') {
//       $('button[type="button"]').attr('disabled', false);
//       console.log('email input not null!');
//   } else {
//       $('button[type="button"]').attr('disabled', true);
//       console.log('email input null!');

//   }
// });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

});

// typing animation
var activeTyping = function(){
  var typingBool = false; 
      var typingIdx=0; 
      var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
      typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    
    
      
        if(typingBool==false){ // 타이핑이 진행되지 않았다면 
          typingBool=true; 
          
          var tyInt = setInterval(typing,100); // 반복동작 
        }
      
      
      
      function typing(){ 
        
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
          $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
          typingIdx++; 
        } else{ 
          clearInterval(tyInt); //끝나면 반복종료 
        } 
      }
      
    }

// 모달 컨트롤러
function control_modal(type, modal_name) {
  if(type == 'show'){
    console.log(modal_name);
    $('body').css('overflow-y', 'hidden');
    $('.modal_bg').show();
    $('.'+modal_name).toggle(); 
    if(modal_name == "modal_con_2depth"){
      $(".select_value").click(function(){
        $('.modal_con_2depth').toggle();
        $(".select_value_input").val($(this).text());
      })
    }  
  }else{
    $('body').css('overflow-y', 'auto');
    $('.modal_bg').toggle();
    $('.'+modal_name).toggle();
  }
  
};
$(".modal_bg").click(function(){
  $('body').css('overflow-y', 'auto');
  $('.modal_bg').hide();
  $('.control_modal').hide();
});
$(".close_modal").click(function(){
  $('body').css('overflow-y', 'auto');
  $('.modal_bg').hide();
  $('.control_modal').hide();
});

$(".select_value2").click(function(){
  // alert('클릭되었습니다');
  let abc = trim($(this).text())
  console.log(abc)
$(".select_value_input2").val(trim($(this).text()));
})
$(".select_value3").click(function(){
  // alert('클릭되었습니다');
$(".select_value_input3").val($(this).text());
})

