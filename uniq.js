dic = [
    { "first": "1" },
    { "second": "2" },
    { "third": "1" },
    { "four": "5" },
    { "five": "5" },
    { "six": "9" },
    { "seven": "7" }
]
list = []
for (i of dic) {
    for (j in i) {
        // console.log(i[j])
    }
    if (!list.includes(i[j])) {
        list.push(i[j]);

    }

}


console.log(list)