import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole('heading'),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button')
    }
  }

  it('should render correct text and initial state', () => {
    const { heading, checkbox, button } = renderComponent()

    expect(heading).toHaveTextContent('Terms & Conditions')
    expect(checkbox).not.toBeChecked()
    // .getByRole('button', { name: /submit/i }) if multiple buttons
    expect(button).toBeDisabled()
  });

  it('should enable the button when the checkbox is checked', async () => {
    const { checkbox, button } = renderComponent()

    const user = userEvent.setup()
    await user.click(checkbox)  // await here as this returns a promise

    expect(button).toBeEnabled()
  });
})