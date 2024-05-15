import Router from 'koa-zod-router';
import { z } from 'zod';
import {listBooks} from '../controllers/bookController';

const router = Router();

// router.get(
//     '/',
//     {
//         query: z.object({
//             filters: z.array(z.object({
//                 from: z.number().optional(),
//                 to: z.number().optional(),
//             })).optional(),
//         }).passthrough(),
//     },
//     async (ctx : any) => {
//         try {
//             const books = await listBooks(ctx.request.query.filters);
//             ctx.body = books;
//         } catch (err : any) {
//             ctx.status = 500;
//             ctx.message = err.message;
//         }
//     }
// );


router.register({
    name: 'books',
    method: 'get',
    path: '/books',
    handler: async (ctx, next) => {

    try {
        console.log('reached here');
        listBooks();

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

// router.register({
//     name: 'books',
//     method: 'get',
//     path: '/books',
//     handler: async (ctx, next) => {

//     try {

//         ctx.body = assignment.listBooks();

//     } catch {
//         ctx.status = 500;
//         ctx.body = 'Error fetching books';
//     }
//       await next();
//     },
//     validate: {
//     //
//     },
//   });

// router.register({
//     name: 'booksbypricerange',
//     method: 'get',
//     path: '/books/price-range/:from/:to',
//     handler: async (ctx, next) => {
    
//     try {

//         const range_from = ctx.params.from;
//         const range_to = ctx.params.to;

//         ctx.body = assignment.listBooks([{from: range_from, to:range_to}]);
//     } catch {
//         ctx.status = 500;
//         ctx.body = 'Error fetching books';
//     }
//       await next();
//     },
//     validate: {
//       params: z.object({ from: z.coerce.number(), to: z.coerce.number() }),
//     //   body: z.object({ foo: z.number() }),
//     //   response: z.object({ hello: z.string() }),
//     },
//   });

export default router;