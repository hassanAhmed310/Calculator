var expression = '';
const precision = 2;
var outputElement = document.getElementById('screen');
function clear(){
    outputElement.innerHTML = '';
    expression = ''
}
function handleButtonClick(button){
    outputElement.innerHTML += button.innerHTML;
    expression += button.innerHTML;
}
function divide(){
    outputElement.innerHTML += '&divide;';
    expression += '/';
}
function multiply(){
    outputElement.innerHTML += '&times;'
    expression += '*';
}
function plus(){
    outputElement.innerHTML += '&plus;'
    expression += '+';
}
function minus(){
    outputElement.innerHTML += '&minus;'
    expression += '/';
}
function removeLast(){
    outputElement.innerHTML = outputElement.innerHTML.slice(0, -1)
    expression = expression.slice(0, -1)
}
function equal(){
    try{
        result = eval(expression);
    }catch(error){
        alert(error);
        clear();
        return;
    }
    result = eval(expression);
    if(isNaN(result) || !isFinite(result)){
        alert("Mathimatical Error!");
        clear();
        return;
    }
    if(result === Math.trunc(result)){
        result = Math.trunc(result);
    }else{
        result = result.toFixed(precision)
    }
    outputElement.innerHTML = result;
    expression = result;
}
function reset(){
    expression = ''
    outputElement.innerHTML = ''; 
}
function isRegExpValid(pattern) {
    try {
      new RegExp(pattern);
      return true;
    } catch (error) {
      return false;
    }
  }