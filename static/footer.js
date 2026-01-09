// Footer Component Loader
document.addEventListener('DOMContentLoaded', function() {
    // Fetch and load the footer HTML
    fetch('/static/components/footer.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary container to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html.trim();
            const footer = tempDiv.firstChild;

            // Insert footer at the end of body
            document.body.appendChild(footer);
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});

