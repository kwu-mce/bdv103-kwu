import assignment from "./assignment-1";

export default assignment;

const koa = require('koa');
const app = new koa();

app.use((t: { body: string; }) => {
    t.body = 'Helloe world!!';
});

app.listen(1231);