import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext";
import style from './css/style.module.css';
const Cards = ({ data }) => {
  const [Card_data, setCard_data] = useContext(CardContext);
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(data.quantity);
  const handleClick = async () => {
    let res = await fetch(`http://localhost:5000/products/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity: data.quantity - value }),
    });
    try {
      if (res.status === 200) {
        setQuantity(quantity - value);
        setCard_data((prev)=>{
            if(prev.length>0){
            if(prev.find((item)=>item.title===data.title)){
                let index=prev.findIndex((item)=>item.title===data.title);
                prev[index].quantity+=value;
                prev[index].price+=data.price*value;
                return [...prev];
            }
        }
          return [...prev,{title:data.title,quantity:value,price:data.price*value}]
        }
        )
        setValue(0);
      }
    } catch (err) {
    }

  };
  return (
    <>
                  <div className={style.card}>
                    <div className={style.header}>
                      <div className={style.content}>
                          <h2 className={style.title}>{data.title}</h2>
                          <h3 className={style.message}>{data.description}</h3>
                          <p className={style.message}>Price : {data.price}</p>
                          <p className={style.title}>Quantity: {quantity}</p>
                          <button className={style.btn} onClick={handleClick}>
                            +
                          </button>
                          <input
                            type="number"
                            min="0"
                            value={value}
                            max={quantity}
                            onChange={(e) => setValue(parseInt(e.target.value))}
                          />
                          <div className={style.price}>{ value > 0 && data.price * value}</div>
                          <Link className={style.pre} href="../Cards">Previous</Link>
                      </div>
                    </div>
                  </div>
    </>
  );
};
export default Cards;
