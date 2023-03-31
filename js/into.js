
//回上一頁
function goBack() {
    window.history.back();
}  


/* center modal */
function centerModals(){
    $('.modal').each(function(i){
        var $clone = $(this).clone().css('display', 'block').appendTo('body');    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}
$('.modal').on('show.bs.modal', centerModals);
$(window).on('resize', centerModals);


 // 彈出視窗,關一彈二背景不捲動
 function setModal(myModal){
  $(myModal).on('shown.bs.modal', function (e) {
   $("body").addClass("modal-open"); 
  })
 }


//Sort开始

$(document).ready(function(){
    $(".Sort").on('click', function() {
        if ($('.sort-eject').hasClass('grade-w-roll')) {
            $('.sort-eject').removeClass('grade-w-roll');
        } else {
            $('.sort-eject').addClass('grade-w-roll');
        };
    });
});



// 加關注

$('.collect').on('click', function () {

    if ($(this).find('i').hasClass('fa-heart-o')) {

        $(this).find('i').addClass('fa-heart').removeClass('fa-heart-o');

    } else {

        $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
    }
});


// 評價
$(document).ready(function(){
    $(".myBtn-remark").click(function(){
        $("#myModal-remark").fadeIn("fast");
        $(".ui-fsmodal").fadeIn("fast");
        $('body').addClass('cu-modal-open');
    });
    $(".close").click(function() {
        $("#myModal-remark").fadeOut("fast");
        $(".ui-fsmodal").fadeOut("fast");
        $('body').removeClass('cu-modal-open');
    });
});