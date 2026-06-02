let a = 809
let b = 90
let c = 91

if (a > b && a > c) {   
    console.log("a is the greatest")
} else if (b > a && b > c) {
    console.log("b is the greatest")
} else if (c > a && c > b) {
    console.log("c is the greatest")
} else {
    console.log("There is a tie for the greatest number.")
}