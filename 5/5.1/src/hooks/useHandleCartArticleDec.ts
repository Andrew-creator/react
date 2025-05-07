import '@/assets/App.css'
import useStore from '@/stores/ShopStore'
import { useDispatch } from 'react-redux';
import {removeFromCart, updateQuantity} from '@/stores/CartStore'
import useGetArticleFromCart from '@/hooks/useGetArticleFromCart'


export function useHandleCartArticleDec(articleID, totalQuantity) {
    const dispatch = useDispatch()
    const cartArticle = useGetArticleFromCart(articleID)
    const cartAticleQuantity = (cartArticle == null) ? 0 : cartArticle.quantity
    const setQuantityArticle = useStore((state) => state.setQuantityArticle)

    const handleDec = () => {
      if (cartAticleQuantity === 1) {
        dispatch(removeFromCart(articleID))
      } else if (cartAticleQuantity > 0) {
        dispatch(updateQuantity({ id: articleID, quantity: cartAticleQuantity - 1 }))
      }
  
      setQuantityArticle(articleID, totalQuantity + 1)
    }
  
    return handleDec
  }
  