
let nombre = "";
let apellido = "" ;
let edad = "";
  for (i =0; i<1; i ++){
      nombre += prompt ("ingrese su nombre");
      apellido += prompt ("ingrese su apellido");
      edad += prompt ("ingrese su edad");
  }
  console.log (  nombre + "   "+ apellido + "   "+ edad +  "  ");



  const numero = prompt("Escribe un número que sea divisible por 2 o por 3");
 for (let i = numero ; i<= 100; i ++){

    if(numero === null){
        alert (` No ingreso una instruccion coherente`)
        console.log ("No ingreso una instruccion coherente")
        break
      
    }
    
 
  else if (numero % 2 === 0 && numero % 3 === 0 ) {
      alert (`El numero ${i} es divisible por 2 y por 3`);
  console.log ("Es divisible por 2 y por 3");
  break
  
 
  } 
   else if ( numero %2 === 0 || numero === '' ){
    alert (`El numero ${i} es divisible por 2`);
    console.log ("Es divisible por 2");
    break
  }
  else if ( numero % 3 === 0 ){
    alert (`El numero ${i} es divisible por 3`);
    console.log ("Es divisible por 3");
    break
    
  }
  else if ( numero %2 !== 0 || numero %3 !== 0){
    alert (`El numero ${i} no es divisible por 2 ni por 3`);
    console.log ("No es divisible por 2 ni por 3");
    break
    
      
  }
  
 

 }