let truck = document.getElementById('truck')

let upNext = document.getElementById('upNext')
let downBack = document.getElementById('downBack')

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