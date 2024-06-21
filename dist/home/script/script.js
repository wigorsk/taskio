
document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('nav').classList.remove('hidden');
    document.querySelector('nav').classList.add('block');

    document.querySelector('#opacity').classList.remove('hidden');
    document.querySelector('#opacity').classList.add('block');
});

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('nav').classList.remove('block');
    document.querySelector('nav').classList.add('hidden');

    document.querySelector('#opacity').classList.remove('block');
    document.querySelector('#opacity').classList.add('hidden');
});

