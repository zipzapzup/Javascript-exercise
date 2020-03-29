// Storage Controller

// ITEM CONTROLLER
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    // Note these are private data and cannot be accessed by the browser unless returned
    const data = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookie', calories: 400},
            // {id: 2, name: 'Eggs', calories: 300},

        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories){
            let ID;

            // Create ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            newItem = new Item(ID, name, calories);

            // Add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id) {
            let found = null;
            // loop though the items
            data.items.forEach(function(item) {
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories){
            // Calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function() {
            return data.currentItem;
        },
        getTotalCalories: function(){
            let total = 0;

            // Loop Through items and add cals
            data.items.forEach(function(item){
                total += item.calories;

            })

            // Set total
            data.totalCalories = total;

            // Return total
            return data.totalCalories;
        },

        logData: function(){
            return data;
        }
    }
})();





// UI CONTROLLER
const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    // Public Method
    return {
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<li id="item-${item.id}" class="collection-item"><strong>${item.name} </strong>  <em>${item.calories} </em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item){
            // Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // Create li element
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Add ID
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `<strong>${item.name} </strong>  <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
            </a>`;
            // Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)

        },
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';

        },
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.ShowEditState();

        },
        clearEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        ShowEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
})();







// APP CONTROLLER
const App = (function(ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();
        
        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }

        });


        // Edit Icon Click Event Listener
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);



        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    }

    // Add item submit
    const itemAddSubmit = function(e){
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();

        // Check for name and calorie input
        if(input.name !== '' && input.calories !== ''){
            // Add Item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            // Add Item to UI list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);
            
            // Clear fields
            UICtrl.clearInput();

        }


        e.preventDefault();
    }

    // Click edit Item
    const itemEditClick = function(e) {
        if(e.target.classList.contains('edit-item')) {
            // Get the list item ID (item-0, item-1)
            const listId = e.target.parentNode.parentNode.id;

            // Break into an array
            const listIdArr = listId.split('-');

            // Get the actual id
            const id = parseInt(listIdArr[1]);

            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();
        }

        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function(e){
        // Get item input
        const input = UICtrl.getItemInput();

        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);


        e.preventDefault();
    }

    // Public methods
    return {
        init: function(){
            console.log('Initializing App');
            // Clear Edit State or Set initial State
            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Check if any items
            if(items.length === 0){
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Populate list with Controller
            UICtrl.populateItemList(items);

            // Load event Listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();