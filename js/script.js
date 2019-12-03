$(document).ready(function () {
    $('.navigate1').on('click', function(){
        $('.friends').css('display', 'block');
        $('.user').css('display', 'none');
        $('.navigate1').css('background', '#ffffff');
        $('.navigate1').css('color', '#000000');
        $('.navigate').css('background', '#1e69ac');
        $('.navigate').css('color', '#ffffff');
    })
    $('.navigate').on('click', function(){
        $('.friends').css('display', 'none');
        $('.user').css('display', 'grid');
        $('.navigate').css('background', '#ffffff');
        $('.navigate').css('color', '#000000');
        $('.navigate1').css('background', '#1e69ac');
        $('.navigate1').css('color', '#ffffff');
    })
    $('.user-info__interes').click(function(){
        $(this).remove();
    })
    $('.user-info__interespush').click(function(){
        let newint = prompt('Введите новый интерес');
        if(newint != null && newint != undefined && newint.length != 0) {
            $('.box').prepend('<a href="#" class="user-info__interes">' + newint + '</a>');
        } 
        $('.user-info__interes').click(function(){
            $(this).remove();
        })
    })
    сontact1.value = localStorage.getItem('contact1');
    contact1.oninput = () => {
      localStorage.setItem('contact1', 'contact1.value')
    };
})
