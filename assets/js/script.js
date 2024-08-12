/* query string grab */
$(document).ready(function () {
  if (sessionStorage.getItem('qsGet') !== 'true') {
    sessionStorage.setItem('qsVal', window.location.href.slice(window.location.href.indexOf('?') + 1));

    if (sessionStorage.getItem('qsVal') === window.location.href || sessionStorage.getItem('qsVal') === '') {
      sessionStorage.setItem('qsVal', 'campaign=Digital%20Direct&csource=Digital%20Direct');
    }

    $(".querystring").val(sessionStorage.getItem('qsVal'));
    sessionStorage.setItem('qsGet', 'true');
  }
  else {
    $(".querystring").val(sessionStorage.getItem('qsVal'));
  }
});

/* end of query string grab */

/* onload form reset */
$(document).ready(function () {
  $("form").trigger('reset');
});
/* end of onload form reset */


/* click outside to close */
$(document).click(function () {
  $('#navbarcollapse').collapse('hide');
});
/* end of click outside to close */

/* amenities modal */
$(".zmimg").click(function () {
  $("#zm1").attr("src", $("#zmimg1").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm2").attr("src", $("#zmimg2").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm3").attr("src", $("#zmimg3").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm4").attr("src", $("#zmimg4").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm5").attr("src", $("#zmimg5").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm6").attr("src", $("#zmimg6").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm7").attr("src", $("#zmimg7").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm8").attr("src", $("#zmimg8").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm9").attr("src", $("#zmimg9").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm10").attr("src", $("#zmimg10").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm11").attr("src", $("#zmimg11").attr('src').replace('.jpg', '_hd.jpg'));
  $("#zm12").attr("src", $("#zmimg12").attr('src').replace('.jpg', '_hd.jpg'));

  $("#amenmodal").modal();
});
/* end of amenities modal */

/* space modal */
$(".skyimg").click(function () {
  $("#sky1").attr("src", $("#skyimg1").attr('src').replace('.jpg', '_hd.jpg'));
  $("#sky2").attr("src", $("#skyimg2").attr('src').replace('.jpg', '_hd.jpg'));
  $("#sky3").attr("src", $("#skyimg3").attr('src').replace('.jpg', '_hd.jpg'));
  $("#sky4").attr("src", $("#skyimg4").attr('src').replace('.jpg', '_hd.jpg'));

  $("#skymodal").modal();
});
/* end of space modal */

/*form double click set */
$("body").on("submit", "form", function () {
  $(this).submit(function () {
    return false;
  });
  return true;
});
/*form double click set */


/* 360 iframe delayed load */
window.onload = function () {
  setTimeout
    (
      function () {
        $("#viewframe1").attr("src", "https://www.google.com/maps/embed?pb=!4v1566808058324!6m8!1m7!1sCAoSLEFGMVFpcE51bk42WWJKWmVuNDJqRW1DdVpGNG5mWUhON3JKd3picnV6eGdq!2m2!1d19.1857231!2d72.9472621!3f323.52430138060777!4f-0.8686726595975358!5f0.4003113161157848");
        $("#viewframe2").attr("src", "https://www.google.com/maps/embed?pb=!4v1563549563925!6m8!1m7!1sCAoSLEFGMVFpcE9kd2VTcHFxV1pmLU1EWEZCZ09lRUNaRXJhd055RUlYSVFyOUNm!2m2!1d19.185780332245!2d72.947248630661!3f0!4f0!5f0.7820865974627469");
      }, 6000
    );

}
/* 360 iframe delayed load */


/* sticky mob fadein */
$("#stickymob").hide();

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("#stickymob").fadeIn(500);
  }
  else {
    $("#stickymob").fadeOut(500);
  }
});
/* end of sticky mob fadein */


/* sticky mob fadein */
$("#ocr").hide();

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("#ocr").fadeIn(600);
  }
  else {
    $("#ocr").fadeOut(500);
  }
});
/* end of sticky mob fadein */

/* modal killer */
if (sessionStorage.getItem('popOnce') !== 'true') {
  function showModal() {
    if (!$("#jwmodal,#jwautomodal,#amenmodal,#skymodal").is(":visible")) {
      $("#jwautomodal").modal('show');
      sessionStorage.setItem('popOnce', 'true');
    }
  }

  var modpop;

  function modalTimeSet() {
    modpop = setTimeout(function () { showModal(); }, 60000);
  }

  modalTimeSet();

  function modalTimeKill() {
    clearTimeout(modpop);
    sessionStorage.setItem('popOnce', 'true');
  }

  function modalKillTrigger() {
    $("form :input").focus(function () {
      modalTimeKill();
    });
  }
  modalKillTrigger();
}
/* end of modal killer*/

/* hide sticky buttons */
$("form :input").focus(function () {
  $("#stickymob").hide();
});

$("form :input").blur(function () {
  $("#stickymob").show();
});
/* end of hide sticky buttons */

/* smooth scroll */
$('.navlink[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: ($($(this).attr('href')).offset().top - 91)
  }, 500, 'linear');
});

/* end of smooth scroll*/

/* smooth scroll for footer link */
$('.footerlink[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: ($($(this).attr('href')).offset().top - 91)
  }, 500, 'linear');
});

/* end of smooth scroll for footer link*/




/* amenities carousel */
$('.amencarousel').slick(
  {
    prevArrow: $('#amencarouselleft'),
    nextArrow: $('#amencarouselright'),
    infinite: true,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    appendDots: $(".amenpage"),
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="amenpagelink">' + (i + 1) + '</a>';
    },
    responsive:
      [
        {
          breakpoint: 992,
          settings:
          {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            fade: true,
            cssEase: 'linear'
          }
        }
      ]
  });
/* end of amenities carousel */


//------------------------------------------------------alok js-----------------------------------------------------

/* walkthrough iframe */
$("#play1").click(function () {
  $("#youtube1").css("display", "none");
  $("#youtubeiframe1").css("display", "block");
  $("#tmframe1").attr("src", "https://www.youtube.com/embed/xKm6Yi-bhp0?autoplay=1");
});

/* end of walkthrough iframe */

/* walkthrough iframe */
$("#play2").click(function () {
  $("#youtube2").css("display", "none");
  $("#youtubeiframe2").css("display", "block");
  $("#tmframe2").attr("src", "https://www.youtube.com/embed/JmtTojka6GI?autoplay=1");
});

/* end of walkthrough iframe */
/* walkthrough iframe */
$("#play3").click(function () {
  $("#youtube3").css("display", "none");
  $("#youtubeiframe3").css("display", "block");
  $("#tmframe3").attr("src", "https://www.youtube.com/embed/vC_nlHYQFX0?autoplay=1");
});


$('#priceArrowLeft').click(function () {
  alert("hello prince");
});
