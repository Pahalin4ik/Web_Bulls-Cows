function Contains(text, char){
    var c = false;
    for(var i = 0; i < text.length; i++){
        if(text[i] == char){
            c = true;
            break;
        }
    }
    return c;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
        return ele != value;
    });
}

function Give_Cow(A, B) {
    var count = 0;
    for (var i = 0; i < B.length; i++) {
       if(Contains(A,B[i])){
           count++;
       }
    }
    return String(count);
}
function Give_Bull(A, B) {
    var count = 0;
    for (var i = 0; i < B.length; i++) {
        if (A[i] == B[i]) {
            count++;
        }
    }
    return String(count);
}
