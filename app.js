import axios from "axios";

export default async function getData(userid){
    let userurl ="https://jsonplaceholder.typicode.com/users/";
    let userdata = await axios(userurl + userid);
    let extractedud = await userdata.data;

    let posturl = "https://jsonplaceholder.typicode.com/posts?userId=";
    let postsdata = await axios(posturl + userid);
    let extractedpd = await postsdata.data;

    let completedata = {...extractedud, posts:extractedpd};
    // console.log(completedata);

    return completedata;
}