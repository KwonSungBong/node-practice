import Koa from 'koa'
import path from 'path'
import render from 'koa-ejs'
import router from './routes'

const app = new Koa()

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => console.log('server started 3000'))

export default app

