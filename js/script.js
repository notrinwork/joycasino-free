
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
});


$('.game__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});


// TIMER
const timerNumber = document.querySelectorAll(".timeBox__timer__number");


if (timerNumber.length != 0) {
    function timingDelay() {
        timerNumber[2].classList.toggle("opacity");
        timerNumber[5].classList.toggle("opacity")
    }
    setInterval(timingDelay, 700);
}




let timer_show = document.querySelector(".about__timer");
if (timer_show) {
    function diffSubtract(date1, date2) {
        return date2 - date1;
    }

    let end_date = {
        "full_year": "2020", // Год
        "month": "10", // Номер месяца
        "day": "20", // День
        "hours": "16", // Час
        "minutes": "00", // Минуты
        "seconds": "00" // Секунды
    }

    let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

    // Запуск интервала таймера
    let timer = setInterval(function () {
        // Получение времени сейчас
        let now = new Date();
        // Получение заданного времени
        let date = new Date(end_date_str);
        // Вычисление разницы времени 
        let ms_left = diffSubtract(now, date);
        // Если разница времени меньше или равна нулю 
        if (ms_left <= 0) { // То
            // Выключаем интервал
            clearInterval(timer);
            // Выводим сообщение об окончание
            alert("Время закончилось");
        } else { // Иначе
            // Получаем время зависимую от разницы
            let res = new Date(ms_left);
            // Делаем строку для вывода
            let str_timer = `<span class="about__number">${res.getUTCDate() - 1}</span><span class="about__delay">:</span>
        <span class="about__number">${res.getUTCHours()}</span><span class="about__delay">:</span>
        <span class="about__number">${res.getUTCMinutes()}</span><span class="about__delay">:</span>
        <span class="about__number">${res.getUTCSeconds()}</span>`;
            // Выводим время
            timer_show.innerHTML = str_timer;
        }

        let about__delay = document.querySelectorAll(".about__delay");
        function aboutDelay() {
            about__delay.forEach(element => {
                element.classList.toggle("opacity")
            })
        }

        setInterval(aboutDelay, 500)
    }, 1000)
}


function roundWay() {
    let allLink = document.querySelectorAll("[href^='#']");
    let body = document.querySelector("body");
    let absolute = document.querySelectorAll(".content__absolute")
    absolute.forEach(element => {
        element.addEventListener("click", async function () {
            let poplink = await fetch("/linkPop.php")
                .then(response => response.json())
                .then(text => Object.values(text)[0])


            function newLink() {
                body.insertAdjacentHTML("afterbegin", "<div class='popup'><div class='popup__box'><h2 class='popup__title'>Вход</h3><h3 class='popup__h3'>Введите ваш никнейм</h3><input type='text' class='popup__input' placeholder='Login' ><a href=`${poplink}` class='popup__link' target='_self'>Вход</a></div></div>")

                let asyncLink = document.querySelector(".popup__link")
                let asyncInput = document.querySelector(".popup__input")
                if (asyncLink) {
                    asyncLink.addEventListener("click", function () {
                        if (asyncInput.value != 0) {
                            window.open(poplink, '_blank');
                        } else {
                            event.preventDefault();
                            alert("Введите Login")
                        }
                    })
                }
            }
            newLink()


        })
    })



    allLink.forEach(element => {
        element.addEventListener("click", async function () {
            let poplink = await fetch("/linkPop.php")
                .then(response => response.json())
                .then(text => Object.values(text)[0])


            function newLink() {
                body.insertAdjacentHTML("afterbegin", "<div class='popup'><div class='popup__box'><h2 class='popup__title'>Вход</h3><h3 class='popup__h3'>Введите ваш никнейм</h3><input type='text' class='popup__input' placeholder='Login' ><a href=`${poplink}` class='popup__link' target='_self'>Вход</a></div></div>")

                let asyncLink = document.querySelector(".popup__link")
                let asyncInput = document.querySelector(".popup__input")
                if (asyncLink) {
                    asyncLink.addEventListener("click", function () {
                        if (asyncInput.value != 0) {
                            window.open(poplink, '_blank');
                        } else {
                            event.preventDefault();
                            alert("Введите Login")
                        }
                    })
                }
            }
            newLink()

        })
    })

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("popup")) {
            document.querySelector(".popup").remove()
        };
    })
}

roundWay()




function getImage() {
    let contentCards = document.querySelectorAll(".content__card");
    let slideGame = document.querySelectorAll(".slide__game")

    contentCards.forEach(function (element, index) {
        element.children[0].attributes[0].value = `/img/games/${index + 1}.jpg`
    })
    slideGame.forEach(function (element, index) {
        element.src = `/img/games/${index + 1}.jpg`
    })
}

getImage()

document.addEventListener("click", function (event) {
    if (event.target.closest(".burger__menu")) {
        document.querySelector(".nav__box").classList.toggle("nav__box__open")
    }
})