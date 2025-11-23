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


let a = "Скрыть текст"
let b

document.querySelector('.info__link').addEventListener('click',function () {
    document.querySelector('.info__text').classList.toggle('info__text--active')
    b = a
    a = this.textContent
    this.textContent = b
    })
