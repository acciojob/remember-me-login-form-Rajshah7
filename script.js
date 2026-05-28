let username = document.getElementById('username');
let password = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
let form = document.getElementById('loginForm');
let existingButton = document.getElementById('existing');

window.onload = function(){
	const username = localStorage.getItem("username");
	const password = localStorage.getItem("password");

	if(username && password){
			existingButton.style.display = 'block';
	}
}

form.addEventListener('submit', (e) =>{
	e.preventDefault();

	const user = username.value;
	const pass = password.value;

	alert(`Logged in as ${user}`);

	if(checkbox.checked){
		localStorage.setItem('username',user);
		localStorage.setItem('password',pass);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
});

existingButton.addEventListener('click',()=>{
	const savedUsername = localStorage.getItem('username');

	alert(`Logged in as ${savedUsername}`);
});


