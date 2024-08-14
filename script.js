const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encryptText(text) {
    return text.split('').map(char => encryptionKeys[char] || char).join('');
}

function decryptText(text) {
    let decryptedText = text;
    for (const [key, value] of Object.entries(encryptionKeys)) {
        const regex = new RegExp(value, 'g');
        decryptedText = decryptedText.replace(regex, key);
    }
    return decryptedText;
}

function copyToClipboard() {
    const text = outputText.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('📋 Texto copiado al portapapeles');
    });
}

function validateInput(text) {
    return /^[a-z\s]+$/.test(text);
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateInput(text)) {
        outputText.innerHTML = `<p>${encryptText(text)}</p>`;
    } else {
        alert('Solo se permiten letras minúsculas y espacios. Verifique su entrada.');
        outputText.innerHTML = '';
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateInput(text)) {
        outputText.innerHTML = `<p>${decryptText(text)}</p>`;
    } else {
        alert('Solo se permiten letras minúsculas y espacios. Verifique su entrada.');
        outputText.innerHTML = '';
    }
});

copyBtn.addEventListener('click', copyToClipboard);