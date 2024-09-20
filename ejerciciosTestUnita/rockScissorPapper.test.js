let validation = (value) => {
    let options = ["piedra", "papel", "tijera"];
    return options.includes(value); 
}
let game = (value1, value2) => {
    if (!validation(value1) || !validation(value2)) {
        return "Valores inválidos";
    }

    if (value1 === value2) {
        return "empate"; 
    }

    if (
        (value1 === "piedra" && value2 === "tijera") ||
        (value1 === "tijera" && value2 === "papel") ||
        (value1 === "papel" && value2 === "piedra")
    ) {
        return "jugador 1 gana!";
    } else {
        return "jugador 2 gana!";
    }
}
let option1 = "piedra";
let option2 = "papel";
let option3 = "tijera";
let option4 = "tijeraa";

test("el valor ingresado debe ser piedra, papel o tijera", () => {
    expect(validation(option4)).toBeFalsy();
    expect(validation(option1)).toBeTruthy();
});

test("cuando las dos opciones son iguales retorna empate", () => {
    expect(game(option1, option1)).toBe("empate");
});

test("casos posibles para piedra", () => {
	expect(game(option3, option1)).toBe("jugador 2 gana!"); 
    expect(game(option1, option2)).toBe("jugador 2 gana!"); 
});

test("casos posible para papel", () => {
    expect(game(option2, option1)).toBe("jugador 1 gana!");
	expect(game(option3, option2)).toBe("jugador 1 gana!");
});

test("casos para tijera", () => {
    expect(game(option3, option1)).toBe("jugador 2 gana!");
    expect(game(option2, option3)).toBe("jugador 2 gana!");
});