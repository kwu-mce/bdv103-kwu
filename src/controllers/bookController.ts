import data from '../../mcmasteful-book-list.json';
import { Book } from '../models/bookModel';


export class BookController {
    
    // get books
    async getBooks(): Promise<Book[]> {

        try {
            var books: Book[] = data;
            // console.log(books);
            return await books;
        } catch (error : any) {
            throw new Error('Error fetching books');
        }
    }
  
    // get books by price range
    async getBooksByPriceRange(from: number, to: number): Promise<Book[]> {
        try {
          
            const range_from = from;
            const range_to = to;  
            var books: Book[] = data;
    
            if (range_from !== undefined && range_to !== undefined) {
    
                const filtered_books = books.filter((book) => book.price > range_from && book.price < range_to);
                books = filtered_books;
    
            }
            // console.log(books);
            return await books;

        } catch (error : any) {
          throw new Error('Error fetching books');
        }
    }

    

  }
