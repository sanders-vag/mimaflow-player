import { from } from "rxjs";
import { map, tap } from "rxjs/operators";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getToken", () => {
  Cypress.log({
    name: "getTokenFromSpotifyAPI"
  });
  const auth =
    "Basic MTE5Y2Y4MTI2MWVlNGFjNWI3YjQ5ZTA5M2M4ZmNlNzI6ZWEzZGRlMmMwMDdlNGVkYTliNGFkYTc1M2I0MzViYTM=";

  const options = {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    form: true, // we are submitting a regular form body
    body: {
      grant_type: "client_credentials"
    },
    headers: {
      Authorization: auth
    }
  };

  cy.request(options).then(resp => {
    localStorage.setItem("token", resp.body.access_token);
    return resp.body.access_token;
  });

  /*from(cy.request(options)).pipe(
    map(resp => resp.body.access_token),
    tap(token => localStorage.setItem("token", token))
  );*/
});
