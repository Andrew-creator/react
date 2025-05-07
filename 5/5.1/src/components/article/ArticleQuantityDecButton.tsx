import '@/assets/App.css'
import '@/assets/App.css'
import { useHandleCartArticleDec } from '@/hooks/useHandleCartArticleDec';

function ArticleQuantityDecButton(props) {
  const articleID = props.article.id
  const quantity = props.article.quantity
  const handleDec = useHandleCartArticleDec(articleID, quantity)

  return <button onClick={handleDec}>-</button>;
}
export default ArticleQuantityDecButton
