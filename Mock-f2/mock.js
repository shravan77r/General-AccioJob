//Using HTML elements, take user birthdate as input and also ask them to enter 
//the birthdate of the person with whom they want to compare their age.
//1. Date format: MM/DD/YYYY2. Display the age difference in days/years + days as an h3 element.


function fncompare(){
    const b1=document.getElementById("cmp").value;
    const b2=document.getElementById("cmp2").value;

    var spldate = b1.split("-");
    var spldate2 = b2.split("-");
    var dat1 = new Date(spldate[0],spldate[1]-1,spldate[2]);
    var dat2 = new Date(spldate2[0],spldate2[1]-1,spldate2[2]);
    
    let days = 0;
    days = dat1 - dat2;
    const h3 = document.getElementById("totaldays");
    h3.innerText = days;
}


//Write a function to display the current time every ‘x’ 
//seconds, ‘y’ number of times. After ‘y’ outputs, the function should terminate



// let a = 10;
// var b;

// function fndemo(){
//     let a = 20;
// }



// //callstack :- a=10; b=undefined; fn=#200

// //Predict the output:
// (
//     function(){ 
//         var x = y = 5;
//     }
// )();
// console.log("x is defined? " + (typeof x !== 'undefined'));
// console.log("y is defined? " + (typeof y !== 'undefined'));


// //Predict the output:
// function Student(firstName, lastName) { 
//     this.firstName = firstName; 
//     this.lastName = lastName;
// }
// const rahul = new Person('Rahul', 'Sharma');
// const ananya = Person('Ananya', 'Gupta');
// console.log(rahul);
// console.log(ananya);







