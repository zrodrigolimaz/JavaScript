//Ao criar uma função, você pode definir parâmetros. 
//Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
  }
  
  imc(80, 1.80) // 80 e 1.80 são os argumentos
  imc(60, 1.70) // 60 e 1.70 são os argumentos

  // Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também