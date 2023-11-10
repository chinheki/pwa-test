import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import useGoodsContents from '../../utils/use-goods-contents';
import { MyGoods } from '../../utils/types';

function GoodList() {
const value=useContext(useGoodsContents)
    return (
        <div className="good-list">
        {value?.goods.map(g=>(
            <div className="good-row">
                {g.name}
            </div>
        )
        )}
            </div>
        
  );
}

export default GoodList;
