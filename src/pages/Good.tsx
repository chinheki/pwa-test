import React, { useEffect } from 'react';
import logo from './logo.svg';
import UseGoodsContents from '../utils/use-goods-contents';
import GoodList from './components/goodList';

function Good() {
  return (
    <UseGoodsContents.Provider value={{goods:[]}}>
    <div className="App">
      <header className="App-header">
        <p>
          Goods
        </p>
      </header>
      <body>
        <GoodList />
      </body>
    </div>
    </UseGoodsContents.Provider>
  );
}

export default Good;
