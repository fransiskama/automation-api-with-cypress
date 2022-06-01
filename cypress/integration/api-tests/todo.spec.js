describe('get dashboard api testing', () => {
   let todoItem;
   it('fetches Todo items - GET', () => {
       cy.request('/').as('dashboard');
       cy.get('@dashboard').then(dashb => {
           expect(dashb.status).to.eq(200);
           assert.include(dashb.body, 'Welcome')
       });
   });
});