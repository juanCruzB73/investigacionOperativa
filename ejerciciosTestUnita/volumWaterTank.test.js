/*Volúmen de un Tanque de Agua

En una fábrica de tanques de agua en acero y inoxidable necesitan calcular de forma rápida el volúmen de los tanques. Dados el diámetro y la altura retornar el volúmen. La función debe cumplir con los siguientes requerimientos:

    El resultado debe ser expresado en litros.
    Los datos de entrada pueden ser en cm o en m.*/
let pi=Math.PI
let diametro1="1234cm";
let height1="4321cm"

let diametro2="1.234m";
let height2="4321cm";

let diametro3="1234";
let height3="4321"

let diametro4="12bc34";
let height4="432..1";


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
let getNumber=(value)=>{
	let aux=value.split('');
	newValue="";
	aux.forEach(e=>{
		if(/[^0-9]/.test(e)){
			return 
		}else{
			newValue+=e;
		}
	})
	return Number(newValue);
}
let convertVolume=(diametro,height,diametroMetric,heightMetric)=>{
	let radius=diametro/2;
	return (pi*(radius**2)*height); 
}
let hasLetterBtwNumbers=(value)=>{
	let aux=value.split('');
	newValue="";
	let thereIsLetter=false;
	for(let i=0;i<aux.length-1;i++){
		if(/[^0-9]/.test(aux[i])){
			if(/[0-9]/.test(aux[i+1])){
				thereIsLetter=true; 
			}
		}//123..4
		if(/[^0-9.]/.test(aux[i+1])){
			if(/[0-9]/.test(aux[i+2])){
                                thereIsLetter=true;
			}
		}
		i++;

	}

	return thereIsLetter;
};	
test("tiene cm o m al final",()=>{
	let a = containsCmOrM(diametro1);
	let b = containsCmOrM(diametro2);
	let c = containsCmOrM(diametro3);
	expect(metricSystemIsCorrect(a)).toBeTruthy();
	expect(metricSystemIsCorrect(b)).toBeTruthy();
	expect(metricSystemIsCorrect(c)).toBeFalsy();
})
test("calcular volumen",()=>{
	let diameterM = containsCmOrM(diametro1);
        let heightM = containsCmOrM(height1);
	let diameterN = getNumber(diametro1);
	let heightN = getNumber(height1);
	
	let diameterM2 = containsCmOrM(diametro2);
        let heightM2 = containsCmOrM(height2);
	let diameterN2 = getNumber(diametro2);
	let heightN2 = getNumber(height2);
	
	expect(convertVolume(diameterN,heightN,diameterM,diameterM)).toBeCloseTo(5167785357.6)
	expect(convertVolume(diameterN2,heightN2,diameterM2,diameterM2)).toBeCloseTo(5167785357.6)
		
})
test("no deben haber letras entre el número",()=>{
	let a=hasLetterBtwNumbers(diametro1);
	let b=hasLetterBtwNumbers(diametro4);
	let c=hasLetterBtwNumbers(height4);
	let d=hasLetterBtwNumbers(diametro2)
	expect(a).toBeFalsy();
	expect(b).toBeTruthy();
	expect(c).toBeTruthy();
	expect(d).toBeFalsy();
})
/*
-funcion para detectar si es cm, m o incorrecto
-funcion para convertir
-funcion para que no tenga letras en medio de los numeros
-fucion para no ingresar espacios
-funcion para no ingresar simbolos
-fucion para que tenga metros al final
*/

