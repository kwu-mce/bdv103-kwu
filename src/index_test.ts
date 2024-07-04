import Koa from 'koa';
import router from '../test/bookRoutes.spec';

export async function launchTestServer () {

  const cors = require('@koa/cors');
  const app = new Koa();

  app.use(cors());
  app.use(router.middleware());
  return app.listen(8000, () => {
      console.log('app listening on http://localhost:8000');
  });

}

  
