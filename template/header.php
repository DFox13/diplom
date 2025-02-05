<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="fontawesome-free-6.6.0-web/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    </head>
<body>
    
    <div class="wrap">
        <div class="header">
            <div class="logo">
                <img src="https://www.cstom.ru/wp-content/themes/cstom/images/logo.svg" alt="Логотип">
            </div>
            <div class="slogan">
                <div class="address">
                    <a href="">г. Смоленск, ул. Кирова, д. 29</a>
                    <p>по будням с 8:30 до 21:00<br>
                    в выходные с 9:00 до 18:00</p>
                </div>
            </div>
        </div>
        <div class="menu-button" id="menuButton">☰ <span id="valuePage"></span>  </div>
        <div class="nav" id="navbar">
            <a href="/">Главная</a>
            <a href="/services">Услуги</a>
            <a href="/about">О нас</a>
            <a href="/stock">Акции</a>
            <a href="/contacts">Контакты</a>
            <a href="/dentists">Врачи</a>
            <a href="/reviews">Отзывы</a>
        </div>
        
    
    <script>


        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const servicesParam = url.pathname.split('/').pop(); 

        if (servicesParam == ""){
            document.getElementById('valuePage').textContent = 'Главная';
        }
        else if (servicesParam == "services"){
            document.getElementById('valuePage').textContent = 'Услуги';
        }
        else if (servicesParam == "about"){
            document.getElementById('valuePage').textContent = 'О нас';
        }
        else if (servicesParam == "stock"){
            document.getElementById('valuePage').textContent = 'Акции';
        }
        else if (servicesParam == "contacts"){
            document.getElementById('valuePage').textContent = 'Контакты';
        }
        else if (servicesParam == "dentists"){
            document.getElementById('valuePage').textContent = 'Врачи';
        }
        else if (servicesParam == "reviews"){
            document.getElementById('valuePage').textContent = 'Отзывы';
        }

        console.log(servicesParam);


        $(document).ready(function() {
    
            $('#menuButton').click(function() {
                $('#navbar').toggleClass('open');
            });

            $(window).bind('scroll', function() {
                var ScrollPos = $(this).scrollTop(), 
                    HeaderHeight = $('.header').height(); 
                
                if (ScrollPos > HeaderHeight) { 
                    $('.nav').addClass('fixed'); 
                    $('.content').css('margin-top', '50px');
                } else { 
                    $('.nav').removeClass('fixed');
                    $('.content').css('margin-top', '0'); 
                }
            });
        });
    </script>
</body>
</html>