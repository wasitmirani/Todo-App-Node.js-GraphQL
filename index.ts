import { env } from 'process';
import { App } from './app';

async function main() {
    const PORT = process.env.APP_PORT || 3000;
    const app = new App(PORT);
   
    await app.listen();
}

main();
