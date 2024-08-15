describe("Hero component", () => {
  it("should allow user to input a destination", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[placeholder="Para onde você vai?"]').type("Rio de Janeiro");
    cy.contains("Continuar").click();
  });
});
