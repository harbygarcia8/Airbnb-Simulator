
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card/Card';

describe('Card Component Tests', () => {
  const mockCard = {
    id: '1',
    picture: 'test-url',
    title: 'Test Title',
    rating: '4.9',
    desc: 'Test Description',
    date: 'Test Date',
    price: '100'
  };

  test('should render card information correctly', () => {
    render(Card({mockCard}))
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('4.9')).toBeInTheDocument();
    expect(screen.getByText('₹100 por noche')).toBeInTheDocument();
  });

  test('should open modal on click', () => {
    render(Card({mockCard}))
    const openModalButton = screen.getByText('Test Title');
    fireEvent.click(openModalButton);
    const modalText = screen.queryByText(/confirmar reserva para este sitio/i);
    expect(modalText).toBeInTheDocument();
  });

  // Agrega más pruebas según sea necesario para cubrir funcionalidades específicas del componente
});
