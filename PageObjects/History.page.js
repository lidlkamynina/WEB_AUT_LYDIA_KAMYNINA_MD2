class HistoryPage {

    static get NoAppointmentText() {
        return cy.get('p').contains('No appointment')
    }
}

export default HistoryPage;