import Counter from './Counter'

describe('<Counter />', () => {

    beforeEach(() => {
      cy.mount(<Counter />)
    })

    it('renders', () => {
      cy.mount(<Counter />)
    })

    describe('Det ska finnas knappar med texten "+" och "-" och "suprise me"', () => {

        it('should have + button', () => {
            const plus = cy.get(".add-button").contains("+");
            plus.should("be.visible");
        })
        it("should have - button", () => {
            cy.get(".subtract-button").contains("-").should("be.visible");
        })
        it("should have random button", () => {
            cy.get(".random-button").contains("suprise me").should("be.visible")
        })
    })

    describe('Användaren ska se talet 1 initialt (innnan man klickar på knappen)', () => {

        it('should display 1 initially', () => {
            cy.get('.value').contains(1).should("be.visible");
        })
    })

    describe('1. "+" button ', () => {
        let button;
        beforeEach(() => {
            button = cy.get(".add-button");
        })

        it('should display number 2 when the + buttton is pressed the first time', () => {
            button.click();
            cy.get(".value").contains(2).should("be.visible");
        })

        it('should increase value by 1 after every click on the "+"', () => {
            button.click();
            button.click();
            button.click();
            cy.get(".value").contains(4).should("be.visible");
        })
    })

    describe('2 "-" button ', () => {

        it('should decrease value by 1 after every click on "-"', () => {
            cy.get(".add-button").click(); //upp till 2

            cy.get(".subtract-button").click();
            cy.get(".subtract-button").click(); //ner till 0

            cy.get(".value").contains(0).should("be.visible");

        })
    })

  })