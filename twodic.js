var list1 = ["one ", "two ", "three ", "four ", "five "]
var list2 = [1, 2, 3, 4, 5, ]
var a = {}
for (i in list1) {
    a[list1[i]] = list2[i]

}
console.log(a)