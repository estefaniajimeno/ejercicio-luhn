

// Pregunto por el número de tarjeta
var card = prompt("Indique el numero de su tarjeta ");
  //creo una funcion
  function isValidCar(card){
// creo un array para guardar los numeros
  var credit = [];
// creo un for para recorrer el array y los leaa de atras hacia adelante
  for (var j = 0; j < card.length; j++) {
   var validate = card.pop();
   card.splice(j, 0, validate);
  }
  // luego hago otro for para leer las posiciones del array y creo una variable para multiplicar por dos
   for (var i =0; i<credit.lenght; i++) {
    var digit = credit[i]*2;
    // esta variable es para sumar
    var sum = 0;
     //este array es para guardar los numeros que son iguales y mayores a 10.
     var crypt=[];

         if(digit>=10){
        //este array es para sumar los numeros que son mayores o igual a 10.
        else if(crypt== crypt%10 +crypt 10 /10)

     }
        //esta sentencia sirve para leer los numeros que son distintos a 0 y son menores que 10
        else if (i % 2 !== 0 && digit<10){
         sum = sum +digit;
       }
       // con esta sentencia sumo todos los numeros del array convertido.
        else { sum = sum + credit[i];

       }
       // todos los numeros sumados deben dar 0.
        sum= 40%10===0;
      }


   return isValidCar(card);
