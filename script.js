document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de envío del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formStatus.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
                formStatus.style.color = 'green';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Por favor, completa todos los campos.';
                formStatus.style.color = 'red';
            }
        });
    }

    // Funcionalidad para los botones de "Comprar" (simulación)
    const buyBtns = document.querySelectorAll('.buy-btn');
    buyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('¡Producto añadido al carrito! Esta es una simulación. En una web real, te redirigiríamos a la página de pago.');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typed-text');
    const textToType = 'Un pequeño regalo para alguien muy especial.';
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            textElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Velocidad de escritura
        }
    }

    typeWriter();
});