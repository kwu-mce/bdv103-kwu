import Koa from 'koa';
import router from './routes/bookRoutes';

const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());
app.use(router.middleware());
app.listen(9000, () => {
    console.log('app listening on http://localhost:9000');
});