import '@/assets/App.css'
import ArticleQuantityDecButton from './ArticleQuantityDecButton'
import ArticleQuantityIncButton from './ArticleQuantityIncButton'

function ArticleQuantityCounter(props) {

  const cartQuantity= props.cartQuantity
  const articleQuantity= props.article.quantity

  if (cartQuantity == 0) 
  return (
    <>
    <ArticleQuantityIncButton article={props.article} />
    </>
  )
  else
    return (
      <>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <ArticleQuantityDecButton article={props.article} />
      <div>{cartQuantity} ({articleQuantity})</div>
      <ArticleQuantityIncButton article={props.article} />
      </div>
      </>
    )
}

export default ArticleQuantityCounter
