var num1 = 10;//prompt("Ingrese un Numero");
var num2 =  30;//prompt("Ingrese otro Numero");
var num3 = 5 ; //prompt("Ups Falta otro Numero :>");
var min  = "MINIMO ";
var max  = "MAXIMO ";
if(num1<num2&&num1<num3){
  document.write ( min +num1);

}
  if(num2<num1&&num2<num3){
    document.write( min +num2)

}if(num3<num1&&num3<num2){
  document.write(min + num3)
}if(num1>num2&&num1>num3){
document.write(max + num1)
    }if(num2>num1&&num2>num3){
      document.write(max + num2)
    }if(num3>num2&&num3>num1){
    document.write(max + num3)
    }
