function displayList() {
    const fruitsDiv = document.getElementById('fruits');
    const fruitItems = fruitsDiv.getElementsByTagName('p');

    // Create a new ul element
    const ul = document.createElement('ul');

    // Iterate through the p elements and create li elements
    for (let i = 0; i < fruitItems.length; i++) {
        const li = document.createElement('li');
        li.textContent = fruitItems[i].textContent;
        ul.appendChild(li);
    }

    // Replace the contents of the div with the ul element
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
}