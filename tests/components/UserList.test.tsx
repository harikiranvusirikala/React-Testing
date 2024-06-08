import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities';

describe('UserList', () => {
  it('should return no user when users array is empty', () => {
    render(<UserList users={[]} />)

    expect(screen.getByText(/no users/i)).toBeInTheDocument()
  });

  it('should return a list of users', () => {
    const users: User[] = [
      { id: 1, name: 'Hari' },
      { id: 2, name: 'Rama' }
    ]
    render(<UserList users={users} />)

    users.forEach(user => {
      // We are sending options to getByRole and here name is a matcher
      const link = screen.getByRole('link', { name: user.name })

      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  })
})