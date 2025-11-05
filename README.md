# Nexo - Agencia de Marketing

Plantilla web responsiva desarrollada con **HTML**, **CSS** y **JavaScript** puro siguiendo la metodología **BEM** y las mejores prácticas de **SEO**. Esta plantilla está pensada para agencias de marketing que buscan presencia profesional, moderna y funcional.

---

## 🚀 Características principales

- **Diseño responsivo**: Adaptable a dispositivos móviles, tablets y escritorio.
- **Metodología BEM**: Código estructurado, escalable y fácil de mantener.
- **Paleta de colores**: Negro (#000) y amarillo (#FFD700) para una imagen elegante y energética.
- **Optimización SEO**: Estructura semántica con etiquetas meta, Open Graph y datos estructurados.
- **Interactividad JS**: Menú hamburguesa, desplazamiento suave y validación del formulario de contacto.
- **Accesibilidad**: Navegación clara, etiquetas ARIA y jerarquía de encabezados.

---

## 📁 Estructura del proyecto

```
Nexo/
│
├── index.html          # Página principal con estructura base
├── blocks/
│   └── styles.css      # Estilos principales (BEM + responsive design)
├── js/
│   └── index.js         # Interacciones y funcionalidades básicas
├── images/
│   ├── img/            # Imágenes y logotipos
│   └── icons/          # Iconos SVG
└── README.md           # Documentación del proyecto
```

## 🧠 Metodología BEM

Ejemplo de nomenclatura utilizada:

```html
<section class="services">
  <div class="services__item services__item--featured">
    <h3 class="services__title">Marketing Digital</h3>
    <p class="services__description">
      Estrategias personalizadas para tu negocio.
    </p>
  </div>
</section>
```

- **Bloque:** `services`
- **Elemento:** `services__item`
- **Modificador:** `services__item--featured`

---

## 🧩 SEO y accesibilidad

Incluye:

- `<meta name="description">`
- `<title>` optimizado
- `<alt>` en imágenes
- Etiquetas Open Graph (`og:title`, `og:description`, `og:image`)
- Estructura semántica (`header`, `main`, `footer`)

---

## 💡 Personalización

- Edita los textos de cada sección en `index.html`.
- Cambia la paleta de colores en `css/styles.css`.
- Sustituye imágenes en `assets/img/`.
- Si agregas nuevas secciones, respeta la estructura BEM para mantener coherencia.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** – Estructura semántica
- **CSS3** – Flexbox, Grid, transiciones y media queries
- **JavaScript (ES6)** – Interactividad y validaciones

---

## 🧱 Próximas mejoras

- Agregar animaciones suaves con IntersectionObserver.
- Implementar lazy loading de imágenes.
- Integrar formulario con servicio de correo o API (Ej. EmailJS o backend propio).
- Mejorar puntuación Lighthouse (rendimiento + accesibilidad).

---

## 👨‍💻 Autor

**Nexo Web Project**  
Desarrollado por [Gonzalo Magaña Segovia] — 2025.  
Inspirado en la simplicidad y potencia del diseño funcional.

---

## 📜 Licencia

Este proyecto se distribuye bajo la licencia **MIT**, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente, siempre que se dé crédito al autor original.
