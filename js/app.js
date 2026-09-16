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
