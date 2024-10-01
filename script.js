document.addEventListener('DOMContentLoaded', () => {
    // Para o formulário de login
    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const emailValue = document.getElementById('signInEmail').value;
        const passwordValue = document.getElementById('signInPassword').value;

        const formData = {
            email: emailValue,
            password: passwordValue
        };

        try {
            const response = await fetch('https://www.exemplo.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login bem-sucedido:', data);
            } else {
                console.error('Erro ao fazer login:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    });

    // Para o formulário de cadastro
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nameValue = document.getElementById('signUpName').value;
        const emailValue = document.getElementById('signUpEmail').value;
        const passwordValue = document.getElementById('signUpPassword').value;

        const formData = {
            name: nameValue,
            email: emailValue,
            password: passwordValue
        };

        try {
            const response = await fetch('https://www.exemplo.com/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Cadastro bem-sucedido:', data);
            } else {
                console.error('Erro ao cadastrar:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    });

  
    const saibaMaisBtn = document.querySelector('.hero-btn');
    saibaMaisBtn.addEventListener('click', () => {
        const formSection = document.getElementById('form-section');
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
});


