const altura = 1.71
const peso = 120

console.log("Calculadora de IMC \n");
console.log(`Altura: ${altura} m`);
console.log(`peso: ${peso} kg \n`);

var resultado = (peso / (altura * altura)).toFixed(2)

if(resultado < 18){
    console.log(`IMC: ${resultado}`);
    console.log("Classificação: Magreza");
    console.log("Obesidade grau 0 \n");

}else if(resultado >= 18.5 && resultado <= 24.9){
    console.log(`IMC: ${resultado}`);
    console.log("Classificação: Normal");
    console.log("Obesidade grau 0 \n");

}else if(resultado >= 25.0 && resultado <= 29.9){
    console.log(`IMC: ${resultado}`);
    console.log("Classificação: Sobrepeso");
    console.log("Obesidade grau 1 \n");

}else if(resultado >= 30.0 && resultado <= 39.9){
    console.log(`IMC: ${resultado}`);
    console.log("Classificação: Obesidade");
    console.log("Obesidade grau 2 \n");

}else if(resultado >= 40.0){
    console.log(`IMC: ${resultado}`);
    console.log("Classificação: Obesidade grave");
    console.log("Obesidade grau 3 \n");
}