describe("Search songs tests", () => {
  it("should search songs", () => {
    cy.getToken().then(token => {
      expect(localStorage.getItem("token")).to.be.eq(token);
    });
    cy.visit("/");
    cy.get("[data-cy=search-btn]").should("be.disabled");
    cy.get("[data-cy=clear-btn]").should("not.be.visible");
    cy.get(".no-tracks").should("be.visible");
    cy.get("[data-cy=search-term]")
      .focus()
      .type("wannabe")
      .should("have.value", "wannabe");
    cy.get("[data-cy=clear-btn]").should("be.visible");
    cy.get("[data-cy=search-btn]").should("be.enabled");
    cy.get(".no-tracks").should("be.visible");
    cy.get("[data-cy=search-btn]").click();
    cy.get(".no-tracks").should("not.be.visible");
    cy.get(".total-tracks")
      .should("be.visible")
      .and("contain", "10 results");
    cy.get(".fa-play-circle").should("have.length", 10);
  });

  it("should clear the search bar", () => {
    cy.getToken().then(token => {
      expect(localStorage.getItem("token")).to.be.eq(token);
    });
    cy.visit("/");
    cy.get("[data-cy=search-btn]").should("be.disabled");
    cy.get("[data-cy=clear-btn]").should("not.be.visible");
    cy.get("[data-cy=search-term]")
      .focus()
      .type("wannabe")
      .should("have.value", "wannabe")
      .blur();
    cy.get("[data-cy=clear-btn]").should("be.visible");
    cy.get("[data-cy=search-btn]").should("be.enabled");
    cy.get("[data-cy=clear-btn]").click({ force: true });
    cy.get("[data-cy=search-term]").should("have.value", "");
    cy.get("[data-cy=search-btn]").should("be.disabled");
  });
});
