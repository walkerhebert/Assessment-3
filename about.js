console.log("hello world");

let form = document.querySelector('#contact');
let logo = document.querySelector('#logo')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been successfully submitted.');
}


const hoverCompliment = () => {
	alert("You so smart")
}


form.addEventListener('submit', handleSubmit);
logo.addEventListener('mouseover', hoverCompliment)



