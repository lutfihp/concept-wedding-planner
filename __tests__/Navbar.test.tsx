import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/sections/Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Tresna')).toBeInTheDocument()
  })

  it('mobile menu is hidden by default', () => {
    render(<Navbar />)
    expect(screen.getByRole('complementary', { hidden: true })).toHaveAttribute('aria-hidden', 'true')
  })

  it('hamburger button opens mobile menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('complementary', { hidden: true })).toHaveAttribute('aria-hidden', 'false')
  })

  it('clicking scrim closes mobile menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    fireEvent.click(screen.getByTestId('scrim'))
    expect(screen.getByRole('complementary', { hidden: true })).toHaveAttribute('aria-hidden', 'true')
  })

  it('clicking a mobile nav link closes mobile menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const aside = screen.getByRole('complementary', { hidden: true })
    fireEvent.click(aside.querySelector('a')!)
    expect(screen.getByRole('complementary', { hidden: true })).toHaveAttribute('aria-hidden', 'true')
  })
})
