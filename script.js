function findPalingrams() {
    const input = document.getElementById('wordInput').value;
    const words = input.split(',').map(word => word.trim());
    const palingrams = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 1 && isPalingram(word)) {
            palingrams.push(word);
        }
    }

    document.getElementById('result').innerText = palingrams.length > 0 
        ? `It is a palingram.`
        : 'It is not a palingram.';
}

function isPalingram(word) {
    return word === word.split('').reverse().join('');
}
