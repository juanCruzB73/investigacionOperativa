/* 
4. Calcular el Siglo

Se necesita una función que recibe un valor de año y devuelva el Siglo correspondiente.

    1705 --> 18
    1900 --> 19
    1601 --> 17

-verificar que sean 4 numeros
-verificar que solo sean numeros
-verificar que da el siglo correspondiente
-Año del primer siglo
-Año en el límite inferior del cambio de siglo

*/
let year1=2024;
let year2=50;
let year3=1700;
let year4="abcd"
let year5=12345;
function getCentury(year){
	if(onlyFourCharacters(year) && onlyNumbers(year)){
		 let century=Math.floor(year/100);
       		 let twoLastDigit=year%100;
	  	 twoLastDigit=String(twoLastDigit);
       		 if(twoLastDigit=="00" ||twoLastDigit=="0"){
       		          century--;
       		 }
	 	 century++
       		 return century;
	}else{
		return false
	}
}
function onlyFourCharacters(year){
	let sYear=String(year);
	return sYear.length<=4 && sYear.length > 0;
}
function onlyNumbers(year){
	return /[0-9]/.test(year);
}
test("los años deben tener 4 digitos",()=>{
	expect(getCentury(year5)).toBeFalsy();
});
test("los años solo deben tener numeros",()=>{
	expect(getCentury(year4)).toBeFalsy();
});
test("los años antes del 100 deben retornar siglo 1",()=>{
	expect(getCentury(year2)).toEqual(1);
})
test("los años que terminan en 00 deben pertecer al siglo pasado",()=>{
	expect(getCentury(year3)).toEqual(17);
});
test("la funcion debe devolver el siglo al que pertece el año",()=>{
	expect(getCentury(year1)).toEqual(21);
})
