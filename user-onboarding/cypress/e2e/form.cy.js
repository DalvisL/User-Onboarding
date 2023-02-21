describe('Form', () => {
    const firtstNameInput = () => cy.get('input[name="first_name"]');
    const lastNameInput = () => cy.get('input[name="last_name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsCheckbox = () => cy.get('input[name="terms"]');
    const submitButton = () => cy.get('button');
    const error = () => cy.get('.error');

    describe('Name', () => {
        it('should be able to type in first name', () => {
            cy.visit('http://localhost:3000');
            firtstNameInput().type('John')
                .should('have.value', 'John')
        })
        it('should be able to type in last name', () => {
            cy.visit('http://localhost:3000');
            lastNameInput().type('Doe')
                .should('have.value', 'Doe')
        })
        it('should be able to type in both names', () => {
            cy.visit('http://localhost:3000');
            firtstNameInput().type('John')
                .should('have.value', 'John')
            lastNameInput().type('Doe')
                .should('have.value', 'Doe')
        })
    })
    
    describe('Email', () => { 
        it('should be able to type in email correctly', () => {
            cy.visit('http://localhost:3000');
            emailInput().type('johndoe@email.com')
                .should('have.value', 'johndoe@email.com')
        })
    })

    describe('Password', () => {
        it('should be able to type in password correctly', () => {
            cy.visit('http://localhost:3000');
            passwordInput().type('password')
                .should('have.value', 'password')
        })
    })
    
    describe('Terms', () => {
        it('should be able to check terms', () => {
            cy.visit('http://localhost:3000');
            termsCheckbox().check()
                .should('be.checked')
        })
        it('should be able to uncheck terms', () => {
            cy.visit('http://localhost:3000');
            termsCheckbox().check()
                .should('be.checked')
            termsCheckbox().uncheck()
                .should('not.be.checked')
        })
    })

    describe('E2E Submission', () => {
        it('should be able to submit form', () => {
            cy.visit('http://localhost:3000');
            firtstNameInput().type('John')
                .should('have.value', 'John')
            lastNameInput().type('Doe')
                .should('have.value', 'Doe')
            emailInput().type('johndoe@email.com')
                .should('have.value', 'johndoe@email.com')
            passwordInput().type('password')
                .should('have.value', 'password')
            termsCheckbox().check()
                .should('be.checked')
            submitButton().click()
        })
    })
    describe('Check for form validation', () => {
        it('should be unable to submit form if a field is missing', () => {
            // This test should fail
            cy.visit('http://localhost:3000');
            lastNameInput().type('Doe')
            emailInput().type('johndoe@email.com')
            passwordInput().type('password')
            termsCheckbox().check()
            submitButton().should('be.disabled')
        })
        it('error should be displayed if there is a missing field', () => {
            cy.visit('http://localhost:3000');
            firtstNameInput().type('John').clear()
            lastNameInput().type('Doe')
            emailInput().type('johndoe@email.com')
            passwordInput().type('password')
            termsCheckbox().check()
            error().should('be.visible')
        })
    })
})