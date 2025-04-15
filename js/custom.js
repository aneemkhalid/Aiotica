$(document).ready(function () {
  AOS.init({
    offset: 100,
  });

  AOS.refresh();

  const $slider = $("#result-roi");
  const $current = $(".slider-counter .current");
  const $total = $(".slider-counter .total");

  $slider.on("init", function (event, slick) {
    $total.text(slick.slideCount);
    $current.text(slick.currentSlide + 1);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    $current.text(currentSlide + 1);
  });
  $slider.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    centerPadding: "20px",
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev arrow-btn light'><img style='transform: rotate(180deg);     filter: brightness(0.2);' src='../assets/icons/arrow.svg'/></button>",
    nextArrow:
      "<button type='button' class='slick-next arrow-btn dark'><img  src='../assets/icons/arrow.svg'/></button>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$("#case-studies-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: "40px",
  dots: false,
  prevArrow:
    "<button type='button' class='slick-prev arrow-btn light'><img style='transform: rotate(180deg);     filter: brightness(0.2);' src='../assets/icons/arrow.svg'/></button>",
  nextArrow:
    "<button type='button' class='slick-next arrow-btn dark'><img  src='../assets/icons/arrow.svg'/></button>",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
const cards = document.querySelectorAll(".category-item");

cards.forEach((card) => {
  let previewImg = null;

  card.addEventListener("mouseenter", () => {
    const newImg = card.getAttribute("data");
    if (newImg) {
      previewImg = document.getElementById("preview-" + newImg);
      if (previewImg) {
        previewImg.style.opacity = "1";
        previewImg.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }
  });

  card.addEventListener("mouseleave", () => {
    let imgShow = previewImg.getAttribute("id");
    if (previewImg) {
      previewImg.style.opacity = "0";
      previewImg.style.transform = "translate(-50%, -50%) scale(2)";
    }
    if (imgShow === "preview-img1") {
      previewImg.style.opacity = "1";
      previewImg.style.transform = "translate(-50%, -50%) scale(1)";
    }
  });
});

window.onload = function () {
  var sourceEl = document.querySelector(".category-col");
  var targetEl = document.querySelector(".image-col");
  var sourceHeight = sourceEl.offsetHeight;
  targetEl.style.marginTop = "-" + sourceHeight / 2 + "px";
};

var scroll_pos = 0;
$(document).scroll(function () {
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 900) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}
