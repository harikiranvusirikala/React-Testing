import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
  it('should render correct text and initial state', () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Terms & Conditions')

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    // .getByRole('button', { name: /submit/i }) if multiple buttons
    const submit = screen.getByRole('button')
    expect(submit).toBeInTheDocument()
    expect(submit).toBeDisabled()
  });

  it('should enable the button when the checkbox is checked', async () => {
    render(<TermsAndConditions />)

    const checkbox = screen.getByRole('checkbox')
    const user = userEvent.setup()
    await user.click(checkbox)  // await here as this returns a promise

    expect(screen.getByRole('button')).toBeEnabled()
  });
})