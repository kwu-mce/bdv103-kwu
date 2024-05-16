import Router from 'koa-zod-router';
import { z } from 'zod';
import { BookController } from '../controllers/bookController';

const router = Router();
const bookController = new BookController();

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



export default router;