import React from 'react';

import Navbar from './Navbar';
import CartItem from './CartItem';
import '../assets/css/App.css'
import { addItems } from '../actions/index'
import { deleteItem } from '../actions/index'
import AddProducts from './AddProducts'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "page": 1,
      "sorted": true
    }
  }

  //loading the data from API to get all the produts
  async componentDidMount() {
    const { store } = this.props;
    const items = await fetch('https://my-json-server.typicode.com/anuragzv1/jsonserver/products');
    const itemjson = await items.json();
    store.dispatch(addItems(itemjson));
    this.forceUpdate();
  }

  //this function deletes the partifular item form the DB
  deleteItem = (item) => {
    const proArray = this.props.store.getState();
    const index = proArray.indexOf(item);
    proArray.splice(index, 1);
    this.props.store.dispatch(deleteItem(proArray));
    this.forceUpdate();
    window.alert(item.title + ' will be Deleted!');
  }

//this function deletes a particular item from DB
  editDescription = (item, desc) => {
    const proArray = this.props.store.getState();
    const index = proArray.indexOf(item);
    proArray[index].description = desc;
    this.props.store.dispatch(deleteItem(proArray));
    this.forceUpdate();
    window.alert('Description of ' + item.title + ' will be Updated!');

  }

  //function for page navigation
  changePage = (page) => {
    if (this.state.page === page) return;
    else this.setState({
      "page": page
    })
  }
//function to add products to the store
  addProduct = (item) => {
    const proArray = this.props.store.getState();
    proArray.push(item);
    this.props.store.dispatch(addItems(proArray));
    this.forceUpdate();
    window.alert(item.title + ' will be Added Now!!');
  }

  //sort and un sort the products
  sortUnSortProducts = async () => {
    console.log('function called');
    if (!this.state.sorted) {
      const proArray = this.props.store.getState();
      proArray.sort(function (a, b) {
        return b.price - a.price;
      });
      this.setState({
        sorted: true
      })
      this.props.store.dispatch(addItems(proArray));
      this.forceUpdate();

    }
    else {
      const { store } = this.props;
      const items = await fetch('https://my-json-server.typicode.com/anuragzv1/jsonserver/products');
      const itemjson = await items.json();
      store.dispatch(addItems(itemjson));
      this.setState({
        sorted: false
      })
      this.forceUpdate();
    }
  }

  //rendering my APP component here
  render() {
    const items = this.props.store.getState();

    return (
      <div className="App">
        <Navbar changePage={this.changePage} page={this.state.page} />
        <div className="sort-unsort"
          onClick={() => { this.sortUnSortProducts() }}
        >
          Sort items {this.state.sorted ? <img style={{ width: 10, height: 10 }} src="https://image.flaticon.com/icons/svg/1617/1617543.svg" /> : ""}
        </div>
        {this.state.page === 1 ?
          items.map((item, index) => (
            <CartItem editDescription={this.editDescription} deleteItem={this.deleteItem} key={index} item={item} store={this.props.store} />
          )) : <AddProducts prodArray={this.props.store.getState()} addProduct={this.addProduct} changePage={this.changePage} />}
      </div>
    );
  }
}

export default App;
