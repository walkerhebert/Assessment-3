console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been successfully submitted.');
}

const logo = document.querySelector('#logo')

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("logo").addEventListener("mouseover", function( event ) {
	alert("You so smart");
  }, false);



