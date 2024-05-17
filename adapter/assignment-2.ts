import assignment1 from "./assignment-1";

export type BookID = string;

export interface Book {
    id?: BookID,
    name: string,
    author: string,
    description: string,
    price: number,
    image: string,
};

async function listBooks(filters?: Array<{from?: number, to?: number}>) : Promise<Book[]>{
    return assignment1.listBooks(filters);
}

async function createOrUpdateBook(book: Book): Promise<BookID> {

    try {
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        } 
    
        const response = await fetch('http://localhost:9000/books', settings);
        const newBook : Book = await response.json() as Book;
    
        return newBook.id!;
    } catch (err : any) {
        throw new Error
    }
    
}

async function removeBook(book: BookID): Promise<void> {

    try {
        // console.log (`book= ${book}`);

        const settings = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        } 
        
        const response = await fetch(`http://localhost:9000/books/${book}`, settings);
    
    } catch (err : any) {
        throw new Error(err)
    }
}

const assignment = "assignment-2";

export default {
    assignment,
    createOrUpdateBook,
    removeBook,
    listBooks
};