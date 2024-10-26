var words = ["programming", "coding", "bootcamp", "taha", "jane"]
var answer = document.getElementById("answer-section")
var tries = 6

// Chosing the word
var current_answer = words[(Math.floor(Math.random() * words.length))]

var dashes = []
var current_answer_array = []

// Making dashes for the choosen word
for (var i = 0; i < current_answer.length; i++) {
    dashes.push("-")
    current_answer_array.push(current_answer[i])
}

// Displaying the array as an integer in the answer section
var string_dashes = ""
function stringDashes(){
    for (var i = 0; i < dashes.length; i++) {
        string_dashes += dashes[i]
    }
}
stringDashes()
answer.innerHTML = string_dashes

// Function to display the dashes with each change happens
function display(){
    answer.innerHTML = dashes.toLocaleString()
}
display()


// Select all elements with the class "letter"
var letters = document.querySelectorAll('.letter');
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
            alert(`YOU WIN 😄😄\nthe word is: ${current_answer}`)
            flag = true
            location.reload();
            break
        }
    }

    if (flag == false){
        // alert("not there")
        tries -= 1
        hangMan()
    }
    if (tries == 0){
        endGame()
    }


  });
});


// Add a keys event listener
document.addEventListener('keydown', (event) => {
    var key = event.key; // Get the name of the key pressed
    console.log(`Key pressed: ${key}`);
    var flag = false
    for (var i = 0; i < dashes.length; i++) {
        if (current_answer_array[i] == key && dashes.includes("-")){
            dashes[i] = key
            console.log(dashes)
            display()
            flag = true
        }
        if(dashes.includes("-") == 0){
            alert(`YOU WIN 😄😄\nthe word is: ${current_answer}`)
            flag = true
            location.reload();
            break
        }
    }
    if (flag == false){
        // alert("not there")
        tries -= 1
        hangMan()
    }
    if (tries == 0){
        endGame()
    }
});

// Function to refresh the game after losing all tries
function endGame(){
    alert(`YOU LOST THE GAME 😔!!!!!!!!\nThe word was: ${current_answer}`)
    location.reload();
}