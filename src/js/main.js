window.addEventListener('DOMContentLoaded', () => {

    // Responsive Navbar
    const menu = document.querySelector('.nav-list');
    const menuBelow = document.querySelector('.nav-below');
    const bars = document.querySelector('.bars');
    const open = document.querySelector('.open-btn');
    const close = document.querySelector('.close-btn');

    bars.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menuBelow.classList.toggle('hidden');
        open.classList.toggle('hidden');
        close.classList.toggle('hidden');

        // close menu when clicking on a link
        const links = document.querySelectorAll('.nav-list a', '.nav-below a');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menuBelow.classList.add('hidden');
                open.classList.remove('hidden');
                close.classList.add('hidden');
            });
        });

        // close menu when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target !== menu && e.target !== bars && e.target !== open && e.target !== close) {
                menu.classList.add('hidden');
                menuBelow.classList.add('hidden');
                open.classList.remove('hidden');
                close.classList.add('hidden');
                //   dropMenu.classList.add('hidden')
            }
        });

    });


// Drop menu on click

    const dropMenu = document.querySelector('.drop-menu');
    const dropBtn = document.querySelector('.drop-btn');

    dropBtn.addEventListener('click', () => {
        dropMenu.classList.toggle('hidden');

        // close menu when clicking on a link
        const links = document.querySelectorAll('.drop-menu a');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                dropMenu.classList.add('hidden');
            });
        });

        // close menu when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target !== dropMenu && e.target !== dropBtn) {
                dropMenu.classList.add('hidden');
            }
        })

    });


    // // Drop menu on hover
    // const dropMenu = document.querySelector('.drop-menu');
    // const dropBtn = document.querySelector('.drop-btn');


    // dropBtn.addEventListener('mouseover', () => {
    //     dropMenu.classList.remove('hidden');
    // });


    // dropBtn.addEventListener('mouseout', () => {
    //     dropMenu.classList.add('hidden');
    // });





    // Scroll to top button
    // const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset > 100) {
    //         scrollToTopBtn.classList.add('show-scroll-btn');
    //     } else {
    //         scrollToTopBtn.classList.remove('show-scroll-btn');
    //     }
    // });

    // scrollToTopBtn.addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    // });
    // });


});