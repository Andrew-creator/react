import '@/assets/App.css'
import { useHandleCartArticleInc } from '@/hooks/useHandleCartArticleInc';

function ArticleQuantityIncButton(props) {
  const articleID = props.article.id
  const price = props.article.price
  const quantity=props.article.quantity
  const handleInc = useHandleCartArticleInc(articleID, price, quantity)

  return <button onClick={handleInc}>+</button>;
}

export default ArticleQuantityIncButton
