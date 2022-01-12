
//1. Create a simple JS line of code that display Hello World on the console 
console.log("Hello World");
document.getElementById("demo3").innerHTML= console.log("Hello World");


//3.Write a simple js code that print your full name
        function FullName(fName,lName){
            return fName+ " " +lName;
        }
        console.log(FullName("Jane","Smith"));
        document.getElementById("demo3").innerHTML= FullName("Jane","Smith");

//4. Write a simple js program that compare two value x and y. Assume x = 234 and y = 300. Your program should display a message that indicates the smallest and the largest.        
        function Compare1(x,y){
            if(x<y)
            return document.getElementById("demo4").innerHTML= x + ' is the smallest '+ y +' is the largest.';
            else
            return document.getElementById("demo4").innerHTML = (y + ' is the smallest '+ x +' is the largest.')
        }
       Compare1(234,300);

//5. Write a simple js program that compare three values x, y, z. You can give any random number for those three variables. The code should display which number is larger and which on is smaller among the three.
            let arr = [154,23,68];
            arr.sort((a, b) => a - b);
            document.getElementById("demo51").innerHTML= arr[0] + " is the smallest";
            document.getElementById("demo52").innerHTML= arr[2] + " is the largest";
        

//6. Write a simple js program that display all the numbers from 1 to 10 using for loop
function showNum(a,b){
    document.write("Q6: Display all the numbers from 1 to 10 using for loop. <br>");
    for(let i=a; i<b+1;i++){
        document.write(i + " ");
    }
}
showNum(1,10);
document.write("<br> <br> ");

//7. Write a program that display all even numbers from 0 to 10 using for loop
function showEvenNum(){
    document.write("Q7: Display all even numbers from 0 to 10 using for loop. <br>");
    for(let i=1; i<11;i++){
    if(i%2==0)
    document.write(i + " ");
    }
}
showEvenNum();
document.write("<br> <br> ");


//8.Write a simple program that display all odd numbers from 50 to 100 while loop
let i =50
document.write("Q8: Display all odd numbers from 50 to 100 with while loop. <br>");
while (i<100)
    if(++i%2!=0){
        document.write(i + " ");
    }
    document.write("<br> <br> ");

// function showOddNum(a,b){
// for(let i =a; i<b+1; i++){
//     while(i%2!==0){
//         console.log(i);
//     }
// }

// }
// showOddNum(50,100);



//9.Write a simple program that display a triangle nested loop
let row = prompt("Q.9: Please enter number of row for the triangle");
document.write("Q9: display a triangle nested loop. Refresh page to see pop-up message. <br>");
for(let i=1; i<=row; i++){
    for(let k =1; k<=(row -i); k++){
        document.write("&nbsp;");
    }
    for(let j = 1; j<=i; j++){
        document.write(" * ");
    }
    document.write("<br/>");
}


//10. Write a simple js function that display Hello World
function Hello(word){
    document.getElementById("demo10").innerHTML = word;
}
Hello("Hello World");

//2&11. Write a simple web application that accept your full name and that welcome you saying "Welcome your name". Make sure you add some style to make it look good.

function welcome() {
    let text;
    let person = prompt("Please enter your name:", "Jane Smith");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      person = person.bold().italics();
      text = "Welcome " + person + "! How are you doing today?";
    }
    document.getElementById("q11").innerHTML = text;
  }