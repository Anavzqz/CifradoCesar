window.cipher = {
  //Función para cifrar texto
  encode: (cipher1,offset) => {
    //donde se guarda el texto a cifrar
    let cifrarTexto = "";
    //guarda lo que se transforma a ascii
  let i = 0;
  //Argumentos para cifrar
  for (i = 0; i < cipher1.length; i++) {
    //espacio y signos
  if(cipher1.charCodeAt(i) >= 32 && cipher1.charCodeAt(i) <= 64) {

      let textCode = (cipher1.charCodeAt(i));
      let unicode = String.fromCharCode(textCode);
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

  //Función para decifrar
  decode: (deCipher,offset) =>  {

    //donde se guarda el texto a decifrar
    let decifrarTexto = "";
    //guarda lo que se transforma a ascii
  let i = 0;
  //Argumentos para decifrar
  for (i= 0; i <= deCipher.length; i++) {
    //espacio y signos
  if(deCipher.charCodeAt(i) >= 32 && deCipher.charCodeAt(i) <= 64) {
//Declarar la variable para asignar un valor de ASCII al signo
      let textCode2 = (deCipher.charCodeAt(i));
  //concatenar los signos cifrados para formar la palabra
      let unicode2 = String.fromCharCode(textCode2);
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
