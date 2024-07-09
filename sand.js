// Initialize an empty array to store shopping list items
let shoppingList = [];

// Function to render the shopping list
function renderList() {
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = ''; // Clear previous items

    shoppingList.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        if (item.completed) {
    
        itemElement.classList.add('completed');
        }
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <button class="markBtn">${item.completed ? 'Unmark' : 'Mark'}</button>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        // Event listener to mark item as completed or not
        itemElement.querySelector('.markBtn').addEventListener('click', () => {
            shoppingList[index].completed = !shoppingList[index].completed;
            renderList();
        });
        // Event listener to delete an item
        itemElement.querySelector('.deleteBtn').addEventListener('click', () => {
            shoppingList.splice(index, 1);
            renderList();
        });
        // Event listener to edit an item (bonus feature)
        itemElement.querySelector('.editBtn').addEventListener('click', () => {
            const newName = prompt('Edit item:', item.name);
            if (newName && newName.trim() !== '') {
                shoppingList[index].name = newName.trim();
                renderList();
            }
        });

        listContainer.appendChild(itemElement);
    });
}

// Event listener for adding an item
document.getElementById('addItemBtn').addEventListener('click', () => {
    const newItemName = document.getElementById('itemInput').value.trim();
    if (newItemName !== '') {
        shoppingList.push({ name: newItemName, completed: false });
        document.getElementById('itemInput').value = '';
        renderList();
    }
});

// Event listener for clearing the list
document.getElementById('clearListBtn').addEventListener('click', () => {
    shoppingList = [];
    renderList();
});

// Initial rendering of the list
renderList();
