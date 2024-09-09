/*Volúmen de un Tanque de Agua

En una fábrica de tanques de agua en acero y inoxidable necesitan calcular de forma rápida el volúmen de los tanques. Dados el diámetro y la altura retornar el volúmen. La función debe cumplir con los siguientes requerimientos:

    El resultado debe ser expresado en litros.
    Los datos de entrada pueden ser en cm o en m.*/
let pi=Math.PI
let diametro1="1234cm";
let height1="4321cm"

let diametro2="1234m";
let height2="4321CM";

let diametro3="1234";
let height3="4321"

let volum4;
let volum5;

let containsCmOrM=(volum)=>{
	 let metricSystem='';
	 if(/[a-zA-Z]/.test(volum[volum.length-1]) && /[a-zA-Z]/.test(volum[volum.length-2])){
		 metricSystem+=volum[volum.length-2]+volum[volum.length-1];    
		 return metricSystem.toLowerCase();
	 }else if(/[a-zA-Z]/.test(volum[volum.length-1])){                  
		  metricSystem+=volum[volum.length-1]
		  return metricSystem.toLowerCase();
	 }else{
		  return false;			        }
}
let metricSystemIsCorrect=(value)=>{
	if(value=="CM"||value=="cm"||value=="m"||value=="M"){
		return true;
	}else{
		return false;
	}
}
//funcion para conseguir el numero y hacerlo numero
//
let convertVolume=(diametro,height,diametroMetric,heightMetric)=>{
	if(diametroMetric=="m"){
		diametro=diametro*100;
	}
	if(heightMetric=="m"){
		height=height*100
	}
	let radius=diametro/2;
	return (pi*radius**2*height); 
}
test("tiene cm o m al final",()=>{
	let a = containsCmOrM(diametro1);
	let b = containsCmOrM(diametro2);
	let c = containsCmOrM(diametro3);
	expect(metricSystemIsCorrect(a)).toBeTruthy();
	expect(metricSystemIsCorrect(b)).toBeTruthy();
	expect(metricSystemIsCorrect(c)).toBeFalsy();
})
test("calcular volumen",()=>{
	let a = containsCmOrM(diamtro1);
        let b = containsCmOrM(height1);
        //let c = containsCmOrM(diametro3);
	expect(convertVolume(diamtro1,height1,a,b))
})

/*
-funcion para detectar si es cm, m o incorrecto
-funcion para convertir
-funcion para que no tenga letras en medio de los numeros
-fucion para no ingresar espacios
-funcion para no ingresar simbolos
-fucion para que tenga metros al final
*/

