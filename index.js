function translator() {
    let rawText = document.getElementById('rawText').value.toLowerCase();
    let translatedText = document.getElementById('outputText');
    translatedText.innerHTML = rawText;
}