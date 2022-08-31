const person = {
    fname: " John",
    lname: " Doe",
    age: 25
};

for (let x in person) {
    console.log(person[x])

}



// //=====================================

var cars = ["Maruti", "Mercedes", "BMW"];
for (i in cars) {
    console.log(cars[i]);
}


// // ================================




const campus = { "camp_name": "Bangalore_campus", "establish": 2016, "election": "three_months" }
for (let eachKey in campus) {
    console.log(campus[eachKey])
}

// // ===========================


const a = {
    fname: " John",
    lname: " Doe",
    age: 25
};

for (let x in a) {
    console.log(a[x])

}



// // ===========================================

var b= 4567
n = String(b)
i = 0
while (i <= n.length) {
    a = n[i]
    i++
    console.log(b);
}



// // =====================================

var str = " 1234 "
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];

}
console.log(newString);







