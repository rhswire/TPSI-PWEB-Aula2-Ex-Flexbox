
function flex(valor){
    document.getElementById('container').style.flexDirection=valor;
}

function wrap(valor){
    document.getElementById('container').style.flexWrap=valor;
}

function justifyContent(valor){
    document.getElementById('container').style.justifyContent=valor;
}

function alignItems(valor){
    document.getElementById('container').style.alignItems=valor;
}

function slide(){
    document.getElementById('publicidade').src="../img/email.png";
    document.getElementById('descricao').innerHTML="email";
    setTimeout("slide2()", 2000)
}

function slide2(){
    document.getElementById('publicidade').src="../img/imc.png";
    document.getElementById('descricao').innerHTML="imc";
    setTimeout("slide3()", 2000)
}

function slide3(){
    document.getElementById('publicidade').src="../img/isla.png";
    document.getElementById('descricao').innerHTML="isla";
    setTimeout("slide()", 2000)
}
