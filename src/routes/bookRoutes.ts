import Router from 'koa-zod-router';
import { z } from 'zod';
import {listBooks} from '../controllers/bookController';

import data from '../../mcmasteful-book-list.json';
import { Book } from '../models/bookModel';

const router = Router();

router.register({
  name: 'books',
  method: 'get',
  path: '/books',
  handler: async (ctx, next) => {

  try {
      var books: Book[] = data;
      // console.log(books);
      ctx.body = books;

  } catch {
      ctx.status = 500;
      ctx.body = 'Error fetching books';
  }
    await next();
  },
  validate: {
  //
  },
});

router.register({
  name: 'bookswithpricerange',
  method: 'get',
  path: '/books/price-range/:from/:to',
  handler: async (ctx, next) => {

  try {
      const range_from = ctx.params.from;
      const range_to = ctx.params.to;  
      var books: Book[] = data;

      if (range_from !== undefined && range_to !== undefined) {

          const filtered_books = books.filter((book) => book.price > range_from && book.price < range_to);
          books = filtered_books;

      }
      // console.log(books);
      ctx.body = books;

  } catch {
      ctx.status = 500;
      ctx.body = 'Error fetching books';
  }
    await next();
  },
  validate: {
      params: z.object({ from: z.coerce.number(), to: z.coerce.number() })
  },
});

export default router;