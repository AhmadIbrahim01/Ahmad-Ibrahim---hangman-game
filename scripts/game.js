var words = ["programming", "coding", "bootcamp", "taha", "jane"]

var answer = document.getElementById("answer-section")

var current_answer = words[(Math.floor(Math.random() * words.length))]
console.log(current_answer)

var current_answer_length = current_answer.length
console.log(current_answer_length)

var dashes = []

for (var i = 0; i < current_answer_length; i++) {
    // answer_array.push(current_answer[i])
    dashes.push("-")
}
console.log(dashes)


// Displaying the array as an integer in the answer section
var string_dashes = ""
for (var i = 0; i < dashes.length; i++) {
    string_dashes += dashes[i]
}
answer.innerHTML = string_dashes