# ElderBurger — React + TypeScript

Reconstrucción profesional **desde cero** del proyecto estático ElderBurger original. Este repositorio incluye una web de presentación conceptual (no un restaurante conectado a operaciones reales).

## Stack

- **React 19 + TypeScript**: componentes tipados y reutilizables.
- **Vite 7**: entorno de desarrollo y empaquetado.
- **React Router 7 (modo declarativo)**: rutas y navegación sin recargar la página.
- **CSS responsive**: diseño mobile-first con variables y estilos compartidos.
- **Lucide React**: iconos vectoriales.

> Se eligió React porque el sitio tiene varias páginas, cabecera, pie y datos compartidos. No necesita un backend para mostrar el concepto y compartir solicitudes mediante WhatsApp.

## Ejecutar en VS Code

Requisitos: Node.js **20.19+** o **22.12+** y npm.

```bash
npm install
npm run dev
```

Abrir la dirección que aparece en la terminal (normalmente `http://localhost:5173`). **No utilizar Live Server** para abrir `index.html`: Vite gestiona JSX/TypeScript.

Para revisar tipos y generar la versión de producción:

```bash
npm run typecheck
npm run build
npm run preview
```

## Estructura

```text
ElderBurger-React/
├── public/
│   ├── assets/              # Imágenes originales optimizadas en WebP
│   └── _redirects           # Redirección SPA para Netlify
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout y scroll
│   │   └── ui/              # Tarjetas y encabezados compartidos
│   ├── config/site.ts       # Reglas y datos verificables del establecimiento
│   ├── data/                # Carta y galería
│   ├── hooks/               # Títulos de documento
│   ├── pages/               # Inicio, Nosotros, Menú, Equipo, Galería, Reservas, 404
│   ├── styles/             # Base, header, inicio, páginas, footer, responsive
│   ├── utils/booking.ts     # Validaciones y mensaje WhatsApp
│   ├── App.tsx              # Definición de rutas
│   └── main.tsx             # Punto de entrada
├── index.html
├── vercel.json              # Redirección SPA para Vercel
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Rutas

`/`, `/nosotros`, `/menu`, `/equipo`, `/galeria`, `/reservas`. Cualquier otra ruta presenta una página 404.

## Ajustes antes de publicar comercialmente

1. **Datos del negocio:** `src/config/site.ts`. Los horarios 12:00–21:00 son provisionales. El teléfono de WhatsApp queda vacío a propósito; el usuario elige un destinatario. Cuando se confirme un número autorizado, guardarlo en `whatsappNumber` en formato internacional sin `+` ni espacios.
2. **Carta:** `src/data/menu.ts`. Los precios son los del prototipo original, expresados en **USD y solo como referencia**. Validar productos, precios, disponibilidad y moneda con el negocio antes de eliminar el aviso.
3. **Fotos:** `public/assets/`. Se reutilizaron y optimizaron imágenes entregadas con el proyecto original; **no se ha verificado su licencia comercial**. Se excluyeron fotos con otra marca y algunas imágenes problemáticas. Antes de trabajar para un cliente real, sustituirlas por material autorizado y documentar atribuciones si corresponden.
4. **Personal:** `/equipo` contiene fotos ilustrativas sin afirmar que retraten empleados ni atribuir identidades.
5. **Reservas:** el formulario valida datos solo en el navegador y abre una solicitud de WhatsApp; **no comprueba disponibilidad, no almacena ni confirma reservas**. Para operar reservas reales se requiere backend/base de datos, protección de datos, control de horarios y confirmación del establecimiento.
6. **SEO:** se actualiza el título por ruta. Al publicar un proyecto comercial, considerar metadatos específicos y renderizado previo/SSR para mejorar indexación y social sharing.
7. **Información legal:** añadir datos verificados, política de privacidad y derechos sobre contenidos antes de cualquier recopilación/procesamiento comercial.

## Despliegue

**Netlify:** conectar el repositorio, comando `npm run build`, carpeta `dist`. `public/_redirects` evita errores 404 al abrir rutas directamente.

**Vercel:** importar el repositorio, Framework Preset Vite, comando `npm run build`, salida `dist`. El `vercel.json` incluye redirección SPA.

## Criterios de revisión

- Probar las seis rutas a 320, 375, 768 y 1280 px sin desbordamientos horizontales.
- Abrir y cerrar navegación móvil; navegar entre páginas.
- Cambiar categorías de carta y abrir/cerrar fotografías de galería con Escape.
- Probar reserva con campos vacíos, fecha pasada, fuera de horario, valores válidos; revisar el texto de WhatsApp sin enviarlo a un contacto real.
- Verificar que todas las fotos y las rutas carguen en producción.

## Nota de diseño y mantenimiento

Los comentarios de código documentan contratos entre módulos y condiciones que afectarían al mantenimiento, no sintaxis de programación. Mantener reglas comerciales en `config/site.ts` y contenido editable en `data/` en lugar de duplicarlo dentro de componentes.
