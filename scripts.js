document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario para esta demostración.
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto.`);
        this.reset(); // Limpiar el formulario.
    } else {
        alert("Por favor, completa todos los campos antes de enviar.");
    }
});
