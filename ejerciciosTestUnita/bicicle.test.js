/*
Paseo en bicicleta (Entrega en parte 2)
Franco sabe que es importante mantenerse hidratado, toma 0,5 litros de agua por hora de pedaleo. 
Dado el timpo Franco está pedaleando, calcular la cantidad de agua, en litros, que Franco va a tomar.

Redondea el valor al número mas bajo.
Ejemplos:
Tiempo = 3 --> litros = 1
Tiempo = 6.7 --> litros = 3
Tiempo = 11.8 --> litros = 5

tests:

pass a number
correct results odd numbers
redondear correctamente hacia abajo
tiempor igual a 0
decimales menores a 1

*/
let mustBenumber=(value)=>{
   return typeof value == "number";
};
let calculateWater=(value)=>{
    let result = 0;
    if(mustBenumber(value)){
    if(value===1){
        result=0.5;
        return result
        }
        result=Math.floor(value*0.5);
        return result
    }
    return false;
}
const time1="234";
const time2=234;
const time3=0.4;
const time4=1;
const time5=34.2
const time6=242423
test("debe ser un numero",()=>{
    expect(calculateWater(time1)).toBeFalsy();
    expect(calculateWater(time2)).toBeTruthy();
})

test("las horas menores a 1 deben retornar 0",()=>{
    expect(calculateWater(time3)).toEqual(0);
})

test("cuando pasa una hora debe devolver 0.5",()=>{
    expect(calculateWater(time4)).toEqual(0.5);
})

test("probando la funcion con distintos valores",()=>{
    expect(calculateWater(34.2)).toEqual(17)
    expect(calculateWater(242423)).toEqual(121211)
})