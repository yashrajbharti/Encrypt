document.getElementById("input").addEventListener("input", () => {
  morseToEnglish(input.value.trimStart() + " ");
});

function morseToEnglish(str) {
  let morsecode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  if (str[0] == "." || str[0] == "-") {
    console.log(
      "You have inputted morse code, program will convert it back to English"
    );
    let text = [];
    for (let elem of str.split(" ")) {
      if (elem == "#") text.push(" ");
      else text.push(String.fromCharCode(morsecode.indexOf(elem) + 97));
    }
    console.log(text);
    document.getElementById("para").textContent = text.join("").replace(/`/g, " ");
  } else {
    console.log(
      "You have inputted text string, program will convert it to Morse code"
    );
    let morse = [];
    for (let elem of str.split("")) {
      if (elem !== " ")
        morse.push(morsecode[elem.toLowerCase().charCodeAt(0) - 97]);
      else morse.push(elem + "#");
    }
    document.getElementById("para").textContent = morse.join(" ");
  }
}

function copy() {
  var copyText = document.getElementById("para").textContent;

  navigator.clipboard.writeText(copyText);
}
