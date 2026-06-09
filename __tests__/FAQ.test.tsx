import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '@/components/sections/FAQ'

describe('FAQ', () => {
  it('first item is open by default', () => {
    render(<FAQ />)
    expect(
      screen.getByRole('button', { name: /Can we request our own vendors/i }),
    ).toHaveAttribute('aria-expanded', 'true')
  })

  it('other items are closed by default', () => {
    render(<FAQ />)
    expect(
      screen.getByRole('button', { name: /How far in advance/i }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking a closed item opens it', () => {
    render(<FAQ />)
    const btn = screen.getByRole('button', { name: /How far in advance/i })
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('opening a new item closes the previously open one', () => {
    render(<FAQ />)
    fireEvent.click(screen.getByRole('button', { name: /How far in advance/i }))
    expect(
      screen.getByRole('button', { name: /Can we request our own vendors/i }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking an open item closes it', () => {
    render(<FAQ />)
    const btn = screen.getByRole('button', { name: /Can we request our own vendors/i })
    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })
})
