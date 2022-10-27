
let num1="";
let num2="";
let operator="";
let isNum1Full=false;
const display=document.getElementsByClassName("displaymon");

/*const Button1=document.querySelector("#but1");
const Button2=document.querySelector("#but2");
const Button3=document.querySelector("#but3");
const Button4=document.querySelector("#but4");
const Button5=document.querySelector("#but5");
const Button6=document.querySelector("#but6");
const Button7=document.querySelector("#but7");
const Button8=document.querySelector("#but8");
const Button9=document.querySelector("#but9");
const Button0=document.querySelector("#but0");
*/

const numButtons= document.getElementsByClassName("numBut");
for (let i=0;i<numButtons.length;i++){
    numButtons[i].addEventListener("click", numPressed);
}


function numPressed(){
    saveNum(this.innerHTML);
}

function writeDisplay(){
    let outputstr=num1.concat(operator);
    outputstr=outputstr.concat(num2);
    display.innerText=outputstr;
    alert(outputstr);
    //return outputstr;
}

function saveNum(inputNum){
    if (isNum1Full==false){
        num1=num1.concat(inputNum);
        writeDisplay();
        
    } else {
        num2=num2.concat(inputNum);
        writeDisplay();
    }
    
}

//add function
function add(a,b){
    let sum=a+b;
    return sum
}


function substract(a,b){
    let sub=a-b;
    return sub;
}


function multiply(a,b){
    let mult=a*b;
    return mult;
}


function divide(a,b){
    if (b!=0){
        let divid=a/b;
        return divid;
    } else {
        return("ERROR");
    }
}


function operate(num1,num2,operation){
    let result;
    if (operation=="+"){
        result=add(a.b);
    } else if (operation=="-"){
        result=substract(a,b);
    } else if (operation=="*"){
        result=multiply(a,b);
    } else if (operation=="/"){
        result=divide(a,b);
    }
    return result;

}