let secretCode = generateCode();
let attempts = 0;

function generateCode() {
    let digits = ['1','2','3','4','5','6','7','8','9']; // No incluye 0 para evitar que el código comience con cero
    let code = '';
    
    // Elegir el primer dígito del código
    code += digits.splice(Math.floor(Math.random() * digits.length), 1)[0];
    
    // Añadir tres dígitos adicionales, incluyendo el 0 si no es el primer dígito
    digits.push('0');
    while (code.length < 4) {
        let digit = digits.splice(Math.floor(Math.random() * digits.length), 1)[0];
        code += digit;
    }
    
    return code;
}

function makeGuess() {
    const guess = document.getElementById('guess').value;
    if (guess.length !== 4 || isNaN(guess) || new Set(guess).size !== 4 || guess[0] === '0') {
        alert('Por favor, ingrese un número de 4 dígitos, sin repetidos y que no comience con 0.');
        return;
    }
    
    attempts++;
    const feedback = getFeedback(guess);
    document.getElementById('feedback').innerText = feedback.message;
    document.getElementById('history').innerHTML += `<p>Intento ${attempts}: ${guess} - ${feedback.message}</p>`;
    
    if (feedback.bulls === 4) {
        alert(`¡Felicitaciones! Adivinaste el código en ${attempts} intentos.`);
        resetGame();
    }
}

function getFeedback(guess) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretCode[i]) {
            bulls++;
        } else if (secretCode.includes(guess[i])) {
            cows++;
        }
        document.getElementById('guess').value = '';
    }
    return { bulls, cows, message: `${bulls} Toros, ${cows} Vacas` };
}

function resetGame() {
    secretCode = generateCode();
    attempts = 0;
    document.getElementById('feedback').innerText = '';
    document.getElementById('history').innerHTML = '';
    document.getElementById('guess').value = '';
}

document.getElementById('guess').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('check').click();
    }
})

