import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext";
import style from './css/style.module.css';
const Basket = () => {
const [Card_data, setCard_data] = useContext(CardContext);
const [hidden,setHidden]=useState(true);
return (
    <>
    <button className={style.basket} onClick={()=>setHidden(!hidden)}>Sebet</button>
    {!hidden &&
    Card_data.length>0 && Card_data.map(card=>{
        return (
            <>  
    <div className={style.basketBody}>
        <h3 className={style.description}>Name: {card.title}</h3>
        <h4 className={style.description}>Price: {card.price}</h4>
        <h5 className={style.description}>Quantity:{card.quantity}</h5>
      </div>
      </>
        )
    })
   }
    </>
)
}
export default Basket;