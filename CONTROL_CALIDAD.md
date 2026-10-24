# Control de calidad — ElderBurger React

## Verificaciones realizadas sobre esta entrega

- Análisis sintáctico de 23 archivos TypeScript/TSX: **sin errores de sintaxis**.
- Análisis sintáctico de las 7 hojas CSS (incluido el archivo de importación): **correcto**.
- Comprobación de rutas de los recursos fotográficos: **todos los archivos referenciados existen**.
- Comprobación de JSON (`package.json`, TypeScript, Vercel): **correcto**.
- Pruebas de funciones `validateBooking`, `bookingMessage` y `whatsappShareUrl` mediante JavaScript transpilado: **superadas** para reserva futura válida, fecha pasada, horario incorrecto, email inválido, aforo inválido, nombre vacío, texto y URL codificada.

## Verificaciones pendientes en la computadora de desarrollo

No fue posible instalar paquetes de npm en este entorno por restricciones de acceso al registro; por tanto **no se ha completado `npm run build`, ni se ha renderizado el sitio en un navegador con sus dependencias reales**. No considerar la entrega certificada para producción hasta:

1. `npm install`
2. `npm run typecheck`
3. `npm run build`
4. `npm run dev` y revisar todas las rutas.
5. Probar navegación, filtrado del menú, galería modal, formulario y sus errores en móvil y escritorio.
6. Verificar licencias y contenido comercial (precios, fotos, horarios, datos del negocio) antes de publicar como un negocio real.

No confundir la apertura del enlace de WhatsApp con una reserva confirmada.
