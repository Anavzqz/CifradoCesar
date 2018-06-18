window.cipher = {
  //Función para cifrar texto
  encode: (cipher1,offset) =>
  {
    //Ligar la casilla de cifrar
    //let cipher = document.getElementById("cipher").value;

    //Ligar la casilla de offset (num. de casillas que se recorre)
    //let offset = parseInt(document.getElementById("offset").value);
    //donde se guarda el texto a cifrar
    let cifrarTexto = "";
    //guarda lo que se transforma a ascii
  let i = 0;
  //Argumentos para cifrar
  for (i = 0; i < cipher1.length; i++) {
    //espacio
      if(cipher1.charCodeAt(i)===32) {

  let unicode = String.fromCharCode(32);
  cifrarTexto +=  unicode;
  } else {
  //Condición para las mayusculas
    if (cipher1.charCodeAt(i) >= 65 && cipher1.charCodeAt(i) <= 90) {
      let textCode = (cipher1.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
  //Sentencia para convertir los números en letras
      let unicode = String.fromCharCode(textCode);
  //concatenar letras cifradas para formar la palabra
      cifrarTexto += unicode
        }
  //Condición para las minusculas
      else {
        if (cipher1.charCodeAt(i) >= 97 && cipher1.charCodeAt(i) <= 122) {
        let textCode = (cipher1.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
        let unicode = String.fromCharCode(textCode);
        cifrarTexto += unicode;
        }
        }
  }
  }
  return cifrarTexto;
},

  //function cipherText() {
  //let cifrarInput = document.getElementById("cifrarTexto").value;
  //document.getElementById('deCipher').value = cifrarInput;
  //}


  //Función para decifrar
  decode: (deCipher,offset) =>  {
    //Ligar casilla de decifrado
    //let deCipher = document.getElementById("deCipher").value;

    //Ligar la casilla de offset (num. de casillas que se recorre)
    //let offset = parseInt(document.getElementById("offset").value);
    //donde se guarda el texto a cifrar
    let decifrarTexto = "";
    //guarda lo que se transforma a ascii
  let i = 0;
  //Argumentos para cifrar
  for (i= 0; i <= deCipher.length; i++) {
  //espacio
    if(deCipher.charCodeAt(i)===32) {

    let unicode2 = String.fromCharCode(32);
    decifrarTexto +=  unicode2;
    } else {
  //mayusculas
    if (deCipher.charCodeAt(i) >= 65 && deCipher.charCodeAt(i) <= 90) {
      let textCode2 = (deCipher.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
  //concatenar letras cifradas para formar la palabra
      let unicode2 = String.fromCharCode(textCode2);
      decifrarTexto += unicode2;
        }
  //minusculas
      else {
        if (deCipher.charCodeAt(i) >= 97 && deCipher.charCodeAt(i) <= 122) {
        let textCode2 = (deCipher.charCodeAt(i) + 97 + parseInt(offset)) % 26 + 97;
        let unicode2 = String.fromCharCode(textCode2);
        decifrarTexto += unicode2;
        }
        }
  }
}
  return decifrarTexto;
  }
}





//cipher.cifrar();
