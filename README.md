# Bookshop API Guide

This guide will help you test all endpoints for your Node.js, Express, and MongoDB assignment. Follow these steps to test each task and capture the required screenshots.

## Prerequisites

1. Ensure MongoDB connection is working
2. Install dependencies with `npm install`
3. Start the server with `npm run dev`
4. Use Postman, Insomnia, or any API testing tool

## 1.Get All Books

**Endpoint:** GET http://localhost:5000/api/books

**Expected Response:**
```json
[
  {
    "_id": "...",
    "isbn": "9780451524935",
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian novel set in a totalitarian society.",
    "createdAt": "2023-03-15T12:34:56.789Z"
  },
  ...
]
```

**Screenshot:** 
![Get All Books](http://assets/images/readme/1-getallbooks.png?raw=true)

## 2.Get Book by ISBN

**Endpoint:** GET http://localhost:5000/api/books/isbn/9780451524935

**Expected Response:**
```json
{
  "_id": "...",
  "isbn": "9780451524935",
  "title": "1984",
  "author": "George Orwell",
  "description": "A dystopian novel set in a totalitarian society.",
  "createdAt": "2023-03-15T12:34:56.789Z"
}
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 3.Get Books by Author

**Endpoint:** GET http://localhost:5000/api/books/author/Orwell

**Expected Response:**
```json
[
  {
    "_id": "...",
    "isbn": "9780451524935",
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian novel set in a totalitarian society.",
    "createdAt": "2023-03-15T12:34:56.789Z"
  }
]
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 4.Get Books by Title

**Endpoint:** GET http://localhost:5000/api/books/title/1984

**Expected Response:**
```json
[
  {
    "_id": "...",
    "isbn": "9780451524935",
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian novel set in a totalitarian society.",
    "createdAt": "2023-03-15T12:34:56.789Z"
  }
]
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 5.Get Book Reviews

**Endpoint:** GET http://localhost:5000/api/books/9780451524935/reviews

**Expected Response:**
```json
[
   {
      "_id": "...",
      "isbn": "9780451524935",
      "userId": "67d6f2d491cb1ae906c9a36d",
      "username": "budiono",
      "rating": 5,
      "comment": "An amazing dystopian novel that's still relevant today.",
      "updatedAt": "2025-03-16T16:02:04.201Z",
      "createdAt": "2025-03-16T16:02:04.201Z",
      "__v": 0
   }
]
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 6.Register New User

**Endpoint:** POST http://localhost:5000/api/auth/register
**Headers:** Content-Type: application/json
**Body:**
```json
{
   "username": "budiono",
   "password": "budi123",
   "email": "budi@example.com"
}
```

**Expected Response:**
```json
{
   "success": true,
   "message": "User registered successfully",
   "user": {
      "id": "...",
      "username": "budiono",
      "email": "budi@example.com"
   }
}
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 7.Login

**Endpoint:** POST http://localhost:5000/api/auth/login
**Headers:** Content-Type: application/json
**Body:**
```json
{
   "username": "budiono",
   "password": "budi123"
}
```

**Expected Response:**
```json
{
   "success": true,
   "message": "Login successful",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
   "user": {
      "id": "...",
      "username": "budiono",
      "email": "budi@example.com"
   }
}
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

**Important:** Save the token for the next tasks!

## 8.Add/Modify a Book Review

**Endpoint:** POST http://localhost:5000/api/books/9780451524935/reviews
**Headers:**
- Content-Type: application/json
- Authorization: Bearer YOUR_TOKEN_HERE

**Body:**
```json
{
  "rating": 5,
  "comment": "An amazing dystopian novel that's still relevant today."
}
```

**Expected Response:**
```json
{
   "success": true,
   "message": "Review added successfully",
   "review": {
      "isbn": "9780451524935",
      "userId": "...",
      "username": "budiono",
      "rating": 5,
      "comment": "An amazing dystopian novel that's still relevant today.",
      "updatedAt": "2025-03-16T16:02:04.201Z",
      "_id": "...",
      "createdAt": "2025-03-16T16:02:04.201Z",
      "__v": 0
   }
}
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 9.Delete a Book Review

**Endpoint:** DELETE http://localhost:5000/api/books/9780451524935/reviews
**Headers:**
- Authorization: Bearer YOUR_TOKEN_HERE

**Expected Response:**
```json
{
   "success": true,
   "message": "Review deleted successfully",
   "review": {
      "_id": "...",
      "isbn": "9780451524935",
      "userId": "...",
      "username": "budiono",
      "rating": 5,
      "comment": "An amazing dystopian novel that's still relevant today.",
      "updatedAt": "2025-03-16T16:00:56.594Z",
      "createdAt": "2025-03-16T16:00:56.594Z",
      "__v": 0
   }
}
```

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 10.Get All Books Using Async Callback

**Endpoint:** GET http://localhost:5000/api/books/async/books

**Expected Response:**
Same as Task 1

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 11.Search by ISBN Using Promises

**Endpoint:** GET http://localhost:5000/api/books/promise/isbn/9780451524935

**Expected Response:**
Same as Task 2

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 12.Search by Author Using Promises

**Endpoint:** GET http://localhost:5000/api/books/promise/author/Orwell

**Expected Response:**
Same as Task 3

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## 13.Search by Title Using Promises

**Endpoint:** GET http://localhost:5000/api/books/promise/title/1984

**Expected Response:**
Same as Task 4

**Screenshot:**
![Get All Books](http://assets/images/readme/2-gedetailsISBN.png?raw=true)

## Troubleshooting

### Common Issues

1. **MongoDB Connection Issues:**
    - Check that MongoDB Atlas is running
    - Verify your connection string is correct
    - Check for network/firewall issues

2. **Authentication Problems:**
    - Make sure to include the Bearer token with the word "Bearer" followed by a space
    - Check that your token hasn't expired
    - Verify you're using the correct token

3. **Review Operations Failing:**
    - Ensure you're logged in and using a valid token
    - Check that the ISBN exists in the database
    - Ensure you've included all required fields (rating, comment)

### Helpful Commands

- Check if MongoDB is connected: `GET http://localhost:5000/api`
- Seed database (if empty): `npm run seed`
- Restart server: `npm run dev`