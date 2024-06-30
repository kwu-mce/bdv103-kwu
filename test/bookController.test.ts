import { describe, test, expect, beforeAll, afterAll, it} from 'vitest';
import { sum } from '../src/controllers/bookController';
import { MongoClient } from 'mongodb';
import { startMongoServer, stopMongoServer } from './setupMongoTest';

let client;
let db;
let uri; 

describe ('sum', () => {

    test('sum of numbers expected', async () => {
        expect(sum(1, 4)).toBe(5);
    })

})

beforeAll(async () => {
    startMongoServer;
    uri = <string>process.env.MONGO_URI;
    client = new MongoClient(uri);
    await client.connect();
    db = client.db();
});

afterAll(async () => {
    stopMongoServer;
})

it('insert and find book in db', async () => {
    const collection = db.collection('books');
    const testBook = {  name: 'test',
                        author: 'testauthor',
                        description: 'testdesc',
                        price: 10,
                        image: 'google.ca'}
    await collection.insertOne(testBook);
    const insertData = await collection.findOne({name: 'test'});
    expect(insertData).toEqual(testBook);
})
