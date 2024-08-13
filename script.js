// Array of article objects
const articles = [
    { title: 'Article 1', description: 'Description 1', image: 'path/to/image1.jpg' },
    { title: 'Article 2', description: 'Description 2', image: 'path/to/image2.jpg' },
    { title: 'Article 3', description: 'Description 3', image: 'path/to/image3.jpg' },
    { title: 'Article 4', description: 'Description 4', image: 'path/to/image4.jpg' },
    { title: 'Article 5', description: 'Description 5', image: 'path/to/image5.jpg' },
    { title: 'Article 6', description: 'Description 6', image: 'path/to/image6.jpg' },
    /*{ title: 'Article 7', description: 'Description 7', image: 'path/to/image7.jpg' },
    { title: 'Article 8', description: 'Description 8', image: 'path/to/image8.jpg' },
    { title: 'Article 9', description: 'Description 9', image: 'path/to/image9.jpg' },
    { title: 'Article 10', description: 'Description 10', image: 'path/to/image10.jpg' },
    { title: 'Article 11', description: 'Description 11', image: 'path/to/image11.jpg' },
    { title: 'Article 12', description: 'Description 12', image: 'path/to/image12.jpg' },
    { title: 'Article 13', description: 'Description 13', image: 'path/to/image13.jpg' },
    { title: 'Article 14', description: 'Description 14', image: 'path/to/image14.jpg' },
    { title: 'Article 15', description: 'Description 15', image: 'path/to/image15.jpg' },
    { title: 'Article 16', description: 'Description 16', image: 'path/to/image16.jpg' },
    { title: 'Article 17', description: 'Description 17', image: 'path/to/image17.jpg' },
    { title: 'Article 18', description: 'Description 18', image: 'path/to/image18.jpg' }
*/
];

const articlesPerPage = 2;
let currentPage = 1;

function displayArticles() {
    const container = document.querySelector('.articles-container');
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const pageArticles = articles.slice(start, end);

    container.innerHTML = '';
    pageArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'article-card';
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="#">Read More</a>
        `;
        container.appendChild(articleElement);
    });

    updatePagination();
}

function updatePagination() {
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const currentPageSpan = document.getElementById('current-page');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(articles.length / articlesPerPage);
    currentPageSpan.textContent = `Page ${currentPage} of ${Math.ceil(articles.length / articlesPerPage)}`;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayArticles();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
        currentPage++;
        displayArticles();
    }
});

// Initialize the page
displayArticles();

// Handle newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    // Here you would typically send the email to your server
    console.log(`Subscribed: ${email}`);
    alert('Thank you for subscribing!');
    document.getElementById('email').value = '';
});
