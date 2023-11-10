import { createContext } from 'react';
import { MyGoods } from './types';

const DEFAULT_CALLBACK = () => Promise.resolve(undefined);

export default createContext<MyGoods | undefined>(undefined);

export const UpdateMyGoodContext = createContext<() => Promise<MyGoods | undefined>>(DEFAULT_CALLBACK);

