document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded - checking elements...');
    
    const modal = document.getElementById('jewelryModal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const closeBtn = document.querySelector('.close-modal');
    const productImages = document.querySelectorAll('.product img');
    
    console.log('Found elements:', {
        modal, modalImg, modalTitle, modalPrice, 
        closeBtn, productImages: productImages.length
    });

    productImages.forEach(img => {
        img.addEventListener('click', function() {
            console.log('Image clicked:', this);
            const product = this.closest('.product');
            if (!product) return;
            
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalTitle.textContent = product.querySelector('h3').textContent;
            modalPrice.textContent = product.querySelector('p').textContent;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});