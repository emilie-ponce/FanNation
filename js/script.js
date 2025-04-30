/*MENU DEROULANT*/
document.addEventListener('DOMContentLoaded', function() {
    const profileToggle = document.getElementById('profile-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    let isMenuForcedOpen = false;

    // Gestion du clic sur l'icône
    profileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        isMenuForcedOpen = !isMenuForcedOpen;
        
        if (isMenuForcedOpen) {
            dropdownMenu.classList.remove('opacity-0', 'invisible');
            dropdownMenu.classList.add('opacity-100', 'visible');
        } else {
            dropdownMenu.classList.add('opacity-0', 'invisible');
            dropdownMenu.classList.remove('opacity-100', 'visible');
        }
    });

    //fermer le menu quand on clique n'importe où sur la page
    document.addEventListener('click', function() {
        if (isMenuForcedOpen) {
            isMenuForcedOpen = false;
            dropdownMenu.classList.add('opacity-0', 'invisible');
            dropdownMenu.classList.remove('opacity-100', 'visible');
        }
    });

    //empêche la fermeture quand on clique dans le menu
    dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    //gestion du survol
    profileToggle.addEventListener('mouseenter', function() {
        if (!isMenuForcedOpen) {
            dropdownMenu.classList.remove('opacity-0', 'invisible');
            dropdownMenu.classList.add('opacity-100', 'visible');
        }
    });
    
    // fermer le menu quand on quitte l'icône
    profileToggle.addEventListener('mouseleave', function() {
        if (!isMenuForcedOpen) {
            dropdownMenu.classList.add('opacity-0', 'invisible');
            dropdownMenu.classList.remove('opacity-100', 'visible');
        }
    });

    //gestion du survol du menu
    dropdownMenu.addEventListener('mouseenter', function() {
        if (!isMenuForcedOpen) {
            dropdownMenu.classList.remove('opacity-0', 'invisible');
            dropdownMenu.classList.add('opacity-100', 'visible');
        }
    });
    
    //fermer le menu quand on quitte le menu
    dropdownMenu.addEventListener('mouseleave', function() {
        if (!isMenuForcedOpen) {
            dropdownMenu.classList.add('opacity-0', 'invisible');
            dropdownMenu.classList.remove('opacity-100', 'visible');
        }
    });
});