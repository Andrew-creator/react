import '@/assets/App.css'
import useStore from '@/stores/ShopStore'
import { useDispatch } from 'react-redux';
import {addToCart, updateQuantity} from '@/stores/CartStore'
import useGetArticleFromCart from '@/hooks/useGetArticleFromCart'


export function useHandleCartArticleInc(articleID, price, totalQuantity) {
    const dispatch = useDispatch()
    const cartArticle = useGetArticleFromCart(articleID)
    const cartAticleQuantity = (cartArticle == null) ? 0 : cartArticle.quantity
    const setQuantityArticle = useStore((state) => state.setQuantityArticle)

    const handleDec = () => {
      totalQuantity -= 1
      if (totalQuantity<0) totalQuantity=0
        else {
          if (cartArticle == null) dispatch(addToCart({id: articleID, price: price, quantity: 1 }))
            else dispatch(updateQuantity({ id: articleID, quantity: cartAticleQuantity + 1 }))
          setQuantityArticle(articleID, totalQuantity);
        }
    }
  
    return handleDec
  }
  