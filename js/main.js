$(function () {
  $('.lang-switcher').on('click', function () {
    $('.lang-en').toggleClass('lang-en--active')
  });

  $('.lang-switcher--dark').on('click', function () {
    $('.lang-en').toggleClass('lang-en--active')
  });

  $(".btn__arrow--3").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});