let wordList = {};

function addWord() {
    const wordCs = document.getElementById('wordCs').value.trim();
    const wordEn = document.getElementById('wordEn').value.trim();

    if (wordCs && wordEn) {
        wordList[wordCs] = wordEn;
        wordList[wordEn] = wordCs;
        updateCode();
        clearInputs();
    }
}

function updateCode() {
    const codeContainer = document.getElementById('generatedCode');
    const formattedCode = JSON.stringify(wordList, null, 4);
    codeContainer.textContent = formattedCode;
}

function clearInputs() {
    document.getElementById('wordCs').value = '';
    document.getElementById('wordEn').value = '';
}
