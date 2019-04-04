import { fetch as fetchPolyfill } from "whatwg-fetch";

describe("Search test suite", () => {
  before(() => {
    expect(localStorage.getItem("token")).to.be.null;
    cy.getToken().then(token => {
      expect(localStorage.getItem("token")).to.be.equal(token);
    });
  });

  it("should search songs", () => {
    cy.visit("http://localhost:3000");
    cy.get("#search-term") //1
      .focus() //2
      .type("take on me") //3
      .should("have.value", "take on me"); //4
    cy.get("button[type=submit]").click(); //5
    cy.get(".total-tracks") //6
      .should("be.visible") //7
      .and("contain", "10 results"); //8
    cy.contains("10 results"); //9
  });
});

describe("Search with mock data test suite", () => {
  let polyfill;

  before(() => {
    const polyfillUrl = "https://unpkg.com/unfetch/dist/unfetch.umd.js";
    cy.request(polyfillUrl).then(response => {
      polyfill = response.body;
    });
  });

  it("should search mock data", () => {
    cy.server();

    cy.route("GET", "https://api.spotify.com/v1/search**", "fx:songs");
    cy.visit("/", {
      onBeforeLoad: win => {
        delete win.fetch;
        // since the application code does not ship with a polyfill
        // load a polyfilled "fetch" from the test
        win.eval(polyfill);
        win.fetch = win.unfetch;
        localStorage.setItem("token", "dummy-token");
      }
    });

    cy.get("#search-term") //1
      .focus() //2
      .type("take on me") //3
      .should("have.value", "take on me"); //4
    cy.get("button[type=submit]").click(); //5
    cy.contains("3 results");
    cy.get(".fa-play-circle").should("have.length", 3);
  });
});
