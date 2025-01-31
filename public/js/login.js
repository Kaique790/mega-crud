const form = document.getElementById('login-form');

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    try {
        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if(response.ok) {
            
            const token = data.token

            localStorage.setItem('token', token);

            window.location.href = `/users/${data.id}`;
        }
        
    } catch(err) {
        console.log('Houve um erro ao logar: ', err)
    }
    
});
