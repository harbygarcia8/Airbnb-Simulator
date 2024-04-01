import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './components/Card/Card';

describe('Card Component', () => {
  const mockCard = {
    id: '1',
    picture: 'url-to-image',
    title: 'Casa Bonita',
    rating: '4.8',
    desc: 'Una descripción corta',
    date: 'Disponible ahora',
    price: '300'
  };

  it('debe renderizar la información de la tarjeta correctamente', () => {
    render(Card({mockCard}))
    expect(screen.getByText('Casa Bonita')).toBeInTheDocument();
    expect(screen.getByText('4.8')).toBeInTheDocument();
    expect(screen.getByText('₹300 por noche')).toBeInTheDocument();
  });

  it('debe mostrar el modal al hacer clic en el swiper', async () => {
    render(Card({mockCard}))
    const swiper = screen.getByRole('button', { name: '' });
    userEvent.click(swiper);
    expect(await screen.findByText('CONFIRMAR RESERVA PARA ESTE SITIO')).toBeInTheDocument();
  });

  it('debe mostrar la información correcta en el modal', async () => {
    render(Card({mockCard}))
    const swiper = screen.getByRole('button', { name: '' });
    userEvent.click(swiper);
    expect(await screen.findByText(`Escogiste ${mockCard.title} como tu lugar favorito para esta reserva.`)).toBeInTheDocument();
    expect(screen.getByText(`El valor a pagar es de: ${mockCard.price}`)).toBeInTheDocument();
  });
});