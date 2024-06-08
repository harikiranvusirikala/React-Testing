import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities';

describe('UserAccount', () => {
  it('should render name of the user', () => {
    const user: User = { id: 1, name: 'name1' }
    render(<UserAccount user={user} />)

    // - https://testing-library.com/docs/queries/byrole
    // Use getByText it is not having a tag or div with role
    expect(screen.getByText(user.name)).toBeInTheDocument()
  });

  it('should render Edit button if user is admin', () => {
    const user: User = { id: 1, name: 'name1', isAdmin: true }
    render(<UserAccount user={user} />)

    const button = screen.getByRole('button')
    // screen.debug()
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/edit/i)
  });

  it('should not render Edit button if user is not admin', () => {
    const user: User = { id: 1, name: 'name1', isAdmin: false }
    render(<UserAccount user={user} />)

    // Using queryByRole as this will given an error when calling via getByRole
    const button = screen.queryByRole('button')
    // screen.debug()
    expect(button).not.toBeInTheDocument()
  });
})