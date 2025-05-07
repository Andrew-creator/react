import ArticlesList from '@/components/ArticlesList';
import CartWidget from '@/components/cartWidget/CartWidget';
import React from 'react';

const MainPage = (): React.ReactNode => {
  return (
    <>
    <div><CartWidget /></div>
    <div>
      <ArticlesList />
    </div>
    </>
  );
};

export default MainPage;