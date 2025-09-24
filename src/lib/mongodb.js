import { MongoClient, ServerApiVersion } from "mongodb";

// Cached connection across hot-reloads in dev and across invocations in serverless
let cachedClient = global._mongoClient;
let cachedDb = global._mongoDb;
let indexesEnsured = global._mongoIndexesEnsured;

export async function getDb() {
  if (cachedDb && cachedClient) return cachedDb;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment variables");
  }

  const client = new MongoClient(uri, {
    // modern defaults
    serverSelectionTimeoutMS: 10000,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  try {
    await client.db("admin").command({ ping: 1 });
  } catch (_) {
    // ignore ping failures; serverSelectionTimeoutMS already guards connect
  }

  // If the URI contains a db name, driver will use it; else default to 'app'
  const dbNameFromUri = (() => {
    try {
      const url = new URL(uri.replace("mongodb+srv://", "https://").replace("mongodb://", "http://"));
      const pathname = url.pathname?.replace(/^\//, "");
      return pathname || "app";
    } catch (_) {
      return "app";
    }
  })();

  const db = client.db(dbNameFromUri);

  // Ensure critical indexes once per runtime
  if (!indexesEnsured) {
    try {
      await db.collection("blogs").createIndex({ slug: 1 }, { unique: true });
    } catch (_) {}
    global._mongoIndexesEnsured = true;
    indexesEnsured = true;
  }

  global._mongoClient = client;
  global._mongoDb = db;
  cachedClient = client;
  cachedDb = db;
  return db;
}


