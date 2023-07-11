console.log("✧・* WORDLE PARA QUE SE APRENDAN MI NOMBRE *・✧")

const emojiFeliz = ["(*・‿・)ノ⌒*:･ﾟ✧", "(ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧", "ᕕ( ᐛ )ᕗ", "._.)/\(._.", " (ᕗ ͠° ਊ ͠° )ᕗ"]
const adivinador = {
    nombre: '',
    edad: '',

    ingresarDatos: function () {
        this.nombre = prompt('Como te llamas?');
        this.edad = prompt('Y cuantos años tenes?');
    }
};

adivinador.ingresarDatos();



let word = 'PAULO';
let wordArr = [];
let usuarioArr = []
let error = []
let correcto = []

function textoAarray(texto, arr) {
    for (let i of texto) {
        arr.push(i)
    }
}
textoAarray(word, wordArr)


function ingreso() {
    let usuarioingreso = prompt("ADIVINA MI NOMBRE");
    let usuario = usuarioingreso.toUpperCase();
    if (!isNumber(usuario)) {

        textoAarray(usuario, usuarioArr)
        compararArraysConMismoIndice(wordArr, usuarioArr, comparar);
    } else {
        if (confirm("Pusiste numeros en vez de letras! estas bien " + adivinador.nombre +"  o_o?. Queres intentarlo de nuevo?")) {
            ingreso()
        } else {
            console.log("Chau!");
        }
    }

    function isNumber(value) {
        var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
        return numberPattern.test(value);
    };

}

function compararArraysConMismoIndice(array1, array2, comparar) {
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            comparar(array1, array2, i);
        }
        mensaje()
    } else {
        console.log("pero ni siquiera te sabes cuantas letras tiene mi nombre " + adivinador.nombre +"  CHAU!! ୧༼ಠ益ಠ╭∩╮༽")
    }
}

function comparar(a, b, i) {
    if (a[i] === b[i]) {
        correcto.push(a[i]);
    } else {
        correcto.push(" _ ");
        error.push(i);
    }
}


function reset() {
    correcto.splice(0, correcto.length);
    error.splice(0, error.length);
    usuarioArr.splice(0, usuarioArr.length);
}
function mensaje() {
    if (error.length === 0) {
        console.log(correcto[0] + correcto[1] + correcto[2] + correcto[3] + correcto[4] + " " + emojiFeliz[Math.floor(Math.random() * emojiFeliz.length)])
        result = confirm("La pegaste " + adivinador.nombre +"! pero te parece tener " + adivinador.edad +" años y estar jugando a esto? " + emojiFeliz[Math.floor(Math.random() * emojiFeliz.length)]);
        reset()
    } else {
        console.log(correcto[0] + correcto[1] + correcto[2] + correcto[3] + correcto[4] + "	( ✜︵✜ )")
        result = confirm("NOOOO! ⤜(ⱺ ʖ̯ⱺ)⤏ ");
        reset()
        ingreso()
    }
}
if (adivinador.nombre && adivinador.edad ){
    ingreso()
  }else{
  console.log("Si no me das todos tus datos no podes jugar ")
  }
//ingreso()
