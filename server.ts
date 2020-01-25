import { readJson } from 'https://deno.land/std/fs/mod.ts';
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
router
  .get('/', (context: any) => {
    context.response.body = 'Hello world!';
  })
  .get('/data', async (context: any) => {
    const data = await readJson('./data.json');
    context.response.body = data;
  })
  .get('/fetch', async (context: any) => {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon/bulbasaur'
    ).then(res => res.json());
    context.response.body = JSON.stringify(res, null, 4);
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen('127.0.0.1:8080');
