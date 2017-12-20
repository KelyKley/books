import store from "./store";
// export  search
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
    let clone = [...store.getState().itunes];
        clone = itunesJSON.results;
        store.setState ({
            itunes : clone
        })
}

async function searchIGoogleBook() {
const isbn2 = '9786073126847';
    const bookGoogle = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn2}`);
    const googleJSON = await bookGoogle.json();
    console.log('book-google', googleJSON.items);
    let clone = [...store.getState().googleBook];
        clone = googleJSON.items;
        store.setState ({
            googleBook : clone
        });
        console.log('store', store.getState().itunes, store.getState().googleBook)
}