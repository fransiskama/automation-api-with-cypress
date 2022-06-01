describe('success get login api testing', () => {
   it('check login - GET', () => {
       cy.request('/login').as('loginGet');
       cy.get('@loginGet').then(logGet => {
           expect(logGet.status).to.eq(200);
           assert.include(logGet.body, 'Username');
           assert.include(logGet.body, 'Password')
       });
   });
});

describe('success get login api testing after login', () => {
   it('check login - GET', () => {
       cy.request('POST', '/login?username=root&password=root123').as('loginPost');
       cy.request('/login').as('loginGet');
       cy.get('@loginGet').then(logGet => {
           expect(logGet.status).to.eq(200);
           assert.include(logGet.body, 'Welcome')
       });
   });
});