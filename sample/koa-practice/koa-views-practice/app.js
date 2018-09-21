import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import router from './routes'

const app = new Koa()

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }))

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => console.log('server started 3000'))

export default app

