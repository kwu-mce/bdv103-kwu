import data from '../../mcmasteful-book-list.json';
import { Book } from '../models/bookModel';

export async function listBooks(filters?: Array<{from?: number, to?: number}>){
    
    try {
        // console.log(filters);
        
        var books: Book[] = data;

        if (filters) {
            filters.forEach(filterObj => {
                if (filterObj.from !== undefined && filterObj.to !== undefined) {

                    const filtered_books = books.filter((book) => book.price > filterObj.from! && book.price < filterObj.to!);
                    books = filtered_books;

                }
            });
        }
        console.log(books);

        return books;
    
    } catch {
        throw new Error("Error finding book list")
    }
    
}