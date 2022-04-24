//Challenge 1 - print odds 1-20
for(i=0;i < 20; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

//Challenge 2 - Decreasing multiples of 3
for(i=100; i > -1; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}


//Challenge 3 - Print the sequence
var arr = [4,2.5,1,-0.5,-2,-3.5]
for (i=0; i <= arr.length - 1; i++){
    console.log(arr[i]);
}


//Challenge 4 - Sigma
var sum = 0;
for (i=0; i <= 100; i++){
    sum+= i;
}
console.log(sum)

//Challenge 5 - Factorial
var product = 1;
for (i=1; i < 13; i++){
    product = product * i;
}
console.log(product)