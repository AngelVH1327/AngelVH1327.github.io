function validar(form) {
    // Validar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        console.error("Error: El campo 'Nombre' está vacío.");
        return false;
    }
    // Validar que el nombre no contenga el carácter '<'
    if (nombre.includes("<")) {
        alert("Error: El nombre no es valido.");
        console.error("Error: El nombre no es valido.");
        return false;
    }
    // Si el nombre es correcto, mostramos un saludo
    alert("Hola, " + nombre);
    console.log("Correcto: Se ingresó un nombre válido.");

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        console.error("Error: La edad es inválida o no es un número positivo.");
        return false;
    } else {
        console.log("Correcto: La edad ingresada es válida.");
    }

    // Validar selección de sexo
    var sexo = form.sexo.value;
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        console.error("Error: No se ha seleccionado el sexo.");
        return false;
    } else {
        console.log("Correcto: Se ha seleccionado un sexo.");
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        console.error("Error: No se ha seleccionado un deporte favorito.");
        return false;
    } else {
        console.log("Correcto: Se ha seleccionado un deporte favorito.");
    }

    // Validar que el campo de contenido HTML (si existe) no contenga etiquetas <script>
    if (form.htmlInput) {
        var contenidoHTML = form.htmlInput.value;
        var regexScript = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
        if (regexScript.test(contenidoHTML)) {
            alert("El contenido HTML no puede contener etiquetas <script>.");
            console.error("Error: Se encontró una etiqueta <script> en el contenido HTML.");
            return false;
        } else {
            console.log("Correcto: No se encontraron etiquetas <script> en el contenido HTML.");
        }
    }

    console.log("Validación correcta: el formulario es válido.");
    return true;
}
