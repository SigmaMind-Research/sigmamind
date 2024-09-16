const projects = [
    { intro: "NAUniSeq: A Novel Phylogenetically Aware Alignment-Free Algorithm for Comparative Genomics", img: "./images/nauniseq.png" },
    { intro: "MQ: AI-Powered Music Creation Companion and Marketplace", img: "./images/music.png" },
    { intro: "Intro line for project 3", img: "./images/space.png" }
];

let currentIndex = 0;
let autoSlideInterval; // To hold the interval ID

// Function to update carousel content
function updateCarousel(index) {
    document.getElementById('researchIntro').innerText = projects[index].intro;
    document.getElementById('researchImage').innerHTML = `<img src="${projects[index].img}" alt="Research Image">`;
}

// Function to go to the next project
function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel(currentIndex);
}

// Add event listener for the next button
document.getElementById('nextProjectBtn').addEventListener('click', function() {
    clearInterval(autoSlideInterval); // Stop auto-sliding when user clicks the button
    nextProject();
    startAutoSlide(); // Restart auto-sliding after manual navigation
});

// Function to start automatic carousel
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextProject();
    }, 5000); // Change slide every 5 seconds
}

// Initialize the carousel with the first project
updateCarousel(currentIndex);

// Start the auto-sliding
startAutoSlide();