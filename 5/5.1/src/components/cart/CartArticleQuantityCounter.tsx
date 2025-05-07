import '@/assets/App.css'
import CartArticleQuantityDecButton from './CartArticleQuantityDecButton'
import CartArticleQuantityIncButton from './CartArticleQuantityIncButton'

function CartArticleQuantityCounter(props) {

  const cartQuantity = props.cartArticle.quantity
  const article = props.article

  if (cartQuantity == 0) 
  return (
    <>
    <CartArticleQuantityIncButton cartArticle={props.cartArticle} article={article} />
    </>
  )
  else
    return (
      <>
      <div style={{
        display: 'flex',
        flex_direction: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CartArticleQuantityDecButton cartArticle={props.cartArticle} article={article} />
      <div style={{ minWidth: '40px'}}>{cartQuantity}</div>
      <CartArticleQuantityIncButton cartArticle={props.cartArticle} article={article} />
      </div>
      </>
    )
}

export default CartArticleQuantityCounter
