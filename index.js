var operation = "";
var first_str = "";
var second_str = "";
var first_num = 0;
var second_num = 0;

document.getElementById("1").onclick = () => {insert_number("1")}
document.getElementById("2").onclick = () => {insert_number("2")}
document.getElementById("3").onclick = () => {insert_number("3")}
document.getElementById("4").onclick = () => {insert_number("4")}
document.getElementById("5").onclick = () => {insert_number("5")}
document.getElementById("6").onclick = () => {insert_number("6")}
document.getElementById("7").onclick = () => {insert_number("7")}
document.getElementById("8").onclick = () => {insert_number("8")}
document.getElementById("9").onclick = () => {insert_number("9")}
document.getElementById("0").onclick = () => {insert_number("0")}
document.getElementById("plus").onclick = () => {insert_operation("+")}
document.getElementById("mins").onclick = () => {insert_operation("-")}
document.getElementById("mult").onclick = () => {insert_operation("*")}
document.getElementById("divd").onclick = () => {insert_operation("/")}
document.getElementById("powr").onclick = () => {insert_operation("^")}
document.getElementById("remn").onclick = () => {insert_operation("%")}
document.getElementById("ce").onclick = () => {clear_entry()}
document.getElementById("c").onclick = () => {clear_everything()}
document.getElementById("eqls").onclick = () => {solve_equation()}
document.getElementById("dot").onclick = () => {insert_dot()}

function insert_number(number){

    replace_starting_zero()
    if(operation == "") first_str += number;
    else second_str += number;  
    update_equation();
}

function insert_operation(oper){
    operation = oper;
    update_equation();
}

function insert_dot(){
    
    if(operation != "" && !second_str.includes(".")){
        second_str += ".";
        update_equation();
    }
    if(operation == "" && !first_str.includes(".")){
        first_str += ".";
        update_equation();
    }
}

function clear_entry(){
    
    if(second_str != ""){
        second_str = second_str.slice(0,-1);
        update_equation();
        return;
    }    

    if(operation != ""){
        operation = "";
        update_equation();
        return;
    }

    if(first_str != ""){
        first_str = first_str.slice(0,-1);
        if(first_str == "") first_str = "0";
        update_equation();
    }
}

function clear_everything(){
    first_str = "0";
    operation = "";
    second_str = "";
    update_equation();
}

function solve_equation(){

    if(second_str == "") return;

    first_num = Number(first_str);
    second_num = Number(second_str);

    switch(operation){
        case "+":  first_num = first_num + second_num; break;
        case "-":  first_num = first_num - second_num; break;
        case "*":  first_num = first_num * second_num; break;
        case "/":  first_num = first_num / second_num; break;
        case "^":  first_num = first_num ** second_num; break;
        case "%":  first_num = first_num % second_num; break;
        default: break;
    }
    
    first_str = String(first_num);
    operation = "";
    second_str = "";

    update_equation();
}

function update_equation(){
    document.getElementById("display").innerHTML = first_str+operation+second_str;
    console.log(first_str+operation+second_str);
}

function replace_starting_zero(){

    if(first_str[0] == "0"){
        first_str = first_str.substring(1);
    }

    if(second_str[0] == "0"){
        second_str = second_str.substring(1);
    }
}