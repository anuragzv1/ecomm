//reducer for making an intent to change the state of app as expected
export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEMS':
            return action.items;

        case 'DEELTE_ITEM':
            return action.items;

        case 'EDIT_DESCRIPTION':
            return action.items;
        default:
            return state;
    }
}