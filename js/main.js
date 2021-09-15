$(function () {
  // import Plyr from 'plyr';
  // const player = new Plyr('#player');
  const player = new Plyr("#player", {
    title: "Example Title",
  });
  $(".plyr")
    .on("ready", function (event) {
      $(this).addClass("plyr--init-hide-controls");
    })
    .on("play", function (event) {
      $(this).removeClass("plyr--init-hide-controls");
    });

  $(".slider__wrapper").slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slider_btn slider-btn__left"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36667 1.5L21 21.5308L1.36667 41.8846" stroke="#B62C2C" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button class="slider_btn slider-btn__right"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36667 1.5L21 21.5308L1.36667 41.8846" stroke="#B62C2C" stroke-width="2"/></svg></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $(".comments__inner-slider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slider_btn slider-btn__left"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36667 1.5L21 21.5308L1.36667 41.8846" stroke="#B62C2C" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button class="slider_btn slider-btn__right"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.36667 1.5L21 21.5308L1.36667 41.8846" stroke="#B62C2C" stroke-width="2"/></svg></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "19px",
    readOnly: "true",
    normalFill: "#fff",
    ratedFill: "#b62c2c",
    starSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="#b62c2c" d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>',
  });

  $(".services__col-item").on("click", function () {
    $(this).toggleClass("services__col-item--active");
  });
  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".mobile__menu").toggleClass("mobile__menu--active");
  });

  //  counter script
  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 7000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        },
      }
    );
  });
  // end counter script
});
