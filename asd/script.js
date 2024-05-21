let truck1 = document.getElementById('truck1')
let upNext = document.getElementById('upNext')
let downBack = document.getElementById('downBack')

let carNumber = 1

function nextCar(){
    if(carNumber === 5){
        return
    }
    carNumber++
    truck1.src = `./img/car${carNumber}.png`
}
function backCar(){
    if(carNumber === 1){
        return
    }
    carNumber--
    truck1.src = `./img/car${carNumber}.png`
}
upNext.addEventListener('click', nextCar)
downBack.addEventListener('click', backCar)