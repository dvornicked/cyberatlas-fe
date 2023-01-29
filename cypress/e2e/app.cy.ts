describe('App', () => {
	it('should display welcome message', () => {
		cy.visit('/')
		cy.get('h1').should('contain', 'Games')
	})
})

export {}
