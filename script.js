<script>
    // JavaScript to handle the image click event
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', (event) => {
            // Get the clicked image's src attribute
            const imageSrc = event.target.src;
            
            // Create the lightbox container and image dynamically
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `<img src="${imageSrc}" alt="Full-size image" />`;
            // Append the lightbox to the body
            document.body.appendChild(lightbox);

            // Close the lightbox when clicked
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
</script>