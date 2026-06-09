import { render, screen, fireEvent } from '@testing-library/react'
import Gallery from '@/components/sections/Gallery'

describe('Gallery', () => {
  it('renders all 6 gallery images on initial load', () => {
    render(<Gallery />)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('"All" filter is active by default', () => {
    render(<Gallery />)
    const allButton = screen.getByRole('button', { name: 'All' })
    expect(allButton).toHaveClass('active')
  })

  it('clicking "Ceremony" hides non-ceremony items', () => {
    render(<Gallery />)
    fireEvent.click(screen.getByRole('button', { name: 'Ceremony' }))
    expect(screen.getByText('Wedding Vows')).toBeInTheDocument()
    expect(screen.getByText('Sacred Vows')).toBeInTheDocument()
    expect(screen.queryByText('Garden Reception')).not.toBeInTheDocument()
    expect(screen.queryByText('First Dance')).not.toBeInTheDocument()
    expect(screen.queryByText('Guest Table')).not.toBeInTheDocument()
    expect(screen.queryByText('Centerpiece')).not.toBeInTheDocument()
  })

  it('clicking "Reception" shows only reception items', () => {
    render(<Gallery />)
    fireEvent.click(screen.getByRole('button', { name: 'Reception' }))
    expect(screen.getByText('Garden Reception')).toBeInTheDocument()
    expect(screen.getByText('First Dance')).toBeInTheDocument()
    expect(screen.queryByText('Wedding Vows')).not.toBeInTheDocument()
  })

  it('clicking "All" after a filter restores all items', () => {
    render(<Gallery />)
    fireEvent.click(screen.getByRole('button', { name: 'Ceremony' }))
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
