//console.log("JS Loop and string self practice");

//Just printing the loop number
//for (let count = 1; count <= 15; count++) {
      //console.log("count = ", count);
//}
//console.log("Loop has ended");

//If loop start and if we want to see it in console log then we have define a variable after the loop

//for (let i = 1; i <= 5; i++) {
    //console.log(i);  
//}
//console.log(i);

//Calculate sum of  1 to 10'

//let totalSum = 0
//for (let number = 0; number <= 5; number++) {
    //totalSum = totalSum + number
//}
//console.log("Sum =", totalSum);

//So for bigger no to count we can use new variavle inside the conditional staement

//let sum = 0;
//let newn = 50;
//for (let number = 0; number <= newn; number++) {
    //sum = sum + number
    
//}
//console.log("sum =", sum);

//while loop 

//let  i = 1
//while (i <=5) {
    //console.log("i = ", i)
    //i++
//}

//let  i = 1
//while (i <=5) {
   // console.log("while loop")
    //i++
//}

//do-while loop 

//let i = 1
//do {
    //console.log("do-while loop");
    //i++
//} while (i<=20);

//for-of loop : this is use for the string value. To know the status of each character of inside the string.

//let str = "Kowsarul"
//let size = 0 
//for (let i of str) {
    //console.log("i=", i);
    //size++
//}
//console.log("string size = ", size);

//for-in loop : this is used for the full object

//let student = {
    //name: "Kowsarul Islam",
    //age : 20,
    //CGPA : 5,
    //isPass : true
//};
//for (let key in student) {
    //console.log("key =", key, "value=", student[key]);
        
    //}


// Practice Question : Print all the even & odd number 0 to 100

//First i find out the all the number which is 0 to 100.
//for (let num = 0; num <= 100; num++) {
    //console.log("Number",num);
//}

// So now if we we want too see the even no then we have to use the conditanal statement of if else.
//for (let num = 0; num <= 100; num++) {
   // if (num % 2 === 0) {
       // console.log("Even Number",num);
    //}
//}

//to find out the odd no
//for (let num = 0; num <= 100; num++) {
    //if (num % 2 !== 0) {
        //console.log("Odd Number",num);
    //}
//}

//Practice question : create a game where you start with any random game number. Ask user to keep gussing the number untill the user enters correct no.

//let gameNum = 10;

//let userNum = prompt("Guess the game no : ");

//while (userNum != gameNum) {
    //userNum = prompt("Wrong guess!! Try again..")
//}
//console.log("Congratulation, your gusising is perfect!");

//string in JS

//let str = "String in JS"
//console.log(str.length);
//console.log(str[5]);

//Template literel in JS

//let tem = `with this backtick we can name of our any string`
//console.log("Template literel =", tem);

//let groceryItem = {
    //item:"Onion",
    //price: 20,
//};
//This example is one way we can print out the required value.
//console.log("The price of item", groceryItem.item, "is", groceryItem.price, "taka");
//But with bactick we can do the same thing with more simpler way. and its easy to write the coding. 
//let output = (`The price of item ${groceryItem.item} is ${groceryItem.price} taka `);
//console.log(output);

//let specialString = `Total of three number ${5+5+4} `
//console.log(specialString);

//let tem = `with this backtick\n we can name of our any string`
//console.log(tem);

//console.log("excape \n character");

//console.log("excape \t character");

//If we want to see string length by using this escape chracter then this escape character will count as 1, though there is two character backslash and n. 

//let str = "excape\ncharacter"
//console.log(str.length);//ans: 16 chratcer

//string method

//let str = "Kowsarul Islam"
//str = str.toUpperCase()
//console.log(str);

//let str = "Kowsarul Islam"
//str = str.toLowerCase()
//console.log(str);


//let str = "    Muhammad Kowsarul Islam     ";
//console.log(str.trim());

//let str = "Kowsarul"
//console.log(str.slice(1,5));

//let str1 = "Kowsarul";
//let str2 = "Islam";
//let result = str1+str2
//console.log(result.slice());

//let str ="Hello"
//console.log(str.replace("lo", "p"));//Ans : help

let str = "JavaScript"
console.log(str.charAt(2));
