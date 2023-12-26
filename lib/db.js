import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    // 'mongodb+srv://<username>:<password>@cluster0.ei0iaka.mongodb.net/<DBName>?retryWrites=true&w=majority'
  );

  return client;
}