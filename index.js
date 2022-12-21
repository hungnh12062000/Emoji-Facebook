$.fn.showFlex = function () {
     this.css('display', 'flex');
}
$.fn.showNone = function () {
     this.css('display', 'none');
}
$('.action-emoji').on('click', function () {
     let check_show = $('.react-emoji-wrap').hasClass('hide');
     if (check_show) {
          $('.react-emoji-wrap').showFlex();
          $('.react-emoji-wrap').removeClass('hide');
          $('.react-emoji-wrap').addClass('show');
     } else {
          $('.react-emoji-wrap').showNone();
          $('.react-emoji-wrap').removeClass('show');
          $('.react-emoji-wrap').addClass('hide');

     }
})

// when click outside to close modal/component
$(document).mouseup(function (e) { //event nhả chuột
     let react_emoji = $(".react-emoji-wrap");
     if (!react_emoji.is(e.target) && react_emoji.has(e.target).length === 0) {
          react_emoji.hide();
     }
});