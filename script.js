let result = document.getElementById("result")

function insert(num) {
    result.innerHTML = result.innerHTML + num;
}

function erase() {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length -1);
}

function clean() {
    result.innerHTML = "";
}

function calcResult() {
    result.innerHTML = eval(result.innerHTML)
}