
//action type
const ADD_ITEMS = "ADD_ITEMS";

//action creators


module.exports = {

    addItems: function addItems(items) {
        return {
            type: ADD_ITEMS,
            items: items
        }
    },

    deleteItem: function deleteItem(items) {
        return {
            type: 'DELETE_ITEM',
            items: items
        }
    },
    editDescription: function (items){
        return {
            type:'EDIT_DESCRIPTION',
            items
        }
    }
}

