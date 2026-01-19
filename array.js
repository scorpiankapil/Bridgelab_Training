// Push & Pop
let stack = [10, 20, 30]; // Create an array

console.log("Initial Array:", stack); 

stack.push(40); // PUSH → add element at the end
console.log("After push:", stack);

let removedElement = stack.pop(); // POP → remove last element
console.log("Popped Element:", removedElement);

console.log("Final Array:", stack);



// array.indexOf()
let arr = [10, 20, 30, 40, 50];

let index = arr.indexOf(30);
console.log("Index:", index); 


// slice (start, end)
let a = [10, 20, 30, 40, 50];

let result = a.slice(1, 4);
console.log(result); // [20, 30, 40]
console.log(a.slice(3)); // [40, 50]


let b = [3,5];
let c = [5,6];
let d = [...b,...c];
console.log(d);


// Regex ($$) - to split the data
let str = "one$$two$$three";
let res = str.split(/\$\$/);
console.log(res);


// Join is used to combine all elements of an array into a single string
let e = ["Hello", "World"];
let result2 = e.join(" ");
console.log(result2); // "Hello World"


// map function 
let f = [3, 5, 7, 8];
let g = f.map((n) => n * 2);
console.log(g);

// filter function
let h = f.filter((user)=>user>5);
console.log(h);

// find function

let i = [1,4,6,9,34,60];
let j = i.find((user)=>user>5);
console.log(j);

// some function
let k = i.some((user)=>user>5); // in array when its find first true it returns true
console.log(k);

// every function
let l = i.every((user)=>user>5); // in array when its find first false it returns false
console.log(l);

// isArray
if (i.length >= 0 && Array.isArray(i)) {
  console.log("i is an array and length is valid");
}


// Quantity is greater than 5, Price is less than 50, targetPrice is greater than 50
let p = [
  { _id: 2, quantity: 5,  price: 25, targetPrice: 100 },
  { _id: 1, quantity: 10, price: 15, targetPrice: 120 },
  { _id: 3, quantity: 6,  price: 35, targetPrice: 100 },
  { _id: 4, quantity: 5,  price: 55, targetPrice: 150 },
  { _id: 5, quantity: 5,  price: 55, targetPrice: 150 }
];

let result3 = p.map((value) => {
   value.quantity > 5 && value.price < 50 && value.targetPrice > 50 
   return value
  });
console.log(result3);

let result4 = p.filter(value =>
  value.quantity > 5 &&
  value.price < 50 &&
  value.targetPrice > 50
);

console.log(result4);

const jsonData = [
  {"_id":{"$oid":"64c2342de32f4a51b19b924e"},"name":"Electronics","slug":"electronics"},
  {"_id":{"$oid":"64c2342de32f4a51b19b924f"},"name":"Home & Kitchen","slug":"home-kitchen"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9250"},"name":"Fashion","slug":"fashion"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9251"},"name":"Health & Beauty","slug":"health-beauty"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9252"},"name":"Sports & Outdoors","slug":"sports-outdoors"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9253"},"name":"Toys & Games","slug":"toys-games"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9254"},"name":"Automotive","slug":"automotive"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9255"},"name":"Books & Stationery","slug":"books-stationery"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9256"},"name":"Food & Beverages","slug":"food-beverages"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9257"},"name":"Pet Supplies","slug":"pet-supplies"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9258"},"name":"Furniture","slug":"furniture"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9259"},"name":"Jewelry & Accessories","slug":"jewelry-accessories"},
  {"_id":{"$oid":"64c2342de32f4a51b19b925a"},"name":"Garden & Outdoor","slug":"garden-outdoor"},
  {"_id":{"$oid":"64c2342de32f4a51b19b925b"},"name":"Electrical Appliances","slug":"electrical-appliances"},
  {"_id":{"$oid":"64c2342de32f4a51b19b925c"},"name":"Baby & Kids","slug":"baby-kids"},
  {"_id":{"$oid":"64c2342de32f4a51b19b925d"},"name":"Office Supplies","slug":"office-supplies"},
  {"_id":{"$oid":"64c2342de32f4a51b19b925e"},"name":"Fitness & Wellness","slug":"fitness-wellness"},
  {"_id":{"$oid":"64c2342de32f4a51b19b925f"},"name":"Arts & Crafts","slug":"arts-crafts"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9260"},"name":"Music & Instruments","slug":"music-instruments"},
  {"_id":{"$oid":"64c2342de32f4a51b19b9261"},"name":"Travel & Luggage","slug":"travel-luggage"}
];

console.log(jsonData);
