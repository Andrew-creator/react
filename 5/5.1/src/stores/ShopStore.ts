import { create } from "zustand";
import { ArticleType } from '@/types/ArticleShema';

const articlesStore = create<ArticleType>((set, get) => ({
  articles: [ 
  { id: 1, name: "Bulbasaur", image: null, price: 100.0, quantity: 100.0 },
  { id: 2, name: "Ivysaur", image: null, price: 200.0, quantity: 200.0 },
  { id: 3, name: "Venusaur", image: null, price: 300.0, quantity: 300.0 },
  { id: 4, name: "Charmander", image: null, price: 400.0, quantity: 400.0 },
  { id: 5, name: "Charmeleon", image: null, price: 500.0, quantity: 500.0 },
],
getArticleForID: (articleID) => {
  const article = get().articles.find((element) => element.id === articleID);
  return article
},

getArticleForIDX: (articleIDX) => {
  const articles = get().articles;
  let article = null
  if (articles != null)
    if ((articleIDX>=0) && (articleIDX<articles.length)) article=articles[articleIDX]
  return article
},

getArticles: () => {
  return get().articles;
},

setQuantityArticle: (id, quantity: number) => {
  console.log(get().articles)
  set((state) => ({
    articles: state.articles.map(
      article => {
        if (article.id === id) {
          article.quantity = quantity
        }
        return article
      }
    )
  }))
  console.log(get().articles)
},

  incArticle: (id, quantity) =>
    set((state) => ({
      articles: state.articles.map(
        article => {
          if (article.id === id) {
            article.quantity += quantity
          }
          return article
       }
      )
    })),
  
  decArticle: (id, quantity) => 
  set((state) => ({
    articles: state.articles.map(
      article => {
        if (article.id === id) {
          article.quantity -= quantity
        }
        return article
      }
    )
  })),

  addArticle: (article) =>
  set((state) => ({
  articles: [
    article,
    ...state.articles,
  ]})),

removeArticle: (id) =>
  set((state) => ({
    articles: state.articles.filter( article => article.id !== id)
  })),
}))

export default articlesStore;
