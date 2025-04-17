$(document).ready(function () {
    $(".hamburger").click(function () {
        $("header").toggleClass("active");
        $(this).toggleClass("is-active");
    });

    $("header nav li a").click(function () {
        $("header").removeClass("active");
        $(".hamburger").removeClass("is-active");
    });

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
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
        dots: false,
        prevArrow:
            "<button type='button' class='slick-prev arrow-btn light'><img style='transform: rotate(180deg);     filter: brightness(0.2);' src='./assets/icons/arrow.svg'/></button>",
        nextArrow:
            "<button type='button' class='slick-next arrow-btn dark'><img  src='./assets/icons/arrow.svg'/></button>",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
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

    $("#case-studies-slider").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "40px",
        dots: false,
        prevArrow:
            "<button type='button' class='slick-prev arrow-btn light'><img style='transform: rotate(180deg);     filter: brightness(0.2);' src='./assets/icons/arrow.svg'/></button>",
        nextArrow:
            "<button type='button' class='slick-next arrow-btn dark'><img  src='./assets/icons/arrow.svg'/></button>",
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

    if ($(window).width() < 767) {
        $("#solution-slider").slick({
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "40px",
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
});
const cards = document.querySelectorAll(".category-item");

cards.forEach((card) => {
    let previewImg = null;

    card.addEventListener("mouseenter", () => {
        const newImg = card.getAttribute("data-id");
        if (newImg) {
            previewImg = document.getElementById("preview-" + newImg);
            if (previewImg) {
                previewImg.style.opacity = "1";
                previewImg.style.transform = "translate(-50%, -50%) scale(1)";
            }
        }
    });

    card.addEventListener("mouseleave", () => {
        if (previewImg) {
            previewImg.style.opacity = "0";
            previewImg.style.transform = "translate(-50%, -50%) scale(2)";
        }
        const defaultImg = document.getElementById("preview-img1");
        if (defaultImg) {
            defaultImg.style.opacity = "1";
            defaultImg.style.transform = "translate(-50%, -50%) scale(1)";
        }
    });
});

window.onload = function () {
    var sourceEl = document.querySelector(".image-col");
    var targetEl = document.querySelector(".category-col");
    var sourceHeight = sourceEl.offsetHeight;
    targetEl.style.marginTop = "-" + sourceHeight / 1.4 + "px";
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

const objects = document.querySelectorAll(".object");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const target = entry.target;

            if (entry.isIntersecting) {
                target.style.opacity = "1";
                target.style.transform = "translateY(0%)";
            } else {
                target.style.opacity = "0";
                target.style.transform = "translateY(40%)";
            }
        });
    },
    {
        threshold: 0.1,
    }
);

objects.forEach((el) => {
    observer.observe(el);
});
$(document).ready(function () {
    $('.accordian-content').hide(); // Hide content initially

    $('.accordian-header').on('click', function () {
      const content = $(this).next('.accordian-content');
      
      // Slide toggle this specific content
      content.slideToggle(300);

      // Optional: Toggle arrow rotation
      $(this).find('img').toggleClass('rotated');
    });
  });