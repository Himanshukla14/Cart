import React from 'react';



const CartItem =(props) =>{
  const {price,title,qty}=props.product;
        const{product,onIncreaseQuantity,ondecreaseQuantity,onDeleteProduct}=props;
        return(
        <div className="cart-item">
            <div className="left-block">
            <img  style={styles.image} src={product.img} alt="" />
            </div>
            <div className="right-block">
         <div style={{color:'#777'}}>{title}</div>
         <div style={{color:'#777'}}>Rs {price}</div>
          <div style={{color:'#777'}}>{qty}</div>

             <div className="cart-item-actions">
                 {/*buttons*/}
                 <img 
                 alt="increase" 
                 className="actions-icons" 
                 src="http://image.flaticon.com/icons/svg/1828/1828919.svg"
                 onClick={ () => onIncreaseQuantity(product)}/>
                

                 <img
                  alt="decrease" 
                  className="actions-icons"
                   src="http://image.flaticon.com/icons/svg/992/992683.svg"
                   onClick={ () => ondecreaseQuantity(product)}/>

                 <img 
                 alt="delete" 
                 className="actions-icons" 
                 src="http://image.flaticon.com/icons/svg/1345/1345874.svg"
                 onClick={ () => onDeleteProduct(product.id)}/>
                 
             </div>
            
            </div>
        </div>
      );
    
}

const styles={
    image:{
        height:110,
        width:150,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;