window.onscroll = function() {
        const header = document.querySelector('header');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    };