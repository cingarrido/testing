const funciones = require('./calc.js');

describe("operaciones matematicas", ()=>{
    test("suma", ()=>{
        expect(funciones.suma(2,2)).toBe(4);
    })
    test("sumaMal", ()=>{
        expect(funciones.suma(2,6)).not.toBe(10);
    })
    test("resta", ()=>{
        expect(funciones.resta(4,2)).toBe(2);
    })
    test("restaMal", ()=>{
        expect(funciones.resta(8,2)).not.toBe(5);
    })
    test("division", ()=>{
        expect(funciones.division(8,2)).toBe(4);
    })
    test("divisionMal", ()=>{
        expect(funciones.division(0,98)).not.toBe(5);
    })
})