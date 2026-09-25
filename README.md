# ⚽ Invitación Cumpleaños 18 - Julián (Boca Juniors)

Proyecto web interactivo y animado desarrollado en **React + Vite**, diseñado como una invitación digital temática de **Boca Juniors** para los **18 años de Julián**.

Incluye música ambiental dedicada para la ceremonia y la fiesta, animaciones fluidas e interactivas con **Framer Motion**, efectos visuales de celebración con **Canvas Confetti**, una sección flotante para regalos (CBU/Alias) y un formulario RSVP con confirmación directa por **WhatsApp**.

---

## 🚀 Tecnologías principales

```text
- ⚛️ React 19 (Vite 6)
- 🎯 HTML5 + CSS3 / Tailwind CSS v4
- ⚙️ JavaScript (ES6+)
- ⚽ Temática Boca Juniors (Estilos oscuros premium y dorados)
- 🎵 Audio HTML5 (Auto-play seguro y pistas dinámicas)
- 🎬 Framer Motion & Canvas Confetti
- 🎨 Lucide React Icons
- 📲 Integración Directa con WhatsApp Web API
```

---

## 📂 Estructura del proyecto

```text
Julian-18/
├── public/                       # Archivos estáticos, imágenes de Boca y música (MP3)
│   ├── fiesta-audio.mp3
│   ├── misa-audio.mp3
│   └── _redirects                # Reglas de enrutamiento para Netlify
├── src/
│   ├── components/               # Componentes modulares
│   │   ├── Confetti.jsx          # Lógica de confeti interactivo
│   │   ├── Countdown.jsx         # Cuenta regresiva para los eventos
│   │   ├── Fiesta.jsx            # Vista del salón Hadassah Eventos
│   │   ├── GiftModal.jsx         # Modal de regalos con copiado automático (CBU/Alias)
│   │   ├── Landing.jsx           # Portada animada e interactiva principal
│   │   ├── Misa.jsx              # Vista de la ceremonia (Parroquia San Juan Bosco)
│   │   └── RSVPForm.jsx          # Formulario dinámico conectado a WhatsApp
│   ├── App.jsx                   # Orquestación de vistas y controlador de audio
│   ├── index.css                 # Estilos globales y configuraciones de Tailwind
│   └── main.jsx                  # Punto de entrada de la aplicación
├── index.html                    # Plantilla base con Meta Tags (OpenGraph) optimizada
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Instalación y uso

```bash
# 1. Instalar dependencias:
npm install

# 2. Iniciar el servidor de desarrollo local:
npm run dev

# 3. Compilar para producción (optimizado para Netlify):
npm run build
```
