function translate(word) {
  //   word = word.toLowerCase();

  if (word[0] == "a" || word[0] == "e" || word[0] == "o" || word[0] == "u") {
    word = `${word}way`;
  } else if (
    word[(0, 1)] == "a" ||
    word[(0, 1)] == "e" ||
    word[(0, 1)] == "o" ||
    word[(0, 1)] == "u"
  ) {
    words = word.slice(0, 1);
    let word1 = word.slice(1);
    word = `${word1}${words}ay`;
  } else {
    words = word.slice(0, 2);
    let word1 = word.slice(1);
    word = `${word1}${words}ay`;
  }

  return word;
}

if (typeof module !== "undefined") {
  // Node
  module.exports = { translate };
} else {
  // Browser
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}
