import React from 'react';

import '../assets/css/CartItem.css'

//this is the cart Item pafe , this pade takes in item and displays it in a beautified way
class CartItem extends React.Component {


    render() {
        const { item } = this.props;
        return (
            <div className="cart-item">
                <div id={'prod-edit-' + item.id} className="edit-div" style={styles.editDiv}>
                    <textarea cols="70" rows="4" id={'prod-text-' + item.id} style={styles.textArea}>{item.description}</textarea>
                    <button onClick={() => {
                        this.props.editDescription(item, document.getElementById('prod-text-' + item.id).value);
                        document.getElementById('prod-edit-' + item.id).style.display = "none";
                    }}
                    >SAVE</button>
                </div>
                <div className="prod-desc">
                    <img
                        style={{ width: 130, height: 130, display: 'block' }}
                        src={item.img}
                    />
                    <div className="pricename">
                        <span style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20, display: 'block' }} className="prod-name">{item.title}</span>
                        <span style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 15, color: 'gray' }} className="prod-price">Rs {item.price}/-</span>
                    </div>

                    <div>
                        <div className="prod-text">
                            {item.description}
                        </div>
                        <div className="prod-action">
                            <img
                                style={{ width: 16, height: 16, cursor: 'pointer', marginLeft: 5 }}
                                src="https://image.flaticon.com/icons/svg/535/535524.svg"
                                onClick={() => {
                                    console.log('prod-edit-' + item.id);
                                    document.getElementById('prod-edit-' + item.id).style.display = "flex";
                                }}
                            />
                            <img
                                style={{ width: 16, height: 16, cursor: 'pointer', marginLeft: 5 }}
                                src="https://image.flaticon.com/icons/svg/2145/2145865.svg"
                                onClick={() => { this.props.deleteItem(item) }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

//stlyes  of the cart item
const styles = {
    editDiv: {
        backgroundColor: 'white',
        position: 'absolute',
        display: 'none',
        flexDirection: 'column',
        left: 230,
        zIndex: 2,
        padding: 20
    }
}

export default CartItem;