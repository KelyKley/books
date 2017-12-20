import store from "./store";
// import firebase from 'firebase';
import {database} from './firebase';
// export  search

// const snapshotToArray = (snapshot, userID) => {
//     snapshot.forEach(childSnapshot => {
//         let item = childSnapshot.val();
//         let id = childSnapshot.key;
//         item.id = id;
//         database.ref('users/'+userID+'/trello/' + id + '/stage/').once('value')
//             .then(res => {
//                 let listOfObjs = [];
//                 res.forEach(item => {
//                     let obj = item.val();
//                     let idList = item.key;
//                     obj.id = item.key;
//                     database.ref('users/'+userID+'/trello/' + id + '/stage/' + idList + '/task/').once('value')
//                         .then(task => {
//                             let taskObjs = [];
//                             task.forEach(item => {
//                                 let tasks = item.val();
//                                 tasks.id = item.key;
//                                 taskObjs.push(tasks)
//                             });

//                             obj.task = taskObjs;
//                         });

//                     listOfObjs.push(obj);
//                 })
//                 item.stage = listOfObjs;
//             })

//         const clone = [...store.getState().board]
//         console.log('itemmm', item)
//         clone.push(item);
//         store.setState({
//             board: clone
//         });
//     });
//     console.log('board', store.getState().board);
// }

// export const readAllBoards = (userID) => {
//     database
//         .ref('users/' + userID + '/trello/')
//         .once('value')
//         .then(res => {
//             snapshotToArray(res, userID)
//         });
// }

export async function searchISBN (isbn) {
    console.log('isbn', isbn);

    searchItunes();
    searchIGoogleBook();

}
 
async function searchItunes () {
    const isbn = '9780316069359';
    const bookItunes = await fetch(`https://itunes.apple.com/lookup?isbn=${isbn}`);
    const itunesJSON = await bookItunes.json();
    console.log('book-itunes', itunesJSON.results);

    if(itunesJSON.results.length){

    const keyBoard = database.ref('users/').push({
        isbn: isbn,
        author : itunesJSON.results[0].artistName,
        title: itunesJSON.results[0].trackName,
        description: itunesJSON.results[0].description,
        img: itunesJSON.results[0].artworkUrl60,
        price: itunesJSON.results[0].price
            }).key;
        }

    // let clone = [...store.getState().itunes, {
    //     author : itunesJSON.results[0].artistName,
    //     title: itunesJSON.results[0].trackName,
    //     description: itunesJSON.results[0].description,
    //     img: itunesJSON.results[0].artworkUrl60,
    //     price: itunesJSON.results[0].price
    // }];
    //     // clone = itunesJSON.results;
    //     store.setState ({
    //         itunes : clone
    //     })
}

async function searchIGoogleBook() {
const isbn2 = '9786073126847';
    const bookGoogle = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn2}`);
    const googleJSON = await bookGoogle.json();
    console.log('book-google', googleJSON.items.length);
    if(googleJSON.items.length > 0){
    const keyBoard = database.ref('users/').push({
        isbn:isbn2,
        author : googleJSON.items[0].volumeInfo.authors[0],
        title: googleJSON.items[0].volumeInfo.title,
        description: googleJSON.items[0].volumeInfo.description,
        img: googleJSON.items[0].volumeInfo.imageLinks.thumbnail,
        price: googleJSON.items[0].saleInfo.listPrice.amount

    });
    }

    // let clone = [...store.getState().googleBook, {
    //     author : googleJSON.items[0].volumeInfo.authors[0],
    //     title: googleJSON.items[0].volumeInfo.title,
    //     description: googleJSON.items[0].volumeInfo.description,
    //     img: googleJSON.items[0].volumeInfo.imageLinks.thumbnail,
    //     price: googleJSON.items[0].saleInfo.listPrice.amount
    // }
    // ];
    //     // clone = googleJSON.items;
    //     store.setState ({
    //         googleBook : clone
    //     });
        // console.log('store', store.getState().itunes, store.getState().googleBook)
}