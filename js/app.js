$(document).ready(function() {
  var carousel = $("#carousel").waterwheelCarousel({
    flankingItems: 3,
  });

  $($('img').filter(function() {
    return $(this).attr('class') != 'carousel-center';
  })).bind("click", function() {
    // carousel.prev();
    $('#textbox ').html($('img').filter(function() {
      return $(this).css('z-index') == '5';
    }).data('content'));
    return false;
  });
});

function slideLine(box,stf,delay,speed,h)
{
  var slideBox = document.getElementById(box);
  var delay = delay||1000,speed = speed||20,h = h||130;
  var tid = null,pause = false;
  var s = function(){tid=setInterval(slide, speed);}
  var slide = function(){
    if(pause) return;
    slideBox.scrollTop += 2;
    if(slideBox.scrollTop%h == 0){
      clearInterval(tid);
      slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
      slideBox.scrollTop = 0;
      setTimeout(s, delay);
    }
  }
  slideBox.onmouseover=function(){pause=true;}
  slideBox.onmouseout=function(){pause=false;}
  setTimeout(s, delay);
}
slideLine('ann_box','h1',3000,25,130);

function fsubmit(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var words = document.getElementById("words").value;
  console.log("123");
  var petitionNum = petitionCount.length+1;
  console.log(petitionNum);
  petitionRef.child(petitionCount.length+1).set({
    name: name,
    email: email,
    words : words
  });
}

$(function(){
  $('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function(){
    $(this).addClass('qa_title_on');
  }, function(){
    $(this).removeClass('qa_title_on');
  }).click(function(){
    var $qa_content = $(this).next('div.qa_content');
    if(!$qa_content.is(':visible')){
      $('#qaContent ul li div.qa_content:visible').slideUp();
    }
    $qa_content.slideToggle();
  }).siblings().addClass('qa_content').hide();
});

$(function(){

  $(window).scroll(function(e) {
    var scrollAmount = $('body').scrollTop();
    console.log(scrollAmount);

    if(scrollAmount >=700 ) {
      $(".goodbye").html(
        '<iframe id="youtube" frameborder="0" height="693px" width="1243px" src="https://www.youtube.com/embed/kzIOUCtWRNQ?&controls=0&showinfo=0&autohide=1&rel=0&modestbranding=1?rel=0&autoplay=1"></iframe>'
      );
      $("div").removeClass("goodbye");
    }
  })
})

window.fbAsyncInit = function() {
  FB.init({
    appId            : '{your-app-id}',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk/debug.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
  $("#wrapper").fadeIn(2000);
});
