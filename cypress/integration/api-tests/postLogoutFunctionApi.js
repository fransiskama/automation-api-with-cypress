describe('post logout api testing', () => {
   it('check logout - POST', () => {
       cy.request('POST', 'http://qa-interview.srcli.xyz/logout').as('logoutPost');
       cy.get('@logoutPost').then(logoutPost => {
           expect(logoutPost.status).to.eq(200);
           assert.include(logoutPost.body, 'Welcome')
       });
   });
});

describe('post logout api testing after login', () => {
   it('check logout - POST', () => {
       cy.request('POST', '/login?username=root&password=root123').as('loginPost');
       cy.request('POST', 'http://qa-interview.srcli.xyz/logout').as('logoutPost');
       cy.get('@logoutPost').then(logoutPost => {
           expect(logoutPost.status).to.eq(200);
           assert.include(logoutPost.body, 'Welcome')
       });
   });
});