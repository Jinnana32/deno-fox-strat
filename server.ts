import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes.ts'

const app = new Application()
const port = 3000

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Server is running on localhost:${port}`)
await app.listen({ port })