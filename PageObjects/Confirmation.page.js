class ConfirmationPage {

    static get FacilityText() {
        return cy.get('p#facility')
    }

    static get HospitalReadmissionText() {
        return cy.get('#hospital_readmission')
    }

    static get ProgramText() {
        return cy.get('#program')
    }

    static get VisitDateText() {
        return cy.get('#visit_date')
    }

    static get CommentText() {
        return cy.get('#comment')
    }
}

export default ConfirmationPage;