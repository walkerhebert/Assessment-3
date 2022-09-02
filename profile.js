// let colorBtn = document.querySelector('#color')
// let placeBtn = document.querySelector('#place')
// let ritualBtn = document.querySelector('#ritual')
let movieForm = document.querySelector('form')
function showMessage() {
    alert("My favorite color is white");
}
function showMessage2() {
    alert("My favorite place is somewhere in the mountains");
}
function showMessage3() {
    alert("My favorite ritual is movie night");
}


// const submitForm = (event) => {
//     event.preventDefault()

//     alert('Incorrect! They are ALL the best LOTR movie.')
// }

colorBtn.addEventListener('click', favoriteColor)
placeBtn.addEventListener('click', favoritePlace)
ritualBtn.addEventListener('click', favoriteRitual)
// movieForm.addEventListener('submit', submitForm)