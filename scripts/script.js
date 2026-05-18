const revealsElement = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

revealsElement.forEach(el => observer.observe(el));





const modal = document.querySelector('.project-modal');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.project-card').forEach(card => {

    card.addEventListener('click', () => {

        const image = card.dataset.image;
        const title = card.dataset.title;
        const tags = card.dataset.tags;
        const description = card.dataset.description;

        document.querySelector('.modal-image').src = image;
        document.querySelector('.modal-title').textContent = title;
        document.querySelector('.modal-stack').textContent = tags;

        document.querySelector('.modal-description').innerHTML =
            `<p>${description}</p>`;

        const github = card.dataset.github;
        const demo = card.dataset.demo;

        document.querySelector('.modal-links').innerHTML = `
            ${github ? `<a href="${github}" target="_blank">GitHub ↗</a>` : ''}
            ${demo ? `<a href="${demo}" target="_blank">Demo ↗</a>` : ''}
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const tech = card.dataset.tech;
        document.querySelector('.modal-tech').innerHTML =
        tech
        ? tech.split(',').map(t => `<span>${t}</span>`).join('')
        : '';

    });

});

function closeModalFn() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModalFn);

modal.addEventListener('click', e => {
    if (e.target === modal) closeModalFn();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalFn();
});