

describe('MAİN PAGE TESTS', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('when main button is clicked, it navigates to form page ', () => {
  cy.get('[data-testid="order-btn"]').click()
  cy.url().should('include', '/form')

})
it("when slider buttons are clicked, each button navigates to form page", () => {
  cy.get('[data-testid="slider-order-btn"]').then(($buttons) => {
    const total = $buttons.length;

    for (let i = 0; i < total; i++) {
      cy.get('[data-testid="slider-order-btn"]').eq(i).click();
      cy.location("pathname").should("eq", "/form");
      cy.visit("http://localhost:5173");
    }
  });
});

})


describe("FORM PAGE TESTS", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/form");
  });

 it("check boxs checks", () => {
   cy.get('[type="checkbox"]').not('[disabled]').check()
   cy.get('[type="checkbox"]').not('[disabled]').should('be.checked')
});

it("radio boxs checks", () => {
   cy.get('input[name="radio"]').not('[disabled]').check()
   cy.get('input[name="radio"]').not('[disabled]').should('be.checked')
});

it("select boxs checks",()=>{
cy.get('select').should('have.value', null);
cy.get('select').select('Kalın').should('have.value', 'kalin')
cy.get('select').select('Orta').should('have.value', 'orta')
cy.get('select').select('İnce').should('have.value', 'ince')
})


it("name input contains at least 3 char", () => {
  
  cy.get('input[name="name"]').type('ab');
  cy.get('[data-testid="name-feedback"]')
    .should('be.visible')
    .and('contain', 'İsim girmek zorunludur');


  cy.get('input[name="name"]').type('c');
  cy.get('[data-testid="name-feedback"]')
    .should('not.exist');

});

it("counter display can't take nagative value", () => {
cy.get('[data-testid="count-minus"]').click()
cy.get('[data-testid="count-display"]').should('have.text',0);
cy.get('[data-testid="count-plus"]').click()
cy.get('[data-testid="count-display"]').should('have.text',1);
})


it("submit button is enabled after checked all the form elemets", () => {
cy.get('input[name="radio"]').not('[disabled]').check("S")
cy.get('select').select('Kalın')
  cy.get('input[type="checkbox"]')
    .then(($boxes) => {
      cy.wrap($boxes.slice(0, 4)).check()
    })
 cy.get('input[name="name"]').type('abc');
 cy.get('[data-testid="count-plus"]').click()
 cy.get('button[type="submit"]').eq(0).should('not.be.disabled').click()

})
it("sumbit button changed on a mobile display", () => {
 cy.viewport(500, Cypress.config('viewportHeight'))
 cy.get('button[type="submit"]').eq(0).should('not.be.visible')
 cy.get('button[type="submit"]').eq(1).should('be.visible')
})

});
