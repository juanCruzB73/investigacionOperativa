/*Volúmen de un Tanque de Agua

En una fábrica de tanques de agua en acero y inoxidable necesitan calcular de forma rápida el volúmen de los tanques. Dados el diámetro y la altura retornar el volúmen. La función debe cumplir con los siguientes requerimientos:

    El resultado debe ser expresado en litros.
    Los datos de entrada pueden ser en cm o en m.*/
let pi=Math.PI

//correct variables in cm
let diametro1="1234cm";
let height1="4321cm"

//correct variable in m
let diametro2="12.34m";
let height2="4321cm";

//incorrect variables no cm or m
let diametro3="1234";
let height3="4321";
/*
 const volumen_metros_cubicos = pi * Math.pow(radio, 2) * height;
 const volumen_litros = volumen_metros_cubicos * 1000;

 
  */

//incrorect variable letter betwen number
let diametro4="12bc34";
let height4="432cm1";

//incorrect variable with symbols
let diametro5="123&/.";
let height5="12)&4";

//incorrect variables with spaces
let diametro6="123 1";
let height6="321 12";

let getCmOrM=(volum)=>{
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
	if(value=="cm"||value=="m"){
		return true;
	}else{
		return false;
	}
}

let getNumber=(value)=>{
	let aux=value.split('');
	newValue="";
	aux.forEach(e=>{
		if(/[^0-9.]/.test(e)){
			return 
		}else{
			newValue+=e;
		}
	})
	return Number(newValue);
}
let hasLetterBtwNumbers=(value)=>{
	let aux=value.split('');
	newValue="";
	let thereIsLetter=false;
	for(let i=0;i<aux.length-1;i++){
		if(/[^0-9.]/.test(aux[i])){
			if(/[0-9]/.test(aux[i+1])){
				thereIsLetter=true; 
			}
		}//"12..34m"
		if(/[^0-9]/.test(aux[i+1])){
			if(/[0-9]/.test(aux[i+2])){
                                thereIsLetter=true;
			}
		}
		i++;
	}
	return thereIsLetter;
};
let containSymbols=(value)=>{
	return /[^a-zA-Z0-9.]/.test(value);
};
let containSpace=(value)=>{
        return /[ ]/.test(value);
}

let convertVolume=(diametro,height)=>{
	let hasDiameterLetters=hasLetterBtwNumbers(diametro);
	let hasHeightLetters=hasLetterBtwNumbers(height);

	if(!containSymbols(diametro) && !containSymbols(height) && !containSpace(diametro) && !containSpace(height) && !hasDiameterLetters && !hasHeightLetters){
		let metricDiametro=getCmOrM(diametro);
		let metricHeight=getCmOrM(height);
		if(metricSystemIsCorrect(metricDiametro) && metricSystemIsCorrect(metricHeight)){
			diametro=getNumber(diametro);
			height=getNumber(height);
			if(metricDiametro == 'cm'){
				diametro=diametro/100;;
			}
			if(metricHeight == "cm"){
				height=height/100
			}
			const radio = diametro / 2;
   			const volumen_metros_cubicos = pi * Math.pow(radio, 2) * height;
   			const volumen_litros = volumen_metros_cubicos * 1000;
   			return volumen_litros;

		}else{
			return false;
		}
	}else{
		return false;
	} 
}
test("tiene cm o m al final",()=>{
	expect(convertVolume(diametro3,height3)).toBeFalsy();
})
test("calcular volumen",()=>{

	expect(convertVolume(diametro1,height1)).toBeCloseTo(5167785.36 );
	expect(convertVolume(diametro2,height2)).toBeCloseTo(5167785.36 );
})
test("no deben haber letras entre el número",()=>{
	expect(convertVolume(diametro4,height4)).toBeFalsy();
})
test("no de debe contener simbolos",()=>{
	expect(convertVolume(diametro5,height5)).toBeFalsy();
//	expect(hasLetterBtwNumbers(diametro2)).toBeFalsy();
});
test("no debe tener espacios",()=>{
	expect(convertVolume(diametro6,height6)).toBeFalsy();
})
