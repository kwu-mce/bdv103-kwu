import Router from 'koa-zod-router';
import { z } from 'zod';
import { BookController } from '../controllers/bookController';
import { IBook } from '../controllers/db';

const router = Router();
const bookController = new BookController();

// schema for book object
const bookSchema = z.object( {
  id: z.string().optional(),
  name: z.string(),
  author: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string()
});

router.register({
  name: 'getBooks',
  method: 'get',
  path: '/books',
  handler: async (ctx, next) => {
    try { 
      const books = await bookController.getBooks();

      ctx.body = books;

    } catch (error : any) {
      ctx.status = 500;
      ctx.body = error.message;
    }
    await next();
  },
  validate: {
  },
});

router.register({
  name: 'getBookById',
  method: 'get',
  path: '/books/:id',
  handler: async (ctx, next) => {
    try { 
      
      let id = ctx.params.id;
      const book = await bookController.getBookById(id);
      
      ctx.body = book;

    } catch (error : any) {
      ctx.status = 500;
      ctx.body = error.message;
    }
    await next();
  },
  validate: {
  },
});

router.register({
  name: 'createBook',
  method: 'post',
  path: '/books',
  handler: async (ctx, next) => {
    try {
      const newBook = ctx.request.body as IBook;
      const book = await bookController.createBook(newBook);
      
      ctx.body = book;

    } catch (error : any) {
      ctx.status = 500;
      ctx.body = error.message;
    }
    await next();
  },
  validate: {
    body: bookSchema
  },
});

router.register({
  name: 'updateBook',
  method: 'put',
  path: '/books/:id',
  handler: async (ctx, next) => {
    try {
      const updatedBook = ctx.request.body as IBook;
      updatedBook.id = ctx.params.id;
      const book = await bookController.updateBook(updatedBook);
      
      ctx.body = book;

    } catch (error : any) {
      ctx.status = 500;
      ctx.body = error.message;
    }
    await next();
  },
  validate: {
    params: z.object({ id: z.coerce.string() }),
    body: bookSchema
  },
});

router.register({
  name: 'deleteBook',
  method: 'delete',
  path: '/books/:id',
  handler: async (ctx, next) => {
    try {
      const id = ctx.params.id;
      await bookController.deleteBook(id);
      
      ctx.status = 200;
      ctx.body = 'Book deleted successfully';

    } catch (error : any) {
      ctx.status = 500;
      ctx.body = error.message;
    }
    await next();
  },
  validate: {
    params: z.object({ id: z.coerce.string() })
  },
});

export default router;