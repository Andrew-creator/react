import '@/assets/App.css'
import { useHandleCartArticleDec } from '@/hooks/useHandleCartArticleDec';

function CartArticleQuantityDecButton(props) {
  const articleID = props.article.id
  const quantity = props.article.quantity
  const handleDec = useHandleCartArticleDec(articleID, quantity)

  return <button onClick={handleDec}>-</button>;
}

export default CartArticleQuantityDecButton
