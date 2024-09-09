//PIN CODE
let pin=1234;
let pin2=12345;
let pin3=123456;
let pin4="abcdef";
let pin5="12_456";
let pin6="123 56"
let pin7=""
let hasLetters=(value)=>{
	return /[a-zA-Z]/.test(value)
}

let leng4or6=(value)=>{	
	value=String(value);
	return [4,6].includes(value.length)
}
let containsSymbols=(value)=> {
    return /[^a-zA-Z0-9 ]/.test(value);
}
let containsSpace=(value)=>{
	return /[ ]/.test(value);
}
test("pin debe tener 4 o 6 digitos",()=>{
	expect(leng4or6(pin)).toBeTruthy();
	expect(leng4or6(pin2)).toBeFalsy();
	expect(leng4or6(pin3)).toBeTruthy();
})

test("no debe contener letras",()=>{
	expect(hasLetters(pin)).toBeFalsy();
	expect(hasLetters(pin4)).toBeTruthy();
})

test("el pin no puede contener signos",()=>{
	expect(containsSymbols(pin)).toBeFalsy();
	expect(containsSymbols(pin5)).toBeTruthy();
})

test("el pin no puede tener espacios",()=>{
	expect(containsSpace(pin)).toBeFalsy();
	expect(containsSpace(pin6)).toBeTruthy();
})
test("que el pin no este vacio",()=>{
	expect(leng4or6(pin7)).toBeFalsy();
})

