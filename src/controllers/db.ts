import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Document } from 'mongoose';

const BookSchema: Schema = new Schema({
    id: { type: String, required: false },
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

export interface IBook extends Document {
    id: string;
    name: string;
    author: string;
    description: string;
    price: number;
    image: string;
}

const BookModel = mongoose.model<IBook>('Book', BookSchema);

export class MongoDatabase {
    private static instance: MongoDatabase;

    private constructor() {}

    public static getInstance(): MongoDatabase {
        if (!MongoDatabase.instance) {
            MongoDatabase.instance = new MongoDatabase();
        }
        return MongoDatabase.instance;
    }

    public async connect(): Promise<void> {
        try {
            await mongoose.connect('mongodb://mongo:27017', {  });
            // console.log ('Connected to MongoDB');
        } catch (err) {
            console.log ('Error connecting to db', err);
        }
    }

    public async getBooks(): Promise<IBook[]> {
        return await BookModel.find();
    }

    public async getBookById(id: string): Promise<IBook | null> {
        return await BookModel.findById(id);
    }

    public async createBook(book: IBook): Promise<IBook> {
        const newBook = new BookModel(book);
        return await newBook.save();
    }

    public async updateBook(id: string, book: IBook): Promise<IBook | null> {
        return await BookModel.findByIdAndUpdate(id, book, { new: true });
    }

    public async deleteBook(id: string): Promise<IBook | null> {
        return await BookModel.findByIdAndDelete(id);
    }
}
