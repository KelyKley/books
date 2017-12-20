import store from "./store";
// import firebase from 'firebase';
import {database} from './firebase';
// export  search

const snapshotToArray = (snapshot, isbn) => {
    let list = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        let id = childSnapshot.key;
        item.id = id;
        list.push(item);
    });
    console.log('ListBooks', list);
    let equalBooks = list.filter(item => {
        return (item.isbn == isbn);
    })
    let  clone = [...store.getState().listbooks]
        clone = list;
        store.setState({
            listbooks: clone,
        });

    if(equalBooks.length > 0){
        console.log('EqualsBooks', equalBooks);
    let  clone1 = [...store.getState().listbooks]
    clone1 = equalBooks;
    store.setState({
            equalBooks: clone1,
        });
    // console.log('lsttt', equalBooks)
    } else {
        searchItunes(isbn);
        searchIGoogleBook(isbn);
    }
    
}

export const readAllBoards = (isbn) => {
    database
        .ref('books/')
        .once('value')
        .then(res => {
            snapshotToArray(res, isbn)
        });
}

export async function searchISBN (isbn) {
    console.log('isbn', isbn);
        // isbn : 9780316069359
    readAllBoards(isbn)
    // console.log('storeeee', store.getState().listbooks);
}
 
async function searchItunes(isbn) {
    // const isbn = '9780316069359';
    const bookItunes = await fetch(`https://itunes.apple.com/lookup?isbn=${isbn}`);
    const itunesJSON = await bookItunes.json();
    console.log('book-itunes', itunesJSON.results);

    if(itunesJSON.results.length > 0){

    const keyBoard = database.ref('books/').push({
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

async function searchIGoogleBook(isbn) {
// const isbn2 = '9786073126847';
    const bookGoogle = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const googleJSON = await bookGoogle.json();
    console.log('book-google', googleJSON.items);

    if(googleJSON.items){

    const keyBoard = database.ref('books/').push({
        isbn : isbn,
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