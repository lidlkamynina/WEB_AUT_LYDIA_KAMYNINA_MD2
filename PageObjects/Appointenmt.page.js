class AppointementPage {

    static get FacilityDropdown() {
        return cy.get('#combo_facility')
    }

    static get HospitalReadmissionCheckbox() {
        return cy.get('#chk_hospotal_readmission')
    }

    static get MedicaidRadioButton() {
        return cy.get('#radio_program_medicaid')
    }

    static get DatePicker() {
        return cy.get('#txt_visit_date')
    }

    static get Day30() {
        //select "30" from calendar widget
        return cy.get('.day').not('.old').contains('30')
    }

    static get CommentField() {
        return cy.get('#txt_comment')
    }
    static get BookAppointmentButton() {
        return cy.get('#btn-book-appointment')
    }

    static get BurgerMenu() {
        return cy.get('#menu-toggle')
    }

    static get Sidebar() {
        return cy.get('#sidebar-wrapper')
    }

    static get HistorySidebarButton() {
        return cy.get('a').contains('History')
    }
}

export default AppointementPage;