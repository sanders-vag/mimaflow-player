const audios = [];

const shouldPlaySong = () => {
  cy.wrap(null).should(() => {
    audios.forEach(aud => expect(aud.currentTime).to.be.above(0));
  });
};

describe("Player tests", () => {
  it("should be able to play and pause a song", () => {
    expect(localStorage.getItem("token")).to.be.null;
    cy.getToken().then(token => {
      expect(localStorage.getItem("token")).to.be.eq(token);
    });
    cy.visit("/", {
      onBeforeLoad: win => {
        cy.stub(win, "Audio").callsFake(url => {
          const aud = new Audio(url);
          audios.push(aud);
          return aud;
        });
      }
    });

    cy.get("[data-cy=search-term]")
      .focus()
      .type("take on me")
      .should("have.value", "take on me");
    cy.get("[data-cy=search-btn]").click();
    cy.get(".total-tracks");
    cy.get(".fa-play-circle").should("have.length", 10);
    cy.get(".fa-play-circle")
      .filter(".show")
      .first()
      .click();
    cy.get(".fa-play-circle").should("have.length", 9);
    cy.get(".fa-pause-circle").should("have.length", 1);
    cy.wait(2000);
    shouldPlaySong();
    cy.wait(500);
    cy.get(".fa-pause-circle")
      .filter(".show")
      .first()
      .click();
  });
});
