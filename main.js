const resize = document.querySelectorAll('.title-point');
const image = document.querySelectorAll('.resize');

resize.forEach((faq, index) =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
        const isActive = faq.classList.contains('active');
        if (isActive) {
            image[index].src = '/assets/images/icon-minus.svg'; // Nowe źródło obrazu po kliknięciu
        } else {
            image[index].src = '/assets/images/icon-plus.svg'; // Źródło obrazu przed kliknięciem
        }
    })
})