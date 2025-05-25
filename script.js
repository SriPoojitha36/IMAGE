const images = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg', 'i5.jpg'];
let currentImageIndex = 0;

// Get elements
const mainImage = document.getElementById('mainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnailContainer = document.querySelector('.thumbnail-container');

// Function to update main image
function updateMainImage(index) {
    mainImage.src = images[index];
}

// Function to create thumbnails
function createThumbnails() {
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = () => {
            currentImageIndex = index;
            updateMainImage(currentImageIndex);
        };
        thumbnailContainer.appendChild(thumbnail);
    });
}

// Navigation event listeners
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(currentImageIndex);
});

// Initialize
createThumbnails();
updateMainImage(currentImageIndex);