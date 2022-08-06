// MAP OBJECT
// Use an object as a key  
const cat = { name: 'Cat' };
const elephant = { name: 'Elephant' };
const hen = { name: 'Hen' };

// Create a new Map
const animals = new Map();

// Add the Objects to the Map
animals.set(cat, 200);
animals.set(elephant, 300);
animals.set(hen, 400);
console.log(animals)
