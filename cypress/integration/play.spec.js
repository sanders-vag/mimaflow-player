let audio;

const shouldPlaySong = () => {
  cy.wrap(null).should(() => {
    expect(audio.currentTime).to.be.above(0);
  });
};

const stubAudio = () => {
  cy.window().then(win => {
    cy.stub(win, "Audio").callsFake(url => {
      const aud = new Audio(url);
      audio = aud;
      return aud;
    });
  });
};

describe("Player tests", () => {
  before(() => {
    expect(localStorage.getItem("token")).to.be.null;
    cy.getToken().then(token => {
      expect(localStorage.getItem("token")).to.be.equal(token);
    });
  });

  it("should be able to play and pause a song", () => {
    
    cy.visit("/");
    stubAudio();
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
    expect(audio).to.be.defined;
    cy.get(".fa-play-circle").should("have.length", 9);
    cy.get(".fa-pause-circle").should("have.length", 1);
    cy.wait(2000);
    shouldPlaySong();
    cy.get(".fa-pause-circle")
      .filter(".show")
      .first()
      .click();
  });
});
