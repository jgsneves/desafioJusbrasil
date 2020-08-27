import { useState, useEffect } from 'react';

const Store = () => {
    const [shoppingCartList, setShoppingCartList] = useState<IProduct[]>([]);
    const [cartValue, setCartValue] = useState(0);

    const addNewItem = (item: IProduct) => {
        const ItemIndex = shoppingCartList.findIndex(product => product.id === item.id);
        if (ItemIndex === -1) {
            setShoppingCartList([item, ...shoppingCartList]);
        } else {
            const newCardList = [...shoppingCartList];
            newCardList[ItemIndex].count += 1;
            setShoppingCartList(newCardList);
        }
    }
    const removeItem = (index: number) => {
        const newCardList = [...shoppingCartList];
        newCardList.splice(index, 1);
        setShoppingCartList(newCardList);
    }

    useEffect(() => {
        setCartValue(shoppingCartList.reduce(
            (acc, current) => acc + (current.price * current.count), 0
        ));
    }, [shoppingCartList]);

    return {shoppingCartList, addNewItem, removeItem, cartValue};
}

export default Store;