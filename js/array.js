// Define arrays
const myFruitsArray = ["Orange", "Watermelon", "Kiwi", "Bananas"]

// Accessing items inside arrays
// Making use of the index
const orange = myFruitsArray[0];
console.log(orange)

const watermelon = myFruitsArray[1];
console.log(watermelon)

// Insert
// At the end
myFruitsArray.push("Apples")
console.log(myFruitsArray);

// At a particular index
myFruitsArray[0] = "Grapes";
console.log(myFruitsArray);

// Removing
// The last element
const poppedElement = myFruitsArray.pop();
console.log(poppedElement);
console.log(myFruitsArray);

// At a particular index
const index = myFruitsArray.indexOf("Watermelon");
console.log(index)
myFruitsArray.splice(index, 1)
console.log(myFruitsArray)

// Perform operations for items in the list
let myCapsList = [];
myFruitsArray.forEach(value => {
    if (value != 'Grapes') {
        myCapsList.push(value.toUpperCase());
    }
})
console.log(myFruitsArray);
console.log(myCapsList);

// Anatomy of a for loop
// let index = 0; - For the operations that we will be carrying out, this is the starting position
// index < array.length; - Perform this operation as long as this condition is true
// index++; - 
for (let index = 0; index < myFruitsArray.length; index++) {
    const element = myFruitsArray[index];
    console.log(element);
}


// Build a deck of cards
let allCards = [];
const hands = ["Hearts", "Diamonds", "Flowers", "Spades"];
const faceValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

hands.forEach(value => {
    faceValues.forEach(face => {
        // Objects
        let newCard = { 'hand': value, 'face': face }
        allCards.push(newCard)
    })
})

allCards.push({ 'hand': 'Joker', 'face': '1' })
allCards.push({ 'hand': 'Joker', 'face': '2' })
console.log(allCards.length)