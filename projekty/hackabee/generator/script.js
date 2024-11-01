let wordList = {};
let wordHistory = [];

function addWord() {
    const wordCs = document.getElementById('wordCs').value.trim();
    const wordEn = document.getElementById('wordEn').value.trim();

    if (wordCs && wordEn) {
        wordList[wordCs] = wordEn;
        wordList[wordEn] = wordCs;
        wordHistory.push({ cs: wordCs, en: wordEn });
        updateCode();
        clearInputs();
    }
}

function removeLastWord() {
    const lastWord = wordHistory.pop();
    if (lastWord) {
        delete wordList[lastWord.cs];
        delete wordList[lastWord.en];
        updateCode();
    }
}

function resetWords() {
    wordList = {};
    wordHistory = [];
    updateCode();
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

document.addEventListener('DOMContentLoaded', updateCode);
