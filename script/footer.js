document.addEventListener("DOMContentLoaded", function () {
    let footer = document.createElement("footer");
    footer.classList.add("footer-container"); // Agrega la clase

    footer.innerHTML = `
        <div class="footer-section">
            <h3>Información Legal</h3>
            <p>© 2025 Autos Andrade. Todos los derechos reservados.</p>
        </div>
    `;

    document.body.appendChild(footer);
});
