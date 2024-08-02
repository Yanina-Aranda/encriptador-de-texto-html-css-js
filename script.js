function validateInput() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value.replace(/[^a-z]/g, '');
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    if (inputText === '') {
        outputText.value = '';
        return;
    }

    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case 'a':
                encryptedText += 'ai';
                break;
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += inputText[i];
                break;
        }
    }

    outputText.value = encryptedText;
    outputText.classList.add('no-background');
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    if (inputText === '') {
        outputText.value = '';
        return;
    }

    let decryptedText = inputText
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    outputText.value = decryptedText;
    outputText.classList.add('no-background');
}

async function copiarTexto() {
    const outputText = document.getElementById('outputText');
    const notification = document.getElementById('notification');

    if (outputText.value === '') {
        notification.textContent = 'No hay texto para copiar';
        showNotification();
        return;
    }

    try {
        await navigator.clipboard.writeText(outputText.value);
        outputText.value = '';
        outputText.classList.remove('no-background');
        notification.textContent = 'Texto copiado al portapapeles';
        showNotification()
    } catch (err) {
        notification.textContent = 'Error al copiar el texto';
        showNotification()
    }
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.visibility = 'visible';

    setTimeout(() => {
        notification.style.visibility = 'hidden';
    }, 1000); // Ocultar notificación después de 3 segundos
}

function limpiarTextareas() {
    // Obtener los elementos textarea
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    // Limpiar el contenido de los textareas
    inputText.value = '';
    outputText.value = '';
    outputText.classList.remove('no-background');
}