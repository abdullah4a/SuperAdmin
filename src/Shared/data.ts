import axios from "axios";
import { API } from "./config";
const getItems = async function() {
  const data = [];
  const response = await axios({
    method: "get",
    url: `${API}/Items.json`,
    responseType: "json",
  });
  data.push(parselist(response));
  return data;

  // return axios
  //     .get(`${API}/Items.json`)
  //     .then(function(response) {
  //         return buildResponse(response).then(results => res.send(results));
  //     })
  //     .catch(function(error) {
  //         handleError(error, res);
  //     });
  // let responce;
  // try {
  //     responce = axios.get(`${API}/Items.json`);
  //     let data = parselist(responce);
  //     console.log(data);
  //     return data;
  // } catch (error) {
  //     console.log("status is " + responce.status);
  //     console.log("data is " + responce.data);
  //     console.error(`There is an Error ${error.message}`);
  //     return null;
  // }
};
// parsing a Response for User and Cheking Status..
const parselist = (response: any) => {
  if (response.status != 200) throw Error(response.message);
  if (!response.data) return null;
  let list = response.data;
  console.log(list);
  if (typeof list != "object") {
    return (list = null);
  } else {
    return list;
  }
};
const ItemsGetFunction = function() {
  const Items = [];

  Items.push(
    getItems().then(function(result) {
      return result;
      // console.log(result)
    })
  );

  // Items = getItems();
  return Items;
};
const GetMaxID = () => {
  // return getItems.reduce(
  //     (acc, item) => (acc = acc > item.id ? acc : item.id),
  //     0
  // );
  return Math.max(...getItems.map((s: any) => s.id));
  // return 1;
};
const deleteItem = (id: any) => {
  // Object.keys(getItems).forEach(function(key) {
  //     if (getItems[key] === id) {
  //         delete getItems[key];
  //     }
  // });
  // console.log(item);
  // const index = getItems.indexOf(item);
  // if (index > -1) {
  //     getItems.splice(index, 1);
  // }
};
const AddItems = (item: any) => {
  //     this.Items.concat(this.NewItem);
  console.log(`Items are Added ${item}`);
};
export const Item = {
  ItemsGetFunction,
  GetMaxID,
  deleteItem,
  AddItems,
};
