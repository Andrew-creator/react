import '@/assets/App.css'
import articleStore from '@/stores/ShopStore'
import { Container, Grid, Typography } from '@mui/material';
import Article from '@/components/article/Article'

function ArticlesList() {
  const articles = articleStore((state) => state.articles);

  return (
    <Container maxWidth="sx">
      <Grid
        container
        spacing={2}
      >
        {articles.map((article) => (
          <Grid key={article.id}>
            <Article article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ArticlesList
