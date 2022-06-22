let a =7;
let b =3;
console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

const c = 22;
const d = 45;
if (c > d) {
    console.log("'c' é maior que 'd'");
  } else {
    console.log("'d' é maior que 'c'"); };

const e = 85;
const f = 55;
const g =93;
if (e >f && e>g) { console.log("'e' é maior que 'f e g'")} else if (f>e && f>g) {console.log("'f' é maior que 'e e g'")} else {console.log("'g' é maior que 'e e f'")};

const h = -45;
if (h >0) {console.log("h = " + h + " é positivo")} else if (h<0) {console.log("h = " + h + " é negativo")} else {console.log("h = " + h + " é zero")};



const i = -9;
const j = 45;
const k = 45;
if (i>0 && j>0 && k>0) {

    if (i+j+k == 180) {console.log("true")} else {console.log("false")}
} 
else {console.log("Erro: angulo invalido")};






const peça = "cavalo"
switch (peça) {
    case "rei":
        console.log("1 casa em qualquer direção");
        break;
        case "rainha":
        console.log("Em qualquer direção e distância");
        break;
        case "bispo":
        console.log("Em diagonal");
        break;
        case "cavalo":
        console.log("Em L");
        break;
        case "torre":
        console.log("Reto");
        break;
        case "peão":
        console.log("1 casa reto, come em diagonal");
        break;
        default:
            console.log("Erro, peça invalida");
            break;
        }


