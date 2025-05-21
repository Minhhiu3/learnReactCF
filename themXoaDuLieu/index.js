let cout = 1;
const list = document.getElementById('list');
function addItem() {
    const elementDiv = document.createElement('div');
    elementDiv.innerText = `phan tu ${cout++}`;
    elementDiv.classList.add('item');
    list.appendChild(elementDiv)

};
function removeItem() {
    if (list.children.length <= 0) {
        alert(`k co element`);

    } else {
        const lastChild = list.lastElementChild;
        list.removeChild(lastChild);
        cout--;
    }
}
//addItem();
// document.addEventListener('click', function addItem() {
//     const elementDiv = document.createElement('div');
//     elementDiv.innerText = `phan tu ${cout++}`;
//     elementDiv.classList.add('item');
//     list.appendChild(elementDiv)
// });

// document.addEventListener('click', function removeItem() {
//     if (list.children.length <= 0) {
//         alert(`k co element`);

//     } else {
//         const lastChild = list.lastElementChild;
//         list.removeChild(lastChild);
//         cout--;
//     }
// })

