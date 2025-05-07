import '@/assets/App.css'
import useStore from '@/stores/ShopStore'
import CartArticleQuantityCounter from './CartArticleQuantityCounter'

function CartArticle(props) {
  const getArticle = useStore((state) => state.getArticleForID)
  const article = getArticle(props.article.id)

  return (
    <>
    <div style={{ 
      backgroundColor: 'lightGray', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      borderRadius: '20px',
      padding: '10px',
    }}>
      { props.article.image != null && <div><img src={props.article.image}></img></div> }
      { props.article.name != null && <div>{props.article.name}</div> }
      <div>{props.article.price} р</div>
      <CartArticleQuantityCounter cartArticle={props.article} article={article} />
    </div>
    </>
  )
}

export default CartArticle
