// Navbar Component Loader
document.addEventListener('DOMContentLoaded', function() {
    // Fetch and load the navbar HTML
    fetch('/static/components/navbar.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary container to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html.trim();
            const navbar = tempDiv.firstChild;

            // Insert navbar at the beginning of body
            document.body.insertBefore(navbar, document.body.firstChild);

            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }

            // Highlight active page (exclude logo/brand link and CTA button)
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = navbar.querySelectorAll('a[href]');
            navLinks.forEach(link => {
                // Skip logo/brand link (has no padding classes) and CTA button (has gradient)
                const isLogoLink = link.querySelector('img') !== null || link.textContent.trim().includes('Chito');
                const isCTAButton = link.classList.contains('from-blue-600') || link.classList.contains('bg-gradient-to-r');
                
                if (isLogoLink || isCTAButton) {
                    return; // Skip styling for logo and CTA button
                }
                
                const linkPage = link.getAttribute('href');
                // Check if this link matches the current page
                if (linkPage === currentPage || 
                    (currentPage === '' && linkPage === 'index.html') ||
                    (currentPage === 'index.html' && linkPage === 'index.html')) {
                    // Only change text color, no background
                    link.classList.add('text-blue-600', 'font-semibold');
                    link.classList.remove('text-slate-700', 'hover:bg-blue-50');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});
