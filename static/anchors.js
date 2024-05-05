document.addEventListener('DOMContentLoaded', function () {
    const table_of_contents = document.querySelector('#table-of-contents');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const links = table_of_contents.querySelectorAll('a[href="#' + entry.target.id + '"]');

            links.forEach((link) => {
                if (entry.isIntersecting) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
    });

    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
        observer.observe(heading);
    });
});