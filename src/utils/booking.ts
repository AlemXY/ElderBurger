import { site } from "../config/site";

export type Booking = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  note: string;
};

/** Usa la fecha local del navegador, no UTC. */
export const localDate = (date = new Date()): string =>
  [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

/** Revalida la fecha/hora al enviar; el atributo min del HTML por sí solo no es suficiente. */
export const validateBooking = (value: Booking): string | null => {
  const { openingTime, lastRequestTime, maxGuests } = site.booking;
  if (
    !value.name.trim() ||
    !value.email.trim() ||
    !value.phone.trim() ||
    !value.date ||
    !value.time
  ) {
    return "Completa todos los campos obligatorios.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email.trim())) {
    return "Introduce un correo electrónico válido.";
  }
  const digits = value.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return "Introduce un número telefónico válido.";
  }
  const guests = Number(value.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > maxGuests) {
    return `La solicitud debe ser de 1 a ${maxGuests} personas.`;
  }
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value.date) ||
    !/^\d{2}:\d{2}$/.test(value.time)
  ) {
    return "Selecciona una fecha y hora válidas.";
  }
  const requested = new Date(`${value.date}T${value.time}`);
  if (
    Number.isNaN(requested.getTime()) ||
    localDate(requested) !== value.date ||
    requested.getHours() !== Number(value.time.slice(0, 2)) ||
    requested.getMinutes() !== Number(value.time.slice(3, 5))
  ) {
    return "Selecciona una fecha y hora válidas.";
  }
  if (requested <= new Date()) {
    return "Selecciona una fecha y hora futuras.";
  }
  if (value.time < openingTime || value.time > lastRequestTime) {
    return `El horario de demostración para solicitudes es de ${openingTime} a ${lastRequestTime}.`;
  }
  return null;
};

export const bookingMessage = (booking: Booking): string =>
  [
    "Hola, quisiera solicitar una reserva en ElderBurger.",
    "Solicitud pendiente de confirmación.",
    "",
    `Nombre: ${booking.name.trim()}`,
    `Correo: ${booking.email.trim()}`,
    `Teléfono: ${booking.phone.trim()}`,
    `Personas: ${booking.guests}`,
    `Fecha: ${booking.date}`,
    `Hora: ${booking.time}`,
    `Petición especial: ${booking.note.trim() || "Ninguna"}`,
  ].join("\n");

export const whatsappShareUrl = (message: string): string => {
  const number = site.booking.whatsappNumber.trim();
  const target = /^\d{8,15}$/.test(number) ? number : "";
  return `https://wa.me/${target}?text=${encodeURIComponent(message)}`;
};
