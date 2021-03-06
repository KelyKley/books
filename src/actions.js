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
    
    let  clone = [...store.getState().listbooks]
        clone = list;
        store.setState({
            listbooks: clone,
        });


        let equalBook = list.filter(item => {
        return (item.isbn == isbn);
    })
        console.log('EqualsBooks', equalBook);
        console.log('EqualsBooks', equalBook.length);
    if(equalBook.length > 0){
        console.log('EqualsBooks true');
    store.setState({
            equalBooks: equalBook,
        });
    console.log('lsttt', store.getState().equalBooks)
    } else {
        console.log('EqualsBooks false');
        searchItunes(isbn);
        searchIGoogleBook(isbn);
    }
    
}

export const readAllBoards = (isbn) => {
    database
        .ref('books/')
        .on('value', res => {
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
        console.log('trueitunes')
    const keyBoard = database.ref('books/').push({
        
        isbn: isbn,
        author : itunesJSON.results[0].artistName,
        title: itunesJSON.results[0].trackName,
        description: itunesJSON.results[0].description,
        img: itunesJSON.results[0].artworkUrl60,
        price: itunesJSON.results[0].price
            }).key;
        }
}

async function searchIGoogleBook(isbn) {
// const isbn2 = '9786073126847';
    const bookGoogle = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const googleJSON = await bookGoogle.json();
    console.log('book-google', googleJSON.items);

    if(googleJSON.items){

        console.log('truegoole')
        const keyBoard = database.ref('books/').push({
        isbn : isbn,
        author : googleJSON.items[0].volumeInfo.authors[0],
        title: googleJSON.items[0].volumeInfo.title,
        description: googleJSON.items[0].volumeInfo.description,
        img: googleJSON.items[0].volumeInfo.imageLinks.thumbnail,
        price: (googleJSON.items[0].saleInfo.listPrice)? googleJSON.items[0].saleInfo.listPrice.amount : '0.00'

    });
    }
}

export const selectBoard = (index) => {
    store.setState({selected: index})
}