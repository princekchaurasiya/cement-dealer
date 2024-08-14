/* Query String Grab */
$(document).ready(function () {
  // Check if 'qsGet' is not set in sessionStorage
  if (!sessionStorage.getItem('qsGet')) {
    // Get the query string part of the URL
    let queryString = window.location.href.split('?')[1] || '';

    // If query string is empty, assign a default campaign value
    if (!queryString) {
      queryString = 'campaign=Digital%20Direct&csource=Digital%20Direct';
    }

    // Store the query string (or default campaign) in sessionStorage
    sessionStorage.setItem('qsVal', queryString);
    sessionStorage.setItem('qsGet', 'true');
  }

  // Set the value of elements with the 'querystring' class to the stored query string
  $(".querystring").val(sessionStorage.getItem('qsVal'));
});


/* Form Reset on Load */
$(document).ready(() => $("form").trigger('reset'));

/* Collapse Navbar on Outside Click */
$(document).click(() => $('#navbarcollapse').collapse('hide'));

/* Amenities Modal Setup */
$(".zmimg").click(function () {
  const imgs = Array.from({ length: 12 }, (_, i) => `#zm${i + 1}`);
  imgs.forEach((id, index) => {
    $(id).attr("src", $(`#zmimg${index + 1}`).attr('src').replace('.jpg', '_hd.jpg'));
  });
  $("#amenmodal").modal();
});

/* Space Modal Setup */
$(".skyimg").click(function () {
  const imgs = Array.from({ length: 4 }, (_, i) => `#sky${i + 1}`);
  imgs.forEach((id, index) => {
    $(id).attr("src", $(`#skyimg${index + 1}`).attr('src').replace('.jpg', '_hd.jpg'));
  });
  $("#skymodal").modal();
});

/* Prevent Form Double Submit */
$("body").on("submit", "form", function () {
  $(this).submit(() => false);
  return true;
});

/* Delayed 360 Iframe Load */
window.onload = () => {
  setTimeout(() => {
    $("#viewframe1").attr("src", "https://www.google.com/maps/embed?pb=!4v1566808058324!6m8...");
    $("#viewframe2").attr("src", "https://www.google.com/maps/embed?pb=!4v1563549563925!6m8...");
  }, 6000);
};

/* Sticky Mobile Button Fade In/Out */
const toggleElement = (scrollHeight, element) => {
  if ($(window).scrollTop() >= scrollHeight) {
    $(element).fadeIn(500);
  } else {
    $(element).fadeOut(500);
  }
};

$(window).scroll(() => {
  toggleElement(100, "#stickymob");
  toggleElement(100, "#ocr");
});

/* Modal Killer - Auto Popup Modal */
if (!sessionStorage.getItem('popOnce')) {
  const showModal = () => {
    if (!$("#contact-form,#jwautomodal,#amenmodal,#skymodal").is(":visible")) {
      $("#jwautomodal").modal('show');
      sessionStorage.setItem('popOnce', 'true');
    }
  };

  let modpop = setTimeout(showModal, 60000);

  $("form :input").focus(() => {
    clearTimeout(modpop);
    sessionStorage.setItem('popOnce', 'true');
  });
}

/* Hide Sticky Buttons on Form Focus */
$("form :input").on("focus", () => $("#stickymob").hide()).on("blur", () => $("#stickymob").show());

/* Smooth Scroll for Navigation */
const smoothScroll = (selector) => {
  $(selector).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($($(this).attr('href')).offset().top - 91)
    }, 500, 'linear');
  });
};

smoothScroll('.navlink[href*="#"]');
smoothScroll('.footerlink[href*="#"]');

/* Amenities Carousel */
$('.amencarousel').slick({
  prevArrow: $('#amencarouselleft'),
  nextArrow: $('#amencarouselright'),
  infinite: true,
  cssEase: 'linear',
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  appendDots: $(".amenpage"),
  customPaging: (slider, i) => `<a class="amenpagelink">${i + 1}</a>`,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      fade: true,
      cssEase: 'linear'
    }
  }]
});

/* Walkthrough Iframes */
$("#play1, #play2, #play3").click(function () {
  const id = $(this).attr('id').replace('play', '');
  $(`#youtube${id}`).hide();
  $(`#youtubeiframe${id}`).show();
  $(`#tmframe${id}`).attr("src", `https://www.youtube.com/embed/${$(this).data('video')}?autoplay=1`);
});

/* Auto Contact Modal */
if (!sessionStorage.getItem('modalShown')) {
  const showAutoPopupModal = () => {
    $("#contactModalAutoPopUp").modal('show');
    sessionStorage.setItem('modalShown', 'true');
  };

  setTimeout(showAutoPopupModal, 60000);

  $("form :input").focus(() => {
    clearTimeout(showAutoPopupModal);
    sessionStorage.setItem('modalShown', 'true');
  });
}
