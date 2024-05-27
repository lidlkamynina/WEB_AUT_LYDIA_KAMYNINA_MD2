import BasePage from "../PageObjects/Base.page";
import AppointementPage from "../PageObjects/Appointenmt.page";
import ConfirmationPage from "../PageObjects/Confirmation.page";
import HistoryPage from "../PageObjects/History.page";


describe('md2', () => {
  context('Actions', () => {
    beforeEach(() => {
      BasePage.Visit
    })

    it('Make an appointment', () => {
      //log in to the appointment page
      BasePage.AppointmentButton.click()
      BasePage.UsernameField.type('John Doe')
      BasePage.PasswordField.type('ThisIsNotAPassword')
      BasePage.LoginButton.click()

      //set required values
      AppointementPage.FacilityDropdown.select('Seoul CURA Healthcare Center')
      AppointementPage.HospitalReadmissionCheckbox.click()
      AppointementPage.MedicaidRadioButton.click()
      AppointementPage.DatePicker.click()
      AppointementPage.Day30.click()
      AppointementPage.CommentField.type('CURA Healthcare Service')
      AppointementPage.BookAppointmentButton.click()
      //validate values
      ConfirmationPage.FacilityText.should('have.text', 'Seoul CURA Healthcare Center')
      ConfirmationPage.HospitalReadmissionText.should('have.text', 'Yes')
      ConfirmationPage.ProgramText.should('have.text', 'Medicaid')
      ConfirmationPage.VisitDateText.should('have.text', '30/06/2024')
      ConfirmationPage.CommentText.should('have.text', 'CURA Healthcare Service')

    })

    it('Appointment history empty', () => {
      BasePage.AppointmentButton.click()
      BasePage.UsernameField.type('John Doe')
      BasePage.PasswordField.type('ThisIsNotAPassword')
      BasePage.LoginButton.click()
      AppointementPage.BurgerMenu.click()
      AppointementPage.Sidebar.should('have.attr', 'class', 'active')
      AppointementPage.HistorySidebarButton.click()
      //validate that the "no appointment" text is displayed
      HistoryPage.NoAppointmentText.should('be.visible')
    })
  })
})