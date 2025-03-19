

const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read-list');
    if(storedReadList){
        const storeList = JSON.parse(storedReadList);
        return storeList;
    }else{
        return [];
    }
}

const addToStoreReadList = (id) =>{
    const storeList = getStoredReadList();

    if(storeList.include(id)){
        console.log('id already exits')
    }else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list',storeListStr)
        return storeListStr;
    }
}