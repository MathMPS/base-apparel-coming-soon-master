const subscribeButton = document.querySelector('.button');
const messageElement = document.getElementById('message');
const inputElement = document.querySelector('.input');
const errorImage = document.querySelector('.error');

// Função para exibir mensagens
function showMessage(message, isError = true) {
    messageElement.textContent = message;
    messageElement.style.color = isError ? 'var(--Soft-Red)' : 'var(--Desaturated-Red)';
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function clearInputValue(input) {
    input.value = '';
}


function toggleErrorImage(show) {
    errorImage.style.opacity = show ? '1' : '0';
}


function toggleBorder(isError) {
    inputElement.style.border = isError 
        ? '2px solid var(--Soft-Red)' 
        : '1px solid var(--Desaturated-Red)';
}


subscribeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar envio do formulário

    const inputValue = inputElement.value.trim();

    if (!inputValue) {
        // Campo vazio
        showMessage('Please provide a valid email');
        toggleErrorImage(true);
        toggleBorder(true);
    } else if (!validateEmail(inputValue)) {
        // E-mail inválido
        showMessage('Please provide a valid email');
        toggleErrorImage(true);
        toggleBorder(true);
    } else {
        // E-mail válido
        showMessage('Check your email please', false);
        toggleErrorImage(false);
        toggleBorder(false);
        clearInputValue(inputElement);
    }
});