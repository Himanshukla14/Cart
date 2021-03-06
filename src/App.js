import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

 

    constructor(){
      super();
      this.state = {
        products: [{
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
          id: 3
        }]
      }
      //this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    handleIncreaseQuantity = (product) => {
      console.log('hey please increase the qty', product);

      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
        products
      })
    }

    handledecreaseQuantity = (product) => {
      console.log('hey please increase the qty', product);

      const { products } = this.state;
      const index = products.indexOf(product);

      if (products[index].qty === 0) {
        return;
      }
      products[index].qty -= 1;

      this.setState({
        products
      })
    }

    handleDeleteProduct = (id) => {


      const { products } = this.state;

      const items = products.filter((item) => item.id !== id)


      this.setState({
        products: items
      })
    }
    
    getCartCount = () =>{
      const {products}=this.state;

      let count = 0;

      products.forEach((product) =>{
       
        count+=product.qty;
      })
      
      return count;
    }

    getCartTotal = () =>{
      const { products }= this.state;
      let cartTotal=0;

      products.map((product)=>{
      cartTotal = cartTotal  + product.qty * product.price
      })
      return cartTotal;
    }

    render() {
      const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <h1>Cart</h1>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          ondecreaseQuantity={this.handledecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct} 
          />
          <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
