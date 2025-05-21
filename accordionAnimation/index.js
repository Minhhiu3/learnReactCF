const item = document.querySelectorAll('.accordion-question');
const content = document.querySelector('.accordion-answer');


// content.classList.toggle('active')
item.forEach(element => {
    element.addEventListener('click', function () {
        const contentt = this.nextElementSibling;
        const nowContent = document.querySelector('.accordion-answer.active');

        if (nowContent && nowContent !== contentt) {
            nowContent.classList.remove('active');
        }

        this.nextElementSibling.classList.toggle('active')

    })
});
console.log(item);
console.log(content);




