/**
 * TodoApp Server
 * https://github.com/facebook/react-native
 * @flow
 */
import 'babel-polyfill';
import Koa from 'koa';

 const app = new Koa();

 // uses async arrow functions
 app.use(async (ctx) => {
   ctx.body = { message: 'hello world' };
   ctx.status = 200;
 });

app.listen(3789);
