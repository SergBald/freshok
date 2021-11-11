$(function () {

  // <<sliders>>
  $('.top-slider__inner').slick({
    nextArrow: '<button type = "button" class = "slick-next top-slider__arrow top-slider__arrow--next"><svg width="20" height="32" viewBox="0 0 20 32"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"/></svg></button>',
    prevArrow: '<button type = "button" class = "slick-prev top-slider__arrow top-slider__arrow--prev"><svg width="20" height="32" viewBox="0 0 20 32"><path d = "M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"/></svg></button>'
  });

  $('.brands__slider').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: true,
    autoplay: true,
  });

//  <<filters button>>
  $('.filters-category__btn').on('click', function () {
    $('.filters-category__btn, .filters-category__list').toggleClass('active');
  });

  $('.filters-offer__btn').on('click', function () {
    $('.filters-offer__btn, .filters-offer__list').toggleClass('active');
  });

  $('.filters-brand__btn').on('click', function () {
    $('.filters-brand__btn, .filters-brand__list').toggleClass('active');
  });

  $('.filters-price__btn').on('click', function () {
    $('.filters-price__btn, .filters-price__list').toggleClass('active');
  });

  // <<RangeSlider>>
  var $range = $(".filters-price__input"),
      $inputFrom = $(".filters-price__valeu-from"),
      $inputTo = $(".filters-price__valeu-to"),
      instance,
      min = $(['data-min']),
      max = $(['data-max']),
      from = 0,
      to = 0;

  $range.ionRangeSlider({
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });


  $('.catalog-content__btn').on('click', function () {
    $('.catalog-content__btn').removeClass('catalog-content__btn--active');
      $(this).addClass('catalog-content__btn--active');
  });

  $('.catalog-content__btn--list').on('click', function () {
    $('.catalog-content__items').addClass('catalog-content__items--list');
  });

  $('.catalog-content__btn--grid').on('click', function () {
    $('.catalog-content__items').removeClass('catalog-content__items--list');
  });

  // <<styler>>
  $('.select-style, .product-content__input').styler();

  // <<rateYo>>
  $('.product__star').rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#ffb800",
  });

  // <<SimpleBar>>
  new SimpleBar(document.querySelector('.filters-category__list'), {
    autoHide: false,
    scrollbarMaxSize: 129,
  });

  // <<fancyBox>>
  $('[data-fancybox="gallery"]').fancybox({
    dots: true,
  });
});

// $(function () {
//   var containerEl1 = document.querySelector('[data-ref="container-1"]');
//   var containerEl2 = document.querySelector('[data-ref="container-2"]');

//     var config = {
//       controls: {
//         scope: 'local'
//       }
//     };

//     var mixer1 = mixitup(containerEl1, config);
//     var mixer2 = mixitup(containerEl2, config);
// });