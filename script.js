//выводит окошко на экран
// alert('321');

//тольо раскрыте текста
//document.querySelector('.info__link').addEventListener('click',function () {
//    this.remove();
//    document.querySelector('.info__text').classList.add('info__text--active')
//});

//let buttonText;
//buttonText = 1;
//buttonText = "256"

//let buttonText
//let a = 5;
//if (a == 5) {
//    alert('Pravda')
//}
//if (a !=5) {
//    alert('lozh')
//}

/*let buttonText
let a = 5;
if (a == 5) {
    alert('Pravda')
} else {
   alert(lozh)
}*/

/*document.querySelector('.info__link').addEventListener('click',function () {
    document.querySelector('.info__text').classList.toggle('info__text--active')
    buttonText = this.textContent;
    this.textContent = "Скрыть текст";
});*/


let buttonText;
let buttonText2 = "Скрыть текст";

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.textContent;
    this.textContent = buttonText2;
    buttonText2 = buttonText;
});

/* ждет загрузки страницы */
document.addEventListener('DOMContentLoaded', function () {

    const popupFilter = document.querySelector('.popup-filter');
    const buttonPopup = document.querySelector('.catalog__filter');
    if (buttonPopup) {
        buttonPopup.addEventListener('click', function () {
            if (popupFilter) {
                document.body.classList.add('no-scroll');
                popupFilter.classList.add('popup-filter--show');
                setTimeout(function () {
                    popupFilter.classList.add('popup-filter--active');
                }, 10);
            }
        });
    }

    let titles = [
    "Общее",
    "Сыр",
    "Мясо",
    "Компонент"        
    ]

    let buttons = [
    [
        "Хит",
        "Новинка",
        "С мясом",
        "Вегетарианская",
        "С курицей",
        "Без лука",
        "С грибами",
        "С морепродуктами",
        "Барбекю"
    ],

    [
        "Реджанито",
        "Моцарелла",
        "Чеддер",
        "С голубой плесенью",
        "Смесь итальянских сыров",
        "Мягкий молодой сыр"
    ],

    [
        "Пепперони",
        "Свинина",
        "Ветчина",
        "Бекон",
        "Говядина",
        "Чоризо",
        "Колбаски",
        "Куриная грудка"
    ],

    [
        "Креветка",
        "Ананасы",
        "Шампиньоны",
        "Лук",
        "Говядина",
        "Чоризо",
        "Колбаски",
        "Куриная грудка"
    ]
    ];

    // const list = document.querySelector('.filter-common');
    //     if (list) {
            
    //         //let newElement = document.createElement('button');
    //         //newElement.textContent = 'Новая кнопка';
    //         //list.append(newElement) 

    //         for (let i = 0; i < buttons.length; i++) {
    //             let newElement = document.createElement('button');
    //             newElement.textContent = buttons[i];
    //             list.append(newElement);
    //         }
    //     }

    const groups = document.querySelector('.popup-filter__general');
    if (groups) {
        let groupHtml = '';
        for (let i = 0; i < titles.length; i++) {
            let buttonsHtml = '';
            for (let j = 0; j < buttons[i].length; j++) {
                buttonsHtml = buttonsHtml + `<button>${buttons[i][j]}</button>`;
            }
            groupHtml = groupHtml + `<h4>${titles[i]}</h4>
                                        <div class="popup-filter__checkbox filter-common">
                                        ${buttonsHtml}
                                        </div>`;
        }
        groups.innerHTML = groupHtml;
    }
    });
