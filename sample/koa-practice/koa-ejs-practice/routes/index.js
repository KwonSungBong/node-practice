import Router from'koa-router'

const router = new Router()

router.get('/', async (ctx, next) => {
    await ctx.render('index');
});

router.get('/user', async (ctx, next) => {
    const user = {
        name: {
            first: 'Tobi',
            last: 'Holowaychuk'
        },
        species: 'ferret',
        age: 3
    };
    await ctx.render('user', { user });
});

export default router