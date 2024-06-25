# API Movie Store

This is an API for reading products from a movie store, implemented in Node.js with Express. The API allows you to consult all the products or a specific product, as well as validating access using Basic Authentication. The product images are hosted on Amazon S3, ensuring efficient and secure file management.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/joaonetogit/api-movie-store.git
```

2. Install the dependencies:

```bash
pnpm install
```

## Use

To start the server, run the following command:

```bash
pnpm start
```

## Endpoints

### GET /api/products

Returns all the products in the store.

### GET /api/product/:title

Returns a specific product with the given title.

### GET /api/products/category/:category

Returns products from a specific category
