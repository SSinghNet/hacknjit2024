
# API Documentation

Welcome to the API documentation for our application. This document provides detailed information about the available endpoints for managing **Items** and **Users**. The API is built using **Express.js** and **Firebase Firestore**.

## Table of Contents

- [Base URL](#base-url)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Items](#items)
    - [Get All Items](#get-all-items)
    - [Get Item by ID](#get-item-by-id)
    - [Create a New Item](#create-a-new-item)
  - [Users](#users)
    - [Get User by ID](#get-user-by-id)
    - [Get User's Items](#get-users-items)
    - [Create a New User](#create-a-new-user)
- [Error Handling](#error-handling)
- [Data Models](#data-models)
  - [Item](#item)
  - [User](#user)
- [Examples](#examples)
  - [Get All Items](#get-all-items-example)
  - [Get Item by ID](#get-item-by-id-example)
  - [Create a New Item](#create-a-new-item-example)
  - [Get User by ID](#get-user-by-id-example)
  - [Get User's Items](#get-users-items-example)
  - [Create a New User](#create-a-new-user-example)

---

## Base URL

All endpoints are prefixed with the base URL of your server. For example:

```
https://your-domain.com/api
```

Replace `https://your-domain.com/api` with your actual server URL.

## Authentication

*Note: The current endpoints do not implement authentication. For secure applications, consider adding authentication mechanisms like JWT or OAuth.*

---

## Endpoints

### Items

#### Get All Items

Retrieve a list of all items.

- **URL:** `/items`
- **Method:** `GET`
- **URL Parameters:** None
- **Body Parameters:** None

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  [
    {
      "id": "item1",
      "name": "Item One",
      "description": "Description of Item One"
    },
    {
      "id": "item2",
      "name": "Item Two",
      "description": "Description of Item Two"
    }
  ]
  ```

**Error Response:**

- **Code:** `500 Internal Server Error`
- **Content:**
  ```json
  {
    "error": "Error message"
  }
  ```

#### Get Item by ID

Retrieve a single item by its ID.

- **URL:** `/items/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id` (string): The ID of the item to retrieve.
- **Body Parameters:** None

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "id": "item1",
    "name": "Item One",
    "description": "Description of Item One"
  }
  ```

**Error Response:**

- **Code:** `404 Not Found`
- **Content:**
  ```json
  {
    "error": "No Item Found"
  }
  ```

#### Create a New Item

Add a new item to the database.

- **URL:** `/items`
- **Method:** `POST`
- **URL Parameters:** None
- **Body Parameters:**
  - `name` (string): Name of the item.
  - `description` (string): Description of the item.

**Request Body Example:**

```json
{
  "name": "Item One",
  "description": "Description of Item One"
}
```

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "name": "Item One",
    "description": "Description of Item One"
  }
  ```

**Error Response:**

- **Code:** `500 Internal Server Error`
- **Content:**
  ```json
  {
    "error": "Invalid Item Schema"
  }
  ```

### Users

#### Get User by ID

Retrieve a single user by their ID.

- **URL:** `/users/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id` (string): The ID of the user to retrieve.
- **Body Parameters:** None

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "id": "user1",
    "username": "UserOne",
    "email": "userone@example.com"
  }
  ```

**Error Response:**

- **Code:** `404 Not Found`
- **Content:**
  ```json
  {
    "error": "No User Found"
  }
  ```

#### Get User's Items

Retrieve all items associated with a specific user.

- **URL:** `/users/:id/items`
- **Method:** `GET`
- **URL Parameters:**
  - `id` (string): The ID of the user whose items are to be retrieved.
- **Body Parameters:** None

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  [
    "item1",
    "item2"
  ]
  ```

**Error Response:**

- **Code:** `404 Not Found`
- **Content:**
  ```json
  {
    "error": "No User Found"
  }
  ```

#### Create a New User

Add a new user to the database.

- **URL:** `/users`
- **Method:** `POST`
- **URL Parameters:** None
- **Body Parameters:**
  - `username` (string): Username of the user.
  - `email` (string): Email address of the user.

**Request Body Example:**

```json
{
  "username": "UserOne",
  "email": "userone@example.com"
}
```

**Success Response:**

- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "username": "UserOne",
    "email": "userone@example.com",
    "items": []
  }
  ```

**Error Response:**

- **Code:** `500 Internal Server Error`
- **Content:**
  ```json
  {
    "error": "Invalid User Schema"
  }
  ```

---

## Error Handling

All error responses follow a consistent format:

```json
{
  "error": "Error message"
}
```

- **500 Internal Server Error**: Indicates a server-side issue, such as an invalid schema or database error.
- **404 Not Found**: Indicates that the requested resource (Item or User) does not exist.

---

## Data Models

### Item

Represents an item in the database.

| Field         | Type   | Description                        |
|---------------|--------|------------------------------------|
| `id`          | string | Unique identifier for the item.    |
| `name`        | string | Name of the item.                  |
| `description` | string | Description of the item.           |

#### TypeScript Interface

```typescript
export interface Item {
  id: string;
  name: string;
  description: string;
}
```

### User

Represents a user in the database.

| Field         | Type     | Description                          |
|---------------|----------|--------------------------------------|
| `id`          | string   | Unique identifier for the user.      |
| `username`    | string   | Username of the user.                |
| `email`       | string   | Email address of the user.           |
| `items`       | string[] | Array of item IDs associated with the user. |

#### TypeScript Interface

```typescript
export interface User {
  id: string;
  username: string;
  email: string;
  items: string[];
}
```

---

## Examples

### Get All Items Example

**Request:**

```http
GET /items HTTP/1.1
Host: your-domain.com
```

**Response:**

```json
[
  {
    "id": "item1",
    "name": "Item One",
    "description": "Description of Item One"
  },
  {
    "id": "item2",
    "name": "Item Two",
    "description": "Description of Item Two"
  }
]
```

### Get Item by ID Example

**Request:**

```http
GET /items/item1 HTTP/1.1
Host: your-domain.com
```

**Response:**

```json
{
  "id": "item1",
  "name": "Item One",
  "description": "Description of Item One"
}
```

**Error Response:**

```json
{
  "error": "No Item Found"
}
```

### Create a New Item Example

**Request:**

```http
POST /items HTTP/1.1
Host: your-domain.com
Content-Type: application/json

{
  "name": "Item Three",
  "description": "Description of Item Three"
}
```

**Response:**

```json
{
  "name": "Item Three",
  "description": "Description of Item Three"
}
```

**Error Response:**

```json
{
  "error": "Invalid Item Schema"
}
```

### Get User by ID Example

**Request:**

```http
GET /users/user1 HTTP/1.1
Host: your-domain.com
```

**Response:**

```json
{
  "id": "user1",
  "username": "UserOne",
  "email": "userone@example.com"
}
```

**Error Response:**

```json
{
  "error": "No User Found"
}
```

### Get User's Items Example

**Request:**

```http
GET /users/user1/items HTTP/1.1
Host: your-domain.com
```

**Response:**

```json
[
  "item1",
  "item2"
]
```

**Error Response:**

```json
{
  "error": "No User Found"
}
```

### Create a New User Example

**Request:**

```http
POST /users HTTP/1.1
Host: your-domain.com
Content-Type: application/json

{
  "username": "UserTwo",
  "email": "usertwo@example.com"
}
```

**Response:**

```json
{
  "username": "UserTwo",
  "email": "usertwo@example.com",
  "items": []
}
```

**Error Response:**

```json
{
  "error": "Invalid User Schema"
}
```

