//Ligar la casilla de cifrar
let str = document.getElementById("cipher");
//Ligar la casilla de offset (num. de casillas que se recorre)
let offset1 = document.getElementById("offset");
//Ligar casilla de decifrado
let decipherText = document.getElementById("cipher");

const cifrarTexto = () => {
  let cipher1 = str.value;
  let offset = parseInt(offset1.value);
console.log(offset);
  document.getElementById("result").value = cipher.encode(cipher1,offset);
  //let introduccion = document.getElementById('Introduccion');
  //let mensaje = document.getElementById('Resultado');
//  introduccion.style.display = 'none';
  //mensaje.style.display = 'block';
};


const decifrarTexto = () => {
  let deCipher = decipherText.value;
  let offset = parseInt(offset1.value);

  document.getElementById('result').value = cipher.decode(deCipher,offset);
  //let introduccion = document.getElementById('Introduccion');
  //let mensaje = document.getElementById('Resultado');
  //introduccion.style.display = 'none';
  //mensaje.style.display = 'block';
};
//cipher.createCipherWithOffset : (offset) => ({
  //encode(cipher1) => {
    //return cipher.encode(offset, cipher1)
  //},
  //decode(deCipher) => {
    //return cipher.decode(offset, deCipher)
  //}
