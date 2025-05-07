import '@/assets/App.css'
import ArticleQuantityCounter from './ArticleQuantityCounter'
import GetArticleFromCart from '@/hooks/useGetArticleFromCart'

function Article(props) {
  const cartArticle=GetArticleFromCart(props.article.id)
  const cartQuantity=(cartArticle==null) ? 0 : cartArticle.quantity
  return (
    <>
    <div style={{
       backgroundColor: '#FF0000',
        display: 'flex',
         flexDirection: 'column',
          justifyContent: 'center',
           borderRadius: '20px',
            padding: '10px',
    }}>
      { props.article.image != null && <div><img src={props.article.image}></img></div> }
      { props.article.name != null && <div>{props.article.name}</div> }
      { props.article.description != null && <div>{props.article.description}</div> }
      <div>{props.article.price} р</div>
      <ArticleQuantityCounter article={props.article} cartQuantity={cartQuantity} />
    </div>
    </>
  )
}

export default Article
