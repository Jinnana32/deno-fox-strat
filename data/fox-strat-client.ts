import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const dbName = "foxstrat"
const client = new MongoClient();
client.connectWithUri(`mongodb+srv://powerofpanda:L4HALAAkf3Bca8VN@fox-strat.6vyrf.mongodb.net/${dbName}?retryWrites=true&w=majority`);

const db = client.database(dbName)

export default db