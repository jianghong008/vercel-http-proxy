import Koa from 'koa'

const app = new Koa({ proxy: true });
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});
app.use(async (ctx, next) => {
    ctx.body = 'hello world'
    await next()
})
app.listen(3000);