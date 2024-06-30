import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

export const startMongoServer = async () => {
    mongoServer = await MongoMemoryServer.create();
    process.env.MONGO_URI = mongoServer.getUri();
};

export const stopMongoServer = async () => {
    if (mongoServer) {
        await mongoServer.stop();
    }
};