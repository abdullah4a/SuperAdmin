import axios from "axios"
import { API } from "./config"
const getItems = function() {
        let responce;
        try {
            responce = axios.get(API + "/Items.json");
            let data = parselist(responce);
            console.log(data);
            return data;
        } catch (error) {
            console.log("status is " + responce.status);
            console.log("data is " + responce.data);
            console.error(`There is an Error ${error.message}`);
            return null;
        }
    }
    // parsing a Response for User and Cheking Status..
const parselist = response => {
    if (response.status != 200) throw Error(response.message);
    if (!response.data) return null
    let list = response.data;
    if (typeof list != "object") {
        console.info("Data is not an object")
        return list = null;
    } else {
        return list;
    }
};
const GetMaxID = () => {
    // return getItems.reduce(
    //     (acc, item) => (acc = acc > item.id ? acc : item.id),
    //     0
    // );
    return Math.max(...getItems.map((s) => s.id));
    // return 1;
};
const deleteItem = id => {
    Object.keys(getItems).forEach(function(key) {
        if (getItems[key] === id) {
            delete getItems[key];
        }
    });
    // console.log(item);
    // const index = getItems.indexOf(item);
    // if (index > -1) {
    //     getItems.splice(index, 1);
    // }
};
const AddItems = item => {
    //     this.Items.concat(this.NewItem);
    const PostResponce = axios.post(`${API} /Items.json `, item)
    console.log(`
                Items are Added $ { item }
                `);
}
export const Items = {
    getItems,
    GetMaxID,
    deleteItem,
    AddItems
}