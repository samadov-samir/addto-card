import Link from "next/link";
import style from './css/style.module.css';
const Cards=(props)=>{
    return(
        <>
        {
           props.data.map((item,index)=>{
                return (
                  <>
                  <div className={style.card}>
                    <div className={style.header}>
                      <div className={style.content}>
                        <h2 className={style.title}>{item.title}</h2>
                        <p className={style.message}>Price {item.price} Azn</p>
                        <Link className={style.btn} href={`Cards/${item.id}`}>Read more</Link>
                      </div>
                    </div>
                  </div>
                  </>
                )
            })
        }
        </>
    )
}
export default Cards;
