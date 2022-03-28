function checkPassword(e){
	let password = document.querySelector('#password').value
	let passwordConfirm = document.querySelector('#passwordConfirm').value
	let message = document.querySelector('#matchMessage')

	e.preventDefault()

	if(password.length != 0){
        if(password == passwordConfirm){
            message.textContent = `Passwords match`
            message.style.color = `green`;
        }
        else{
            message.textContent = `Passwords don't match`
            message.style.color = `red`
        }
    }
    else{
        message.textContent = `Password can't be empty!`
    }
}

document.querySelector('#createAccount').addEventListener('click', checkPassword)
