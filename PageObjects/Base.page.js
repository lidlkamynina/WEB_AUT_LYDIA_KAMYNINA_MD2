
class BasePage {
    
    static get Visit() {
        cy.visit('/')
    }

    static get AppointmentButton() {
        return cy.get('#btn-make-appointment')
    }

    static get UsernameField() {
        return cy.get('#txt-username')
    }

    static get PasswordField() {
        return cy.get('#txt-password')
    }

    static get LoginButton() {``
        return cy.get('#btn-login')
    }
    

}
export default BasePage;