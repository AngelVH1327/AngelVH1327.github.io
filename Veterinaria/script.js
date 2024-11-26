document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const resultBox = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const petName = document.getElementById('petName').value;
        const ownerName = document.getElementById('ownerName').value;
        const email = document.getElementById('email').value;

        // Mostrar los datos en el cuadro de resultados
        resultBox.innerHTML = `
            <h3>Registro Exitoso!</h3>
            <p><strong>Nombre de la Mascota:</strong> ${petName}</p>
            <p><strong>Nombre del Dueño:</strong> ${ownerName}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
        
        // Limpiar el formulario
        form.reset();
    });
});