/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test("Testar CPF Válido", () => {
  var resultado = validarCPF("16576790040");
  
  expect(resultado).toBe(true)
})

test("Testar CPF Inválido", () => {
  var resultado = validarCPF("CPF_INVALIDO");
  
  expect(resultado).toBe(false)
})