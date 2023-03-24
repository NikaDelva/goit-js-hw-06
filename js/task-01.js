const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:${categoriesEl.length}`)
categoriesEl.forEach(element => {
    const categoryName = element.firstElementChild;
    const categoriesNumber = element.lastElementChild.children.length;
    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoriesNumber}`)
})