// header
let pyc = document.getElementById('pyc')
let eng = document.getElementById('eng')
let table = document.getElementById('ourOfficeText')
let menu1 = document.getElementById('navItem1')
let menu2 = document.getElementById('navItem2')
let menu3 = document.getElementById('navItem3')
let menu4 = document.getElementById('navItem4')
// main
// section1
let title = document.getElementById('freightTransportation')
let subTitle = document.getElementById('transportation')
// section2
let truck = document.getElementById('truck')
let bigText = document.getElementById('bigText')
let litText = document.getElementById('litText')
let detailed = document.getElementById('detailed')
let upNext = document.getElementById('upNext')
let downBack = document.getElementById('downBack')
// section3
let services = document.getElementById('services')
let airTransportation = document.getElementById('airTransportation')
// section4
let aboutCompany = document.getElementById('aboutCompany')
let upText1 = document.getElementById('upText1')
let upText2 = document.getElementById('upText2')
let upText3 = document.getElementById('upText3')
let downText1 = document.getElementById('downText1')
let downText2 = document.getElementById('downText2')
let downText3 = document.getElementById('downText3')
let downText4 = document.getElementById('downText4')
// footer
let where = document.getElementById('upWhere')
let developed = document.getElementById('developed')

let carNumber = 1

function nextCar(){
    if(carNumber === 5){
        return
    }
    carNumber++
    truck.src = `./img/car${carNumber}.png`
}
function backCar(){
    if(carNumber === 1){
        return
    }
    carNumber--
    truck.src = `./img/car${carNumber}.png`
}

upNext.addEventListener('click', nextCar)
downBack.addEventListener('click', backCar)


function english(){
    table.textContent = 'Our offices'
    menu1.textContent = 'SERVICES'
    menu2.textContent = 'ABOUT COMPANY'
    menu3.textContent = 'VACANCIES'
    menu4.textContent = 'CONTACTS'
    title.textContent = 'FREIGHT TRANSPORTATION'
    subTitle = 'Transportation of large-sized cargo throughout Russia and Europe. Full forwarding, insurance, packaging and storage of goods'
}
function russian(){
    table.textContent = 'Наши оффисы'
    menu1.textContent = 'УСЛУГИ'
    menu2.textContent = 'О КОМПАНИИ'
    menu3.textContent = 'ВАКАНСИИ'
    menu4.textContent = 'КОНТАКТЫ'
    title.textContent = 'ГРУЗОВЫЕ ПЕРЕВОЗКИ'
    subTitle = 'Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов'
}

pyc.addEventListener('click', russian)
eng.addEventListener('click', english)