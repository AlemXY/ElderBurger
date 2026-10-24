import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CalendarDays, Clock3, Info, MessageCircle, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { site } from '../config/site';
import { bookingMessage, localDate, validateBooking, whatsappShareUrl, type Booking } from '../utils/booking';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const FIELD_STYLE = 'form-field';

export const Reservations = () => {
  useDocumentTitle('Solicitar reserva');
  const [error, setError] = useState<string | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const clearFeedback = () => { setError(null); setPreparedUrl(null); };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearFeedback();
    const formData = new FormData(event.currentTarget);
    const booking: Booking = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      guests: String(formData.get('guests') || ''),
      date: String(formData.get('date') || ''),
      time: String(formData.get('time') || ''),
      note: String(formData.get('note') || ''),
    };
    const validationError = validateBooking(booking);
    if (validationError) { setError(validationError); return; }
    const url = whatsappShareUrl(bookingMessage(booking));
    setPreparedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return <><PageHero eyebrow="SOLICITUD DE MESA" title="Hay una mesa en tus planes." description="Cuéntanos cuándo te gustaría venir y prepara un mensaje para WhatsApp. La confirmación dependerá del restaurante." />
    <section className="section reservations-section"><div className="container reservation-grid">
      <div className="form-shell"><div className="form-header"><span className="eyebrow"><span className="eyebrow-dot" /> FORMULARIO</span><h2>Prepara tu solicitud.</h2><p>Los campos marcados con * son obligatorios.</p></div>
        <form onSubmit={handleSubmit} onChange={clearFeedback} className="reservation-form">
          <div className={FIELD_STYLE}><label htmlFor="booking-name">Nombre completo *</label><input id="booking-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre y apellido" maxLength={90} required /></div>
          <div className={FIELD_STYLE}><label htmlFor="booking-email">Correo electrónico *</label><input id="booking-email" name="email" type="email" autoComplete="email" placeholder="nombre@correo.com" maxLength={120} required /></div>
          <div className={FIELD_STYLE}><label htmlFor="booking-phone">Teléfono *</label><input id="booking-phone" name="phone" type="tel" autoComplete="tel" placeholder="+51 999 999 999" required /></div>
          <div className={FIELD_STYLE}><label htmlFor="booking-guests">Número de personas *</label><input id="booking-guests" name="guests" type="number" min="1" max={site.booking.maxGuests} defaultValue="2" required /></div>
          <div className={FIELD_STYLE}><label htmlFor="booking-date">Fecha *</label><input id="booking-date" name="date" type="date" min={localDate()} required /></div>
          <div className={FIELD_STYLE}><label htmlFor="booking-time">Hora *</label><input id="booking-time" name="time" type="time" min={site.booking.openingTime} max={site.booking.lastRequestTime} required /></div>
          <div className={`${FIELD_STYLE} field-full`}><label htmlFor="booking-note">Petición especial</label><textarea id="booking-note" name="note" rows={4} maxLength={500} placeholder="¿Hay algo más que debamos saber? (opcional)" /></div>
          {error && <p className="form-error field-full" role="alert"><Info size={18} aria-hidden="true" />{error}</p>}
          <button className="button button-primary booking-submit field-full" type="submit">Preparar mensaje por WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></button>
          {preparedUrl && <div className="form-ready field-full" role="status"><ShieldCheck size={20} aria-hidden="true" /><div><strong>Tu solicitud está preparada.</strong><p>Revisa y envía el mensaje en WhatsApp. Si no se abrió una nueva pestaña, <a href={preparedUrl} target="_blank" rel="noopener noreferrer">ábrelo desde aquí</a>.</p></div></div>}
          <p className="form-disclaimer field-full">Al continuar se abrirá WhatsApp con la información del formulario. No se almacena en este sitio ni representa una reserva confirmada.</p>
        </form>
      </div>
      <aside className="reservation-aside"><div className="aside-visual"><img src="/assets/emplatado.webp" alt="Plato gastronómico servido" loading="lazy" /><div className="aside-visual-caption">LA MESA ES EL COMIENZO.</div></div>
        <div className="aside-details"><h2>Antes de solicitar</h2><div className="aside-line"><Clock3 size={21} aria-hidden="true" /><div><h3>Horario de demostración</h3><p>{site.booking.openingTime} a {site.booking.lastRequestTime}</p></div></div><div className="aside-line"><CalendarDays size={21} aria-hidden="true" /><div><h3>Disponibilidad</h3><p>No comprobamos mesas libres en tiempo real.</p></div></div><div className="aside-line"><MessageCircle size={21} aria-hidden="true" /><div><h3>WhatsApp</h3><p>{site.booking.whatsappNumber ? 'Solicitud dirigida al número configurado.' : 'Elegirás el destinatario al compartir el mensaje.'}</p></div></div></div>
      </aside>
    </div></section>
  </>;
};
