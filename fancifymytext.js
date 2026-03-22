// Bigger button function
function makeBigger() {
    alert("Hello, world!");

    document.getElementById("textArea").style.fontSize = "24pt";
}

// Fancy / Boring toggle
function fancifyText() {
    let text = document.getElementById("textArea");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected!");

        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

// Moo button function
function mooText() {
    let textArea = document.getElementById("textArea");

    // Uppercase text
    let text = textArea.value.toUpperCase();

    // Split sentences
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");

        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-MOO";
        }

        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(".");
}