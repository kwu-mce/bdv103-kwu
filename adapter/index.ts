import assignment from "./assignment-1";

export default assignment;

import Koa from 'koa';
import Router from 'koa-zod-router';
import { z } from 'zod';

const cors = require('@koa/cors');
const app = new Koa();
const router = Router();

router.register({
    name: 'books',
    method: 'get',
    path: '/books',
    handler: async (ctx, next) => {

    try {

        ctx.body = assignment.listBooks();

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
    name: 'booksbypricerange',
    method: 'get',
    path: '/books/price-range/:from/:to',
    handler: async (ctx, next) => {
    
    try {

        const range_from = ctx.params.from;
        const range_to = ctx.params.to;

        ctx.body = assignment.listBooks([{from: range_from, to:range_to}]);
    } catch {
        ctx.status = 500;
        ctx.body = 'Error fetching books';
    }
      await next();
    },
    validate: {
      params: z.object({ from: z.coerce.number(), to: z.coerce.number() }),
    //   body: z.object({ foo: z.number() }),
    //   response: z.object({ hello: z.string() }),
    },
  });

// app.use(cors());
app.use(router.routes());
app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
});