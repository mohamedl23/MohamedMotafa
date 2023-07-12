
// _________________{1}_________________________
// var num =Number(window.prompt("enter The Number"));
// console.log(num);
// ______________________________________________
// _________________{2}_________________________
// var num =Number(window.prompt("enter The Number"));
// if(num % 3 ==0 && num % 4==0 ){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }
// _______________________________________________
// _________________{3}___________________________
// var numOne =Number(window.prompt("enter the first number"))
// var numTwo =Number(window.prompt("enter the last number"))
// if(numOne > numTwo){
//     console.log(numOne)
// }
// else{
// console.log(numTwo)
// }
// ______________________________________________
// _________________{4}___________________________
// var num =Number(window.prompt("enter the number"))
// if(num < 0){
//     console.log("This Number is negative")
// }
// else if(num > 0){
//     console.log("This Number is positive")
// }
// else{
//     console.log("This Number is Zero") 
// }
// ___________________________________________
// _________________{5}_________________________
// var numOne =Number(window.prompt("enter the first Number"))
// var numTwo =Number(window.prompt("enter the second Number"))
// var numThree =Number(window.prompt("enter the third Number"))
// if(numOne > numTwo && numOne > numThree){
//     console.log( "max element =", numOne)
// }
// else if (numTwo > numOne && numTwo > numThree){
//     console.log( "max element =" ,numTwo)
// }
// else {
//     console.log("max element =" ,numThree)
// }
// if(numOne < numTwo && numOne < numThree){
//     console.log( "min element =", numOne)
// }
// else if (numTwo < numOne && numTwo < numThree){
//     console.log( "min element =" ,numTwo)
// }
// else {
//     console.log("min element =" ,numThree)
// }
// ________________________________________________
// _________________{6}{7}____________________________
// var num =Number(window.prompt("Enter the Number"))
// if(num % 2 === 0){
//     console.log(" this number is even")
// }
// else{
//     console.log("this number is odd")
// }
// ___________________________________________
// _________________{8}_________________________
// var chars =window.prompt("Enter the Chars")
// if(chars == "a" || chars == "e" || chars == "l" || chars == "o" || chars == "u" || "A" || chars == "E" || chars == "L" || chars == "O" || chars == "U" ){
//     console.log("this character is vowel")
// }
// else{
//     console.log("this character is Consonant")
// }
// _____________________________________________
// _________________{9}_________________________
// var num =window.prompt("Enter The Number")
// for(var i =1 ; i <= num ; i++){
//     console.log(i)
// }
// _________________________________________
// _________________{10}_____________________
// var num  =window.prompt("enter the number")
// for(var i=1 ; i <= 12 ; i++ ){
//     console.log(num * i)
// }
// ________________________________________
// _________________{11}_____________________
// var num =window.prompt("enter the number");
// for(var i=2 ; i <= num ; i=i+2 ){
//     console.log(i)
// }
// ________________________________________
// _________________{12}_____________________
// var numOne=Number(window.prompt("enter the first number"))
// var numTwo=Number(window.prompt("enter the last number"))
// var res = numOne ** numTwo
// console.log(res) 
// _________________{12}_____________________
// var sun , average , percentage
// for(var i=1 ; i <= 5 ; i++){
//     window.prompt(`enter num ${i}`)
// }


// !!!!!!!!!!!!!!!!!!!!
// __________________________________________

// _________________{13}_____________________
// var month=window.prompt("Please Enter the Mounth number")
// if(month == 1){
//     console.log("Days in Month: 31")
// }
// else if (month == 2){
//     console.log("Days in Month: 28")
// }
// else if (month == 3){
//     console.log("Days in Month: 31")
// }
// else if (month == 4){
//     console.log("Days in Month: 30")
// }
// else if (month == 5){
//     console.log("Days in Month: 31")
// }
// else if (month == 6){
//     console.log("Days in Month: 30")
// }
// else if (month == 7){
//     console.log("Days in Month: 31")
// }
// else if (month == 8){
//     console.log("Days in Month: 31")
// }
// else if (month == 9){
//     console.log("Days in Month: 30")
// }
// else if (month == 10){
//     console.log("Days in Month: 31")
// }
// else if (month == 11){
//     console.log("Days in Month: 30")
// }
// else if (month == 12){
//     console.log("Days in Month: 31")
// }
// else{
//     console.log("this number is wrowng ✖ Please enter the month number from 1 to 12 ")
// }
// _________________________________________
// _________________{14}_____________________
// var sum =0;
// for (var i =1 ; i <=5 ; i++){
//     var sub =Number(window.prompt(`enter sub${i}`))
//     if (sub >= 0 && sub <= 100){
//         sum+=sub;
//     }
// }
//     var percentage = sum / 500 * 100 ;

//     if (`${percentage}%` >= "90%")
//     {
//         console.log ("grad A");
//     }
//     else if (`${percentage}%` >= "80%")
//     {
//         console.log ("grad B");
//     }
//     else if (`${percentage}%` >= "70%")
//     {
//         console.log ("grad C");
//     }
//     else if (`${percentage}%` >= "60%")
//     {
//         console.log ("grad D");
//     }
//     else if (`${percentage}%` >= "40%")
//     {
//         console.log ("grad E");
//     }
//     else if (`${percentage}%` >= "30%")
//     {
//         console.log ("grad f");
//     }

// _________________{15}_____________________
// var month=Number(window.prompt("enter the month"))
// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:            
//         console.log("Days in Month: 31")
//     break;
//     case 2:
//         console.log("Days in Month: 28")
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30")
//     break;
//     default:
//         console.log("this number is wrowng ✖ Please enter the month number from 1 to 12")
//     break;
// }
// __________________________________________
// _________________{16}_____________________
// var character=window.prompt("please enter the character")
// switch(character){
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         console.log("this character is vowel")
//     break;
//     default:
//         console.log("this character is Consonant")
//     break;
// }
// __________________________________________
// _________________{17}_____________________
// var numOne=Number(window.prompt("Enter a first number "))
// var numTwo=Number(window.prompt("Enter a last number "))
// switch(true){
//     case numOne > numTwo :
//         console.log("Max element = ",numOne)
//         break;
//     case numTwo > numOne :
//         console.log("Max element = ",numTwo)
//         break;
//     default:
//         console.log("first number = last number")
// }
// __________________________________________
// _________________{18}_____________________
// var num=Number(window.prompt("enter the number "))
// switch(true){
//     case num % 2 == 0:
//         console.log("this number is even")
//         break;
//     case num % 2 == 1:
//         console.log ("this number is odd")
//         break;
// }
// __________________________________________
// _________________{19}_____________________
// var num=Number(window.prompt("enter the number "))
// switch(true){
//     case num > 0 :
//         console.log ("this number is positive")
//         break;
//     case num < 0 :
//         console.log ("this number is negative")
//         break;
//     default:
//         console.log ("this number is Zero")
//         break;
// }
// __________________________________________
// _________________{20}_____________________
// var firstNum=Number(window.prompt("enter the first number"))
// var lastNum=Number(window.prompt("enter the last number"))
// var operators=window.prompt("enter the operators ")
// switch(operators){
//     case "+":
//         console.log(firstNum,"+",lastNum ,"=" ,firstNum+lastNum)
//         break;
//     case "-":
//         console.log(firstNum,"-",lastNum ,"=" ,firstNum-lastNum)
//         break;
//     case "*":
//         console.log(firstNum,"*",lastNum ,"=" ,firstNum*lastNum)
//         break;
//     case "/":
//         console.log(firstNum,"/",lastNum ,"=" ,firstNum/lastNum)
//         break;
// }
// __________________________________________

























