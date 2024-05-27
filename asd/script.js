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
let airTransportation1 = document.getElementById('airTransportation1')
let airTransportation2 = document.getElementById('airTransportation2')
let airTransportation3 = document.getElementById('airTransportation3')
let airTransportation4 = document.getElementById('airTransportation4')
let airTransportation5 = document.getElementById('airTransportation5')
let airTransportation6 = document.getElementById('airTransportation6')
let airTransportation7 = document.getElementById('airTransportation7')
let airTransportation8 = document.getElementById('airTransportation8')
// section4
let aboutCompany = document.getElementById('aboutCompany')
let textLorem = document.getElementById('text')
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
    subTitle.textContent = 'Transportation of large-sized cargo throughout Russia and Europe. Full forwarding, insurance, packaging and storage of goods'
    bigText.textContent = 'CARGO TRANSPORTATION IN EUROPE'
    litText.textContent = 'European Union countries, as well as Ukraine, Belarus with all documents.'
    detailed.textContent = 'MORE DETAILS'
    upNext.textContent = 'next'
    downBack.textContent = 'back'
    services.textContent = 'SERVICES'
    airTransportation1.textContent = 'AIR CARRIAGE'
    airTransportation2.textContent = 'AIR CARRIAGE'
    airTransportation3.textContent = 'AIR CARRIAGE'
    airTransportation4.textContent = 'AIR CARRIAGE'
    airTransportation5.textContent = 'AIR CARRIAGE'
    airTransportation6.textContent = 'AIR CARRIAGE'
    airTransportation7.textContent = 'AIR CARRIAGE'
    airTransportation8.textContent = 'AIR CARRIAGE'
    aboutCompany.textContent = 'ABOUT COMPANY'
    textLorem.textContent = 'Lorem Ipsum is dummy text often used in printing and web design. Lorem Ipsum has been the industry\'s standard dummy text ever since the early 16th century. An unnamed printer at that time created a large collection of type sizes and shapes using Lorem Ipsum to produce type specimens. Lorem Ipsum has not only successfully survived five centuries without noticeable change, but has also entered electronic design.'
    upText1.textContent = 'offices'
    upText2.textContent = 'trucks'
    upText3.textContent = 'employees'
    downText1.textContent = 'in Europe and the CIS'
    downText2.textContent = 'professionals'
    where.textContent = '123456, St. Petersburg, Nevsky Prospekt 127'
    developed.textContent = 'Developed by - D-E-N.ru'
}
function russian(){
    table.textContent = 'Наши оффисы'
    menu1.textContent = 'УСЛУГИ'
    menu2.textContent = 'О КОМПАНИИ'
    menu3.textContent = 'ВАКАНСИИ'
    menu4.textContent = 'КОНТАКТЫ'
    title.textContent = 'ГРУЗОВЫЕ ПЕРЕВОЗКИ'
    subTitle.textContent = 'Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов'
    bigText.textContent = 'ГРУЗОПЕРЕВОЗКИ ПО ЕВРОПЕ'
    litText.textContent = 'Страны Евросоюза, а также Украина, Белоруссия со всеми документами.'
    detailed.textContent = 'ПОДРОБНЕЕ'
    upNext.textContent = 'след'
    downBack.textContent = 'назад'
    services.textContent = 'УСЛУГИ'
    airTransportation1.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation2.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation3.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation4.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation5.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation6.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation7.textContent = 'АВИАПЕРЕВОЗКИ'
    airTransportation8.textContent = 'АВИАПЕРЕВОЗКИ'
    aboutCompany.textContent = 'О КОМПАНИИ'
    textLorem.textContent = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
    upText1.textContent = 'oфисов'
    upText2.textContent = 'грузовиков'
    upText3.textContent = 'сотрудников'
    downText1.textContent = 'в Европе и СНГ'
    downText2.textContent = 'профессионалов'
    where.textContent = '123456, Санкт-Петербург, Невский пр-кт 127'
    developed.textContent = 'Разработано - D-E-N.ru'
}

pyc.addEventListener('click', russian)
eng.addEventListener('click', english)