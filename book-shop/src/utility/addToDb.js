import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedReadList = localStorage.getItem('read-list');
    if (storedReadList) {
        return JSON.parse(storedReadList);
    }
    return [];
}



const addToStoreReadList = (id) => {
    const storeList = getStoredReadList();
    const idStr = String(id); // Convert id to string

    if (storeList.includes(idStr)) {
        console.log('id already exists');
    } else {
        storeList.push(idStr); // Store as string
        localStorage.setItem('read-list', JSON.stringify(storeList));
        toast.success('add read list')
        return storeList;
    }
}

const getStoreWishList = ()=>{
    const storeWishList = localStorage.getItem('wish-list');
    if(storeWishList){
        return JSON.parse(storeWishList);
    }

    return [];
}

const addToStoreWishList = (id) =>{
    const exitsWishList = getStoreWishList(id);
    const idStr = String(id);

    if(exitsWishList.includes(idStr)){
        console.log('wish list already added');
    }{
        exitsWishList.push(idStr);
        localStorage.setItem('wish-list',JSON.stringify(exitsWishList));
        return exitsWishList;
    }
}

export { addToStoreReadList,addToStoreWishList,getStoredReadList,getStoreWishList };
