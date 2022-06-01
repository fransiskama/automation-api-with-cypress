describe('success post login api testing', () => {
   it('check login success - POST', () => {
       cy.request('POST', '/login?username=root&password=root123').as('loginPost');
       cy.get('@loginPost').then(logPost => {
           expect(logPost.status).to.eq(200);
           assert.include(logPost.body, 'Welcome')
       });
       cy.getCookie('username').should('have.property', 'value', 'root')
   });
});
describe('failed post login api testing wrong password', () => {
   it('check login failed wrong password - POST', () => {
       cy.request({method: 'POST', url: '/login?username=a&password=a',failOnStatusCode:false}).as('loginPostWrongPass');
       cy.get('@loginPostWrongPass').then(logPostWrongPass => {
           expect(logPostWrongPass.status).to.eq(401)
           assert.include(logPostWrongPass.body, 'wrong')
       });
   });
});