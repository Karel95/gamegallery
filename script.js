
// offcanvas
// Agregar event listener a los enlaces dentro del offcanvas para manejar la clase 'active'
let links = document.querySelectorAll('.list-group .links-a');
links.forEach((link) => {
    link.addEventListener('click', function(event) {
        // Quitar la clase 'active' de todos los enlaces
        links.forEach(function(item) {
            item.classList.remove('active');
        });
        // Quitar la clase 'active' de todos los enlaces
        botones.forEach(function(item) {
            item.classList.remove('btn-info');
        });
        // Agregar la clase 'active' al enlace clickeado
        link.classList.add('active');
    })
}); 
// Agregar event listener a los botones dentro de enlaces dentro del offcanvas para manejar la clase 'active'
let botones = document.querySelectorAll('.btn-group button');
botones.forEach((boton) => {
    boton.addEventListener('click', function(ev) {
        // Quitar la clase 'active' de todos los enlaces
        botones.forEach(function(it) {
            it.classList.remove('btn-info');
        });
        // Quitar la clase 'active' de todos los enlaces
        links.forEach(function(it) {
            it.classList.remove('active');
        });
        // Agregar la clase 'active' al enlace clickeado
        boton.classList.add('btn-info');
    })
}); 
