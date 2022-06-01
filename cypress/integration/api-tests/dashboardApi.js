describe('get dashboard api testing', () => {
   it('check dashboard - GET', () => {
       cy.request('/').as('dashboard');
       cy.get('@dashboard').then(dashGet => {
           expect(dashGet.status).to.eq(200);
           assert.include(dashGet.body, 'Welcome')
       });
   });
});