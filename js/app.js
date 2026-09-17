let today = new Date().toLocaleDateString();
console.log(today);

let myFavorite = {
    name: 'Buff Bros',
    category: 'pizza',
    rating: 5,
    notes: 'not fancy, but I love their pizza',
    dateAdded: today
};

console.log(myFavorite);
console.log(typeof myFavorite.name);
console.log(typeof myFavorite.rating);

console.log(typeof myFavorite.category);
console.log(typeof myFavorite.notes);
console.log(typeof myFavorite.dateAdded);

console.log(myFavorite.name);
let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';

console.log(displayText);

console.log('⭐'.repeat(myFavorite.rating) + ' ' + myFavorite.name);


function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('Starbucks', 5);   // "Starbucks has 5 stars!"


const nameInput = document.getElementById('name');
console.log(nameInput.value);   // what the user typed

const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();   // stop the page reload
    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);