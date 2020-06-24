function translator() {
    let rawText = document.getElementById('rawText').value.toLowerCase();
    let translatedText = document.getElementById('translatedText');
    translatedText.value = rawText;
}

function clearText() {
    let rawText = document.getElementById('rawText');
    let translatedText = document.getElementById('translatedText');

    rawText.value='';
    translatedText.value='';

}