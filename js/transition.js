window.onload = () => {
    const transition = document.querySelector('.transition');
    const anc = document.querySelectorAll('.link');

    setTimeout(() => {
        transition.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anc.length; i++) {
        const a = anc[i];

        a.addEventListener('click', e => {
            e.preventDefault();

            let target = e.target.href;

            transition.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }

}
