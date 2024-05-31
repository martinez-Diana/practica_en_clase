function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) {
        const imc = peso / (altura * altura);
        document.getElementById("resultado").textContent = imc.toFixed(2);

        if (imc < 18.5) {
            document.getElementById("lectura").textContent = "Bajo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById("lectura").textContent = "Adecuado";
        } else if (imc >= 25 && imc <= 29.9) {
            document.getElementById("lectura").textContent = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
            document.getElementById("lectura").textContent = "Obesidad grado 1";
        } else if (imc >= 35 && imc <= 39.9) {
            document.getElementById("lectura").textContent = "Obesidad grado 2";
        }  
        else if (imc >40) {
            document.getElementById("lectura").textContent = "Obesidad grado 3";
        }       
        } else {
        alert("Ingresa valores válidos para peso y altura.");
        }
}
