var words = ["programming", "codinga", "bootacamp", "taha", "jane"]

var answer = document.getElementById("answer-section")
var tries = 6


var current_answer = words[(Math.floor(Math.random() * words.length))]
console.log(current_answer)

// var current_answer_length = current_answer.length
// console.log(current_answer_length)

var dashes = []
var current_answer_array = []

for (var i = 0; i < current_answer.length; i++) {
    // answer_array.push(current_answer[i])
    dashes.push("-")
    current_answer_array.push(current_answer[i])
}
console.log(dashes)
console.log(current_answer_array)


// Displaying the array as an integer in the answer section
var string_dashes = ""
function stringDashes(){
    for (var i = 0; i < dashes.length; i++) {
        string_dashes += dashes[i]
    }
}
stringDashes()
answer.innerHTML = string_dashes
function display(){
    answer.innerHTML = dashes.toLocaleString()
}
display()
// function deleteOldAnswer(){
//     answer.innerHTML = ""
// }


// Select all elements with the class "letter"
var letters = document.querySelectorAll('.letter');

// Add an event listener to each letter
// letters.forEach(letter => {
//   letter.addEventListener('click', () => {
//     alert(`You clicked on: ${letter.textContent}`);
//   });
// });

letters.forEach(letter => {
  letter.addEventListener('click', () => {
    var current_letter = letter.innerHTML.toLowerCase()
    var flag = false
    for (var i = 0; i < dashes.length; i++) {
        if (current_answer_array[i] == current_letter && dashes.includes("-")){
            dashes[i] = current_letter
            console.log(dashes)
            console.log(current_letter)
            display()
            flag = true
        }
        if(dashes.includes("-") == 0){
            alert(`YOU WIN THE WORD IS ${current_answer}`)
            flag = true
            break
        }
    }

    if (flag == false){
        alert("not there")
        tries -= 1
        hangMan()
    }


  });
});

