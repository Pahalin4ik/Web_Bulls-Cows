let Attempts = [];
let Numbers = [];
var lastNum;

function RightNumb() {
    var num = "";
    let ok = false;
    do {
        ok = false;
        num = Numbers[randomInteger(0, Numbers.length)];
        for (var i = 0; i < Attempts.length; i++) {
            if (Attempts[i].C != Give_Cow(num, Attempts[i].Num)) {
                ok = true;
            }
            else if (Attempts[i].B != Give_Bull(num, Attempts[i].Num)) {
                ok = true;
            }
        }
    } while (ok);
    return num;
}
function SepNumb(text) {
    var ret = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '4' && !Contains(ret, text[i])) {
            ret += text[i];
        }
    }
    return ret.substring(0, 1);
}
class Attempt {
    C = '0';
    B = '0';
    Num = '0000';
}

function FillList() {
    let arr = [];
    for (var n = 0123; n < 10000; n++) {
        var s = String(n);
        if (s.length < 4)
            s = "0" + s;
        if (s[0] != s[1] && s[0] != s[2] && s[0] != s[3] && s[1] != s[2] && s[1] != s[3] && s[2] != s[3])
            arr.push(s);
    }
    return arr;
}

function AddToList() {
    var p = new Attempt();
    p.Num = lastNum;
    p.C = $("#cows").val();
    p.B = $("#bulls").val();
    Attempts.push(p);
    $("#result").val($("#result").val() + `${p.C}:${p.B}\n`);
    lastNum = RightNumb();
    $("#result").val($("#result").val() + `${Attempts.length + 1})\t${lastNum}\n`);
    Numbers = arrayRemove(Numbers, lastNum);
}

$(function () {
    Numbers = FillList();
    lastNum = RightNumb();
    $("#result").val(`${1 ?? Attempts.lenght + 1})\t${lastNum}\n`);
    Numbers = arrayRemove(Numbers, lastNum);
});

$("#bulls").on("keydown", function (e) {
    var s = SepNumb($("#bulls").val());
    $("#bulls").val(s);
});
$("#bulls").on("keyup", function () {
    var s = SepNumb($("#bulls").val());
    $("#bulls").val(s);
});
$("#cows").on("keydown", function (e) {
    var s = SepNumb($("#cows").val());
    $("#cows").val(s);
});
$("#cows").on("keyup", function () {
    var s = SepNumb($("#cows").val());
    $("#cows").val(s);
});

$("#click").click(function () {
    if ($("#bulls").val() != "" && $("#cows").val() != "") {
      if(!($("#bulls").val()>$("#cows").val())){
        if ($("#bulls").val() == "4" && $("#cows").val() == "4") {
            alert("?????????????????? ??????????????!!!");
            $("#result").val($("#result").val() + `${ $("#cows").val()}:${$("#bulls").val()}\n?????????????????? ??????????????!!!`);
            $("#click").prop('disabled', true);
        }
        else {
            AddToList();
        }
      }
      else{
        alert("???????????????????????? ????????????????");
      }
    }
    else {
        alert("???????????????????????? ????????????????");
    }
});


