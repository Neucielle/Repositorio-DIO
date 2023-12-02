function verificaPalindromo(str) {

    str = str.replace(/ /g, "").toLowerCase();
4
    return str === str.split("").reverse().join("");
  }

  let palavra = "ovo";
  let resultado = verificaPalindromo(palavra);
  console.log(resultado); 