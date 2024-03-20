const texto = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const vogais = ["a", "e", "i", "o", "u"];
const chaves = ["at", "enter", "imes", "ober", "ufa"];

function encriptar(texto) {
  textoEnMinusculas = texto.toLowerCase();
  for (let i = 0; i < vogais.length; i++) {
    if (textoEnMinusculas.includes(vogais[i])) {
      textoEnMinusculas = textoEnMinusculas.replaceAll(vogais[i], chaves[i]);
    }
  }
  return textoEnMinusculas;
}

function btnEncriptar() {
  const textoParaEncriptar = encriptar(texto.value);
  mensagem.value = textoParaEncriptar;
  document.getElementById("encriptado").style.backgroundImage = "none";
  texto.value = "";
}

function desencriptar(texto) {
  textoEnMinusculas = texto.toLowerCase();
  for (let i = 0; i < chaves.length; i++) {
    if (textoEnMinusculas.includes(chaves[i])) {
      textoEnMinusculas = textoEnMinusculas.replaceAll(chaves[i], vogais[i]);
    }
  }
  return textoEnMinusculas;
}

function btnDesencriptar() {
  const textoParaDesencriptar = desencriptar(texto.value);
  mensagem.value = textoParaDesencriptar;
  document.getElementById("encriptado").style.backgroundImage = "none";
  texto.value = "";
}

function btnCopiar() {
  navigator.clipboard.writeText(mensagem.value).then(() => {
    alert("Copiado para a Área de transferência");
    mensagem.value = "";
    document.getElementById("encriptado").style.backgroundImage =
      "url(/assets/boneco.png)";
  });
}