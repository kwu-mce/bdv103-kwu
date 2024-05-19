import mongoose, { mongo } from 'mongoose';
import data from '../../mcmasteful-book-list.json';
import { Book } from '../models/bookModel';
import { MongoDatabase, IBook } from '../controllers/db';

export class BookController {

    // get books
    async getBooks(): Promise<Book[]> {

        try {
            const db = MongoDatabase.getInstance();
            db.connect();
            var books = db.getBooks();

            // var books: Book[] = data;
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

    // create new book
    async createBook(newBook: IBook): Promise<Book> {
        try {
            const db = MongoDatabase.getInstance();
            db.connect();
            db.createBook(newBook);

            // data.push(newBook);
            return await newBook;

        } catch (error: any) {
            throw new Error('Error creating book');
        }
    }

    // update a book referenced by name
    async updateBook(updatedBook: IBook): Promise<Book> {
        try {
            // const index = data.findIndex(book => book.id === updatedBook.id);
            // if (index === -1) {
            //     throw new Error('Book not found');
            // }
            // data[index] = updatedBook;

            const db = MongoDatabase.getInstance();
            db.connect();
            db.updateBook(updatedBook.id, updatedBook);

            return await updatedBook;
        } catch (error: any) {
            throw new Error('Error updating book');
        }
    }

    // delete a book referenced by name
    async deleteBook(id: string): Promise<void> {
        try {
            // const index = data.findIndex(book => book.id === id);
            // if (index === -1) {
            //     throw new Error('Book not found');
            // }
            // data.splice(index, 1);

            const db = MongoDatabase.getInstance();
            db.connect();
            db.deleteBook(id);

        } catch (error: any) {
            throw new Error('Error deleting book');
        }
    }

}
