import Router from 'koa-zod-router';
import { z } from 'zod';
import { BookController } from '../controllers/bookController';

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
  name: 'getBooksByPriceRange',
  method: 'get',
  path: '/books/price-range/:from/:to',
  handler: async (ctx, next) => {
    try {
      const range_from = ctx.params.from;
      const range_to = ctx.params.to;  
      const books = await bookController.getBooksByPriceRange(range_from, range_to);
      
      ctx.body = books;

    } catch (error : any) {
      ctx.status = 500;
      ctx.body = error.message;
    }
    await next();
  },
  validate: {
    params: z.object({ from: z.coerce.number(), to: z.coerce.number() })
  },
});

router.register({
  name: 'createBook',
  method: 'post',
  path: '/books',
  handler: async (ctx, next) => {
    try {
      const newBook = ctx.request.body;
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
      const updatedBook = ctx.request.body;
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