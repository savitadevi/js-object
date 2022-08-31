let animals = [{ name: "lion", category: "wild" }, {
    name: "dog",
    category: "pet"
}, {
    name: "cat",
    category: "pet"
}]
let category = [...new Set(animals.map((animal) => animal.category))];
console.log(category);