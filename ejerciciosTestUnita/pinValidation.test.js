//PIN CODE
let pin=1234;
let pin2=12345;
let pin3=123456;
let pin4="abcdef";
let pin5="12_456";
let pin6="123 56"
let pin7=""
let containsLetters=(value)=>{
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
let validatePin=(pin)=>{
	if(!containsLetters(pin) && leng4or6(pin) && !containsSymbols(pin) && !containsSpace(pin)){
		return true;
	}
	else{
		return false;
	}
}	
test("pin debe tener 4 o 6 digitos",()=>{
	expect(validatePin(pin)).toBeTruthy();
	expect(validatePin(pin2)).toBeFalsy();
	expect(validatePin(pin3)).toBeTruthy();
})

test("no debe contener letras",()=>{
	expect(validatePin(pin)).toBeTruthy();
	expect(validatePin(pin4)).toBeFalsy();
})

test("el pin no puede contener signos",()=>{
	expect(validatePin(pin)).toBeTruthy();
	expect(validatePin(pin5)).toBeFalsy();
})	

test("el pin no puede tener espacios",()=>{
	expect(validatePin(pin)).toBeTruthy();
	expect(validatePin(pin6)).toBeFalsy();
})
test("que el pin no este vacio",()=>{
	expect(validatePin(pin7)).toBeFalsy();
})

