import { hotels } from './HotelList';

/**
 * Verifica si una fecha es un fin de semana.
 * @param {Date} date - La fecha a verificar.
 * @returns {boolean} - True si es fin de semana, de lo contrario false.
 */
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

/**
 * Calcula el precio total para un rango de fechas y tipo de cliente.
 * @param {Date} startDate - La fecha de inicio del rango.
 * @param {Date} endDate - La fecha de fin del rango.
 * @param {string} customerType - El tipo de cliente (ej. 'regular', 'rewards').
 * @returns {Object} - El hotel con el precio más bajo y su precio total.
 */
export const calculatePrice = (startDate, endDate, customerType) => {
  if (!(startDate instanceof Date) || !(endDate instanceof Date) || !customerType) {
    throw new Error('Invalid parameters');
  }

  const prices = hotels.map(hotel => {
    let total = 0;
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayType = isWeekend(d) ? 'weekend' : 'weekday';
      total += hotel.rates[dayType][customerType] || 0; // Maneja casos donde customerType no esté definido
    }
    return { hotel, total };
  });

  prices.sort((a, b) => a.total - b.total || b.hotel.rating - a.hotel.rating);

  return prices[0];
};
