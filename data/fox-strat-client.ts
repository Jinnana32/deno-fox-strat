import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://powerofpanda:Jinnana3232##@fox-strat.6vyrf.mongodb.net/foxstrat?retryWrites=true&w=majority");

const db = client.database("foxstrat")

export default db