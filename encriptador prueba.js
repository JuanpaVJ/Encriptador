const textoinicial=document.getElementById('encriptartext');
const zonamostrartexto=document.getElementById('desencriptartext');
// var textocopiado=''

function btnEncriptar(){
    const textoEncriptado=encriptar(textoinicial.value);
    zonamostrartexto.value=textoEncriptado;
    zonamostrartexto.style.backgroundImage='none';
    // textoinicial.value='';
}

function btnDesencriptar(){
    const textoDesencriptado=desencriptar(textoinicial.value);
    zonamostrartexto.value=textoDesencriptado;
    textoinicial.value='';
}

function encriptar(fraseEncriptada){
    let claveEncriptacion = [['e','enter'],['i','imes'],['a','ai'],
    ['o','ober'],['u','ufat']]
    fraseEncriptada=fraseEncriptada.toLowerCase();

    for(let i=0;i<claveEncriptacion.length; i++){
        if(fraseEncriptada.includes(claveEncriptacion[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(claveEncriptacion[i][0],claveEncriptacion[i][1]);
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseDesencriptada){
    let claveEncriptacion = [['e','enter'],['i','imes'],['a','ai'],
    ['o','ober'],['u','ufat']]
    fraseDesencriptada=fraseDesencriptada.toLowerCase();

    for(let i=0;i<claveEncriptacion.length; i++){
        if(fraseDesencriptada.includes(claveEncriptacion[i][1])){
            fraseDesencriptada=fraseDesencriptada.replaceAll(claveEncriptacion[i][1],claveEncriptacion[i][0]);
        }
    }
    return fraseDesencriptada;
}

function copiar(){
    zonamostrartexto.select()
    navigator.clipboard.writeText(zonamostrartexto.value)
    // zonamostrartexto.value=''
    // alert('Mensaje copiado')
}


function pegar(){
    let textoFinal = document.getElementById('desencriptartext').value
    let textoPrueba = document.getElementById('prueba');
    console.log(textoFinal)
    console.log(textoPrueba)
    textoPrueba.value = textoFinal;
}