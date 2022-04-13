var SecretNum;
var count = 1;

$(function () {
    SecretNum = Create();
});

$("#click").click(function () {
    if ($("#num").val().length == 4) {
        var s = $("#result").val();
        s += `${count}) https://github.com/Pahalin4ik/Web_Bulls-Cows.git${$("#num").val()}\t${Give_Cow(SecretNum, $("#num").val())}:${Give_Bull(SecretNum, $("#num").val())}\n`;
        count++;
        $("#result").val(s);
        if (Give_Cow(SecretNum, $("#num").val()) == 4 && Give_Bull(SecretNum, $("#num").val()) == 4) {
            alert("Ты победил!!!");
            $("#click").prop('disabled', true);
        }
    }
    else {
        alert("Неправильное число");
    }
});

$("#num").on("keydown", function () {
    var s = SepNumb($("#num").val());
    $("#num").val(s);
});
$("#num").on("keyup", function () {
    var s = SepNumb($("#num").val());
    $("#num").val(s);
});

function Create() {
    var s = "";
    let list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var i = 0; i < 4; i++) {
        var c = list[randomInteger(0, list.length)];
        s += c;
        list = arrayRemove(list, c)
    }
    return s;
}

function SepNumb(text) {
    var ret = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9' && !Contains(ret, text[i])) {
            ret += text[i];
        }
    }
    return ret.substring(0, 4);
}