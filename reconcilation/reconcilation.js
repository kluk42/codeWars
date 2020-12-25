function sum(a) {
    return function(b) {
        return a+b
    }
}

let arr = [1, 2, 3, 4, 5, 7, 7];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b ? true : false;
    }
}

function inArray(checkingArr) {
    return function(x) {
        return checkingArr.includes(x);
    }
}

alert(arr.filter(inArray([1, 2, 7])));