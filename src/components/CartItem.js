import React from 'react'
import "./CartItem.css"


function CartItem({ item, index, changeItemQuantity, deleteItem }) {
    
    return (
	<div className="CartItem">
	    <div className="CartItem-image">
		<img src={process.env.PUBLIC_URL + `/items/${item.image}`} alt="Item"/>    
            </div>
	    <div className="CartItem-info">
		<div className="info-title">
		    <h2>{item.title}</h2>
		</div>
		<div className="info-stock">{item.stock}</div>
		<div className="item-actions">
		    <div className="item-quantity">
			<select onChange={(e) => changeItemQuantity(e, index)} value={item.quantity}>
			    <option value="1">Qty: 1</option>	
			    <option value="2">Qty: 2</option>	
			    <option value="3">Qty: 3</option>	
			    <option value="4">Qty: 4</option>	
			    <option value="5">Qty: 5</option>	
			    <option value="6">Qty: 6</option>	
			    <option value="7">Qty: 7</option>	
			    <option value="8">Qty: 8</option>	
			</select>    
		    </div>
		    <div className="items-actions-divider">|</div>
		    <div className="item-delete" onClick={deleteItem.bind(this, index)}>Delete</div>	
		</div>
	    </div>	
	    <div className="CartItem-price">
		$<span className="item-price">{item.price}</span>	
	    </div>
	    
	</div>
    )
}

export default CartItem
