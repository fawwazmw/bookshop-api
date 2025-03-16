// config/db.config.js
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection URL from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Sample books data
const sampleBooks = [
    {
        isbn: '9780451524935',
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel set in a totalitarian society.'
    },
    {
        isbn: '9780061120084',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel about racial injustice in the American South.'
    },
    {
        isbn: '9780141439518',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel of manners.'
    },
    {
        isbn: '9780743273565',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel about the American Dream in the Jazz Age.'
    },
    {
        isbn: '9780061122415',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'A philosophical novel about following your dreams.'
    }
];

// Seed database with initial data
const seedDatabase = async () => {
    try {
        // Check if books already exist
        const bookCount = await mongoose.connection.collection('books').countDocuments();

        if (bookCount === 0) {
            console.log('No books found, seeding database...');
            await mongoose.connection.collection('books').insertMany(sampleBooks);
            console.log(`${sampleBooks.length} books added to the database!`);
        } else {
            console.log(`Database already contains ${bookCount} books. Skipping seed.`);
        }
    } catch (error) {
        console.error(`Error seeding database: ${error.message}`);
    }
};

// Connect to MongoDB
const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        console.log('Attempting to connect to MongoDB...');
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Seed the database
        await seedDatabase();

        return conn;
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
    sampleBooks
};