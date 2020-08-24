import React from 'react';

//this is the app product page contains a form to enter the data and submit in the store
class AddProducts extends React.Component{
    render(){
        const{prodArray}=this.props;
        return(
            <div className="add-products" style={styles.addProducts}>
                <h3>Fill the from below and Hit enter to add a new product :)</h3>
                <input id="newTitle" style={styles.input} type = "text" placeholder="Title"></input>
                <input id="newPrice" style={styles.input} type = "text" placeholder="Price"></input>
                <textarea id="newDesc"style={styles.input} placeholder="Description"></textarea>
                <input id = "newUrl" style={styles.input} type = "text" placeholder="Image url"></input>
                <button style={styles.button} onClick={()=>{
                    let newProd ={
                        "id":prodArray.length,
                        "title":document.getElementById('newTitle').value,
                        "description":document.getElementById('newDesc').value,
                        "img":document.getElementById('newUrl').value,
                        "price":document.getElementById('newPrice').value,
                        "rating":0
                    }
                    this.props.addProduct(newProd);
                    this.props.changePage(1);
                }} >Submit</button>
            </div>
        )
    }
}
const styles = {
    addProducts:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        margin:15,
        padding:10,
        border:'1px solid crimson',
        borderRadius:4
    },
    input:{
        width:250,
        height:30,
        border:0,
        outline:0,
        marginBottom:7,
        borderBottom:'1px solid crimson',

    },
    button:{
        width:150,
        

    }
}
export default AddProducts;