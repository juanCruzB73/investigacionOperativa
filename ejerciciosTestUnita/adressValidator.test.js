/*
 6. Validador de Direcciones (Entrega en parte 2)

Una distribuidora necesita validar las direcciones enviadas por los clientes antes de enviar el repartidor.
Se les pide crear un validador de direcciones que vienen en formato JSON según los siguientes requerimientos:

    Una Dirección debe contener los siguientes campos:
    Field	Required	Type
    street	yes		string
    number	yes		number
    apartmentno	no		string
    zip_code	yes		number
    town	no		string
    city	yes		string
    province	yes		string


    Ejemplo
	"number": 359,
	"floor_apartment": "D3",
	"zip_code": 5500,
	"town": "",
	"city": "Mendoza",
	"province": "Mendoza"
}

  */
let requiredFields=(args)=>{
    let condition=false;
    let requireds=["street","number","zip_code","city","province"];
    filtered=requireds.filter((e)=>{return !(e in args)})
    if(filtered.length===0){
        condition=true;
    }
    return condition;
};
let veriyAdress=(adress)=>{
  let verifcation=false;
  if(requiredFields(adress)){
    if(
      (typeof adress.street === "string") &&
      (typeof adress.number === "number") &&
      (typeof adress.zip_code=== "number") &&
      (typeof adress.town === "string") &&
      (typeof adress.city === "string") &&
      (typeof adress.province === "string")
    ){
      verifcation=true;
    }
  }
  return verifcation;
}
//adress solo con campos obligatorios
let adress1=	{
  "street":"San Martin",
  "number": 359,
	"zip_code": 5500,
	"town": "",
	"city": "Mendoza",
	"province": "Mendoza"
}
//adress con campos obligatorios faltantes
let adress2={
  "number":123,
  "zip_code": 5501,
  "city":"godoy cruz",
  "province":"Mendoza",
}

//adress completa
let adress3=	{
  "street":"San Martin",
  "apartment":1,
  "town":"adas",
  "number": 359,
	"zip_code": 5500,
	"town": "",
	"city": "Mendoza",
	"province": "Mendoza"
}
let adress4=	{
  "street":1234,
  "apartment":1,
  "town":"adas",
  "number": 359,
	"zip_code": 5500,
	"town": "",
	"city": "Mendoza",
	"province": "Mendoza"
}
test("deben estar todos los campos obligatorios",()=>{
  expect(veriyAdress(adress1)).toBeTruthy();
  expect(veriyAdress(adress3)).toBeTruthy();
})
test("en caso de que no esten los campos arroja falso",()=>{
  expect(veriyAdress(adress2)).toBeFalsy();
});

test("en caso de estar los campos obligatorios pero no los no requeridos arroja verdadero",()=>{
  expect(veriyAdress(adress3)).toBeTruthy();
});

test("si los campos corresponden a el valor esperado arroja verdadero",()=>{
  expect(veriyAdress(adress1)).toBeTruthy();
})
test("si los campos no corresponden a los valores esperados arroja false",()=>{
  expect(veriyAdress(adress4)).toBeFalsy();
})




