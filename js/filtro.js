$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-hobbies').show('1000');
        } else {
            $('.cont-hobbies').not('.' + valor).hide('1000');
            $('.cont-hobbies').filter('.' + valor).show('1000');
        }
    });

    let biography = $('#biography').offset().top,
        hobby = $('#hobby').offset().top;

    window.addEventListener('resize', function(){
        let biography = $('#biography').offset().top,
       	hobby = $('#hobby').offset().top;
    });

    $('#enlace-home').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-biography').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: biography -100
        },600);
    });

    $('#enlace-hobby').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: hobby -100
        },600);
    });

    
});