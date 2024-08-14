/* Query String Grab */
$(document).ready(function () {
  // Function to get query string parameter values
  function getQueryStringParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Check if the query string has already been stored
  if (!sessionStorage.getItem('qsGet')) {
    // Get the query string part from the URL
    let queryString = window.location.search.substring(1);

    // If there is no query string, set the default campaign
    if (queryString === '') {
      queryString = 'campaign=Digital%20Direct&csource=Digital%20Direct';
    }

    // Store the query string in sessionStorage
    sessionStorage.setItem('qsVal', queryString);
    sessionStorage.setItem('qsGet', 'true');
  }

  // Set the value of the input with class 'querystring'
  $(".querystring").val(sessionStorage.getItem('qsVal'));

  // Update form fields with campaign and csource values
  $(".querystring").each(function () {
    const campaign = getQueryStringParam('campaign') || 'Digital Direct';
    const csource = getQueryStringParam('csource') || 'Organic Lead';
    $(this).val(`campaign=${campaign}&csource=${csource}`);
  });
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
