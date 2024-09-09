/*Volúmen de un Tanque de Agua

En una fábrica de tanques de agua en acero y inoxidable necesitan calcular de forma rápida el volúmen de los tanques. Dados el diámetro y la altura retornar el volúmen. La función debe cumplir con los siguientes requerimientos:

    El resultado debe ser expresado en litros.
    Los datos de entrada pueden ser en cm o en m.*/

//v=pi*r2*h
//r=diametro/2
//1l=1000cm3
//1l=0.001m

let pi=Math.PI
let volum1="123456cm";
let volum2="123456m";
let volum3="123456";
let volum4;
let volum5;

let containsCmOrM=(volum)=>{
	    let metricSystem='';
	    if(/[a-zA-Z]/.test(volum[volum.length-1]) && /[a-zA-Z]/.test(volum[volum.length-2])){
		    metricSystem+=volum[volum.length-2]+volum[volum.length-1];    
		    return metricSystem;
	    }else if(/[a-zA-Z]/.test(volum[volum.length-1])){                  
		    metricSystem+=volum[volum.length-1]
		    return metricSystem;
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

test("tiene cm o m al final",()=>{
	let a = containsCmOrM(volum1);
	let b = containsCmOrM(volum2);
	let c = containsCmOrM(volum3);
	expect(metricSystemIsCorrect(a)).toBeTruthy();
	expect(metricSystemIsCorrect(b)).toBeTruthy();
	expect(metricSystemIsCorrect(c)).toBeFalsy();
})


/*
-funcion para detectar si es cm, m o incorrecto
-funcion para convertir
-funcion para que no tenga letras en medio de los numeros
-fucion para no ingresar espacios
-funcion para no ingresar simbolos
-fucion para que tenga metros al final
*/

