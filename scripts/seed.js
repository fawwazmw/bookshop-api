// scripts/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

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

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        const MONGODB_URI = process.env.MONGODB_URI;

        if (!MONGODB_URI) {
            console.error('MONGODB_URI is not defined in environment variables');
            process.exit(1);
        }

        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);

        // Import Book model - make sure path is correct
        const Book = require('../models/book.model');

        // Check if books already exist
        const existingBooks = await mongoose.connection.collection('books').countDocuments();

        if (existingBooks > 0) {
            console.log(`Database already has ${existingBooks} books.`);
            const overwrite = process.argv.includes('--overwrite');

            if (overwrite) {
                console.log('Clearing existing books...');
                await mongoose.connection.collection('books').deleteMany({});
            } else {
                console.log('Use --overwrite flag to replace existing data');
                await mongoose.connection.close();
                return process.exit(0);
            }
        }

        // Insert books
        console.log('Seeding books collection...');
        await mongoose.connection.collection('books').insertMany(sampleBooks);
        console.log(`${sampleBooks.length} books added to the database!`);

        // Close connection
        await mongoose.connection.close();
        console.log('Database connection closed');
        process.exit(0);
    } catch (error) {
        console.error(`Error seeding database: ${error.message}`);
        process.exit(1);
    }
};

// Run the seed function
seedDatabase();