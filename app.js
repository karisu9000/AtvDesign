$('nav a').click(function(e){
    e.preventDefault()
    var id = $(this).attr('href'),
    targetOffSet = $(id).offSet().top,
    menuHeight = $('nav').innerHeight()
    $('html, body').animate({
        scrollTop: targetOffSet - menuHeight
    }, 500)
})