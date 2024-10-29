import Counter from './Counter'

describe('<Counter />', () => {

    beforeEach(() => {
      cy.mount(<Counter />)
    })

    it('renders', () => {
      cy.mount(<Counter />)
    })

    describe('det ska finnas knappar med texten "+" och "-" och "suprise me"', () => {

        it('should have + button', () => {
            cy.get(".add-button").contains("+");
        })
    })

  })