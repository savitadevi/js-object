d1 = { 'a': 100, 'b': 200, 'c': 300 }
d2 = { 'a': 300, 'b': 200, 'd': 400 }
    // output should be this: {'a': 400, 'b': 400, 'd': 400, 'c': 300}
for (i in d1) {
    for (j in d2) {
        if (i == j) {
            d2[i] = d1[i] + d2[j]
            break

        } else {
            d2[i] = d1[i]
            d2[j] = d2[j]
        }

    }


}
console.log(d2)





// ==========================================================
var dic1 = { 1: 10, 2: 20 };
var dic2 = { 3: 30, 2: 40 };
var dic3 = { 5: 50, 6: 60 };
for (i in dic1) {
    for (j in dic2) {
        if (i == j) {
            dic3[i] = dic1[i] + dic2[j]
            break
        } else {
            dic3[i] = dic1[i]
            dic3[j] = dic2[j]
        }
    }
}
console.log(dic3);