let level, lifesLeft;
level = 1;
lifesLeft = 3;

function check() {
    let randomNumber, userAnswer, diapason;

    randomNumber = Math.random(randomNumber) * level;
    randomNumber = Math.round(randomNumber);

    userAnswer = document.getElementById('userInput').value;

    diapason = document.getElementById('numberDiapason');
    
    if (userAnswer == '') {
        alert('Введите число');
    }

    else if(randomNumber == userAnswer) {
        level += 1;
        diapason.innerHTML = 'Угадайте целое число от 0 до ' + level + ', включительно: ';

        alert(`
        Правильно✅
        Загаданное число - ${randomNumber}
        Ваш ответ - ${userAnswer}
        `);
    }

    else {
        lifesLeft -= 1;
        alert(`\nНеправильно❌
    Загаданное число - ${randomNumber}
    Ваш ответ - ${userAnswer}`);
    }

    if (lifesLeft == 2) {
        document.querySelector('#thirdLife').remove();
    }
    else if (lifesLeft == 1) {
        document.querySelector('#secondLife').remove();
    }
    else if (lifesLeft == 0) {
        document.querySelector('#firstLife').remove();
        alert(`Game over 💀

        Перезагружаю страницу и начинаю игру заново ;(
        `);
        location.reload();
    }
}