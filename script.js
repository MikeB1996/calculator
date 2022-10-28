
let num1="";
let num2="";
let operator="";
let isNum1Full=false;
let alreadyFloat=false;
let pointFloat=".";
const display=document.getElementsByClassName("displaymon");
const buttonEq=document.getElementById("butUg");
buttonEq.addEventListener("click", eqPressed);
const clearB=document.getElementById("butClear");
clearB.addEventListener("click", clear);
const floatButton=document.getElementById("butFloat");
floatButton.addEventListener("click", addFloat);




function addFloat(){
    if (alreadyFloat==false){
        saveNum(pointFloat);
        alreadyFloat=true;
    }
    /*if ((isNum1Full==false) && (alreadyFloat==false)){
        saveNum(point);
        alreadyFloat=true;
    } else if ((isNum1Full==true) && (alreadyFloat==false)){

    }*/
}

function clear(){
    num1="";
    num2="";
    operator="";
    alreadyFloat=false;
    isNum1Full=false;
    document.getElementById("disp").innerText="0";
}

function eqPressed(){
    let res;
    alreadyFloat=false;
    switch(operator){
        case "+":
            res=add(num1,num2);
            res=Math.round(res*1000)/1000;
            document.getElementById("disp").innerText=res;
            manageResult(res);
            break;
        case "-":
            res=substract(num1,num2);
            res=Math.round(res*1000)/1000;
            document.getElementById("disp").innerText=res;
            manageResult(res);
            break;
        case "*":
            res=multiply(num1,num2);
            res=Math.round(res*1000)/1000;
            document.getElementById("disp").innerText=res;
            manageResult(res);
            break;
        case "/":
            res=divide(num1,num2);
            res=Math.round(res*1000)/1000;
            document.getElementById("disp").innerText=res;
            manageResult(res);
            break;
    }

}

function manageResult(result){
    num1=`${result}`;
    isNum1Full=true;
    num2="";
    operator="";
}


const opBut= document.getElementsByClassName("butOp");
for (let j=0;j<opBut.length;j++){
    opBut[j].addEventListener("click", opPressed);
}

const numButtons= document.getElementsByClassName("numBut");
for (let i=0;i<numButtons.length;i++){
    numButtons[i].addEventListener("click", numPressed);
}


//function called when an operator button is pressed
function opPressed(){
    if(operator==""){
        saveSign(this.innerHTML);
        isNum1Full=true;
        alreadyFloat=false;
    } else {
        eqPressed();
        saveSign(this.innerHTML);
        isNum1Full=true;
        alreadyFloat=false;
    }
    
}

//saves the operator in the global variable that saves it
function saveSign(sign){
    operator=sign;
    writeDisplay();
}

function numPressed(){
    saveNum(this.innerHTML);
}

function writeDisplay(){
    let outputstr=num1.concat(operator);
    outputstr=outputstr.concat(num2);
    document.getElementById("disp").innerText=outputstr;
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
    let sum=parseInt(a)+parseInt(b);
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


/*function operate(num1,num2,operation){
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

}*/