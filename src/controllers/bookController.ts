import data from '../../mcmasteful-book-list.json';
import { Book } from '../models/bookModel';
// import { Filter } from '../models/filterModel';
import { MongoDatabase, IBook } from '../controllers/db';

export class BookController {

    // get books
    async getBooks(): Promise<Book[]> {

        try {
            const db = MongoDatabase.getInstance();
            db.connect();
            const books = db.getBooks();

            return await books;
        } catch {
            throw new Error('Error fetching books');
        }
    }

    // get books by id
    async getBookById(id: string): Promise<Book | null> {

        try {
            const db = MongoDatabase.getInstance();
            db.connect();
            const book = db.getBookById(id);

            return await book;
        } catch {
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

        } catch {
            throw new Error('Error creating book');
        }
    }

    // update a book referenced by name
    async updateBook(updatedBook: IBook): Promise<Book> {
        try {
            
            const db = MongoDatabase.getInstance();
            db.connect();
            db.updateBook(updatedBook.id, updatedBook);

            return await updatedBook;
        } catch {
            throw new Error('Error updating book');
        }
    }

    // delete a book referenced by name
    async deleteBook(id: string): Promise<void> {
        try {
            
            const db = MongoDatabase.getInstance();
            db.connect();
            db.deleteBook(id);

        } catch {
            throw new Error('Error deleting book');
        }
    }

}

export function sum(a: number, b: number) {
    return a + b
  }

if (import.meta.vitest) {

const {it, expect} = import.meta.vitest
it('1+1=2', () => {
    expect(1+1).toBe(2)
})

}