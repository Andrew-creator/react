import { useSelector } from 'react-redux';

function useGetArticleFromCart(articleID) {
    const cartArticles = useSelector((state) => state.cart.cartArticles);
    return cartArticles.find((element) => element.id === articleID)
}

export default useGetArticleFromCart;
