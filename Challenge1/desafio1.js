const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnCriptografar() {
	const textoEncriptado = criptografar(inputTexto.value);
	mensagem.style.backgroundImage="none";
	mensagem.value = textoCriptografado;
	inputTexto.value = " ";
}



function btnDescriptografar() {
	const textoDescriptado = descriptografar(inputTexto.value);
	mensagem.style.backgroundImage="none";
	mensagem.value = textoDescriptografado;
	inputTexto.value = " ";
	inputTexto.style.backgroundImage="url(bonequinho.png)"
}



function criptografar(inputTexto) {

	var arrayInputTexto = Array.from(inputTexto)
	var texto2 =[]


	
	for(i = 0; i < arrayInputTexto.length; i++) {
		if (arrayInputTexto[i] == 'a') {
			texto2.push('ai');
		} else if (arrayInputTexto[i] == 'e') {
			texto2.push('enter');
		} else if (arrayInputTexto[i] == 'i') {
			texto2.push('imes');
		} else if (arrayInputTexto[i] == 'o') {
			texto2.push('ober');
		} else if (arrayInputTexto[i] == 'u') {
			texto2.push('ufat');
		} else {
			texto2.push(arrayInputTexto[i]);
		}
		}	
	textoCriptografado = texto2.join('');
	return textoCriptografado;
	}



	function descriptografar(inputTexto) {

	arrayOutputTexto = Array.from(inputTexto)
	
	texto3 =[]
			
	for(n = 0; n < arrayOutputTexto.length; n++) {
	if (arrayOutputTexto[n] == 'a') {
		texto3.push(arrayOutputTexto[n]);
		n = n+1;
		} else if (arrayOutputTexto[n] == 'e') {
		texto3.push(arrayOutputTexto[n]);
		n = n + 4
		} else if (arrayOutputTexto[n] == 'i') {
		texto3.push(arrayOutputTexto[n]);
		n = n + 3
		} else if (arrayOutputTexto[n] == 'o') {
		texto3.push(arrayOutputTexto[n]);
		n = n + 3
		} else if (arrayOutputTexto[n] == 'u') {
		texto3.push(arrayOutputTexto[n]);
		n = n + 3
		} else {
		texto3.push(arrayOutputTexto[n]);
		}
	}
	textoDescriptografado = texto3.join('');
	return textoDescriptografado
	}
 


function copiar() {
		var textoCopiado = document.getElementById("txtCripto").value;
		navigator.clipboard.writeText(textoCopiado);
		alert("texto copiado é : " + textoCopiado);
		mensagem.value= " ";
		mensagem.style.backgroundImage="url(bonequinho.png)"
}