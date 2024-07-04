import Koa from 'koa';
import router from './routes/bookRoutes';
import { koaSwagger } from 'koa2-swagger-ui';
import { Swagger } from 'tsoa';
import { launchTestServer } from './index_test';

const cors = require('@koa/cors');
const app = new Koa();

launchTestServer();

app.use(cors());
app.use(router.middleware());
app.listen(9000, () => {
    console.log('app listening on http://localhost:9000');
});

app.use(koaSwagger({
    routePrefix: '/docs',
    specPrefix: '/docs/spec',
    exposeSpec: true,
    swaggerOptions: {
      spec: Swagger 
    }
  
  }))
  