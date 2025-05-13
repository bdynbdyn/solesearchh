document.addEventListener('DOMContentLoaded', function() {
    const groups = document.querySelectorAll('.colorway-group');
    const prevBtn = document.querySelector('.nav-button.prev');
    const nextBtn = document.querySelector('.nav-button.next');
    let currentIndex = 0;


    if (!prevBtn || !nextBtn || groups.length === 0) {
        console.error('Missing required elements');
        return;
    }


    groups[0].classList.add('active');

    function showGroup(index) {
        groups.forEach(group => {
            group.classList.remove('active');
            group.style.opacity = '0';
        });

        setTimeout(() => {
            groups[index].classList.add('active');
            groups[index].style.opacity = '1';
        }, 300);
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % groups.length;
        showGroup(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + groups.length) % groups.length;
        showGroup(currentIndex);
    });
});