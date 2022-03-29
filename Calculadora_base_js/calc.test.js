const calc = require('./calc');

describe('sumar', () => {
    test('Primera suma', () => {
        expect(calc.suma(5,6)).toBe(11);
    })
    test('Segunda suma', () => {
        expect(calc.suma(0,0)).toBe(0);
    })
    test('Tercera suma', () => {
        expect(calc.suma('a','b')).toBe(0);
    })
})
describe('restar', () => {
    test('Primera resta', () => {
        expect(calc.resta(5,6)).toBe(-1);
    })
    test('Segunda resta', () => {
        expect(calc.resta(3,2)).toBe(1);
    })
    test('Tercera resta', () => {
        expect(calc.resta('a','b')).toBe(0);
    })
})
describe('multiplicar', () => {
    test('Primera multiplicación', () => {
        expect(calc.multiplicacion(5,6)).toBe(30);
    })
    test('Segunda multiplicacion', () => {
        expect(calc.multiplicacion(3,2)).toBe(6);
    })
    test('Tercera multiplicación', () => {
        expect(calc.multiplicacion('a','b')).toBe(0);
    })
})
describe('división', () => {
    test('Primera división', () => {
        expect(calc.division(10,2)).toBe(5);
    })
    test('Segunda división', () => {
        expect(calc.division(1,1)).toBe(1);
    })
    test('Tercera división', () => {
        expect(calc.division('a','b')).toBe(0);
    })
})