var $phrase = $("#phrase"),
    $button = $("#doAction"),
    $output = $("#output");

$button.on("click", function() {
  let phrase = $phrase.val();
  let convertedPhrase = convertPhraseToPigLatin(phrase);
  $output.text(convertedPhrase);
});

function convertPhraseToPigLatin(phrase) {
  let words = phrase.split(" ");
  let pigLatinPhrase = [];
  
  words.forEach(function(word, index){
    let matches = word.match(/[aeiouy]/);
    let suffix = word.substring(0, matches.index)
    word = word.substring(matches.index)
    let pigLatinWord = word.concat(suffix, "ay");
    pigLatinPhrase.push(pigLatinWord);
  });
  
  return pigLatinPhrase.join(" ");
}