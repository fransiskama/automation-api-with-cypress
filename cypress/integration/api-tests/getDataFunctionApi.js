describe('get data api testing without login', () => {
   let dataStep;
   it('check data without login - GET', () => {
       cy.request('GET', '/data').as('dataGet');
       cy.get('@dataGet').then(datGet => {
           expect(datGet.status).to.eq(200);
           assert.include(datGet.body, 'Username')
           assert.include(datGet.body, 'Password')
       });
   });
});


describe('get data api testing with login', () => {
   it('check data with login - GET', () => {
       cy.request('POST', '/login?username=root&password=root123').as('loginPost');
       cy.request('GET', '/data').as('dataGet');
       cy.get('@dataGet').then(datGet => {
           expect(datGet.status).to.eq(200);
           assert.include(datGet.body, 'Pemasukan');
           assert.include(datGet.body, 'Pengeluaran')
       });
   });
});