//reference faz o cypress buscar os tipos do cypress, ao utilizare digitar comando do cypress aparecerá, assim como funcionalidade
/// <reference types="Cypress" />
//describe - é minha switch de teste
//it - cada teste é agregado em um bloco it(teste case)

describe("Central de Atendimento ao Cliente TAT", function () {
  it("verifica o título da aplicação", function () {
    cy.visit("./src/index.html");

    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
});
