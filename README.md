# Ecomerce

A MERN-style online store: a shopper storefront, an admin sign-in app and a small Express API, built on MongoDB, Express, React and Node.

**Status:** In progress. The storefront and admin screens exist, but the API entry point requires a `./Routes/auth` module that is not in the repository, so the server does not start as committed, and the products route returns placeholder data.

## The problem

The repo is an early attempt at an online shop: customers browse products, and staff sign in to an admin area. The code covers the storefront pages, a registration and login flow, and the API routes those screens would call.

## What it does

- **Storefront (`client/`)**: a home page with a jumbotron, category sections, product cards, a blog section, a feature bar, a newsletter bar and a subscription form, plus a shared header and footer.
- **Admin app (`admin/`)**: login and register screens that post to `/api/user/login` and `/api/user/register`.
- **API (`backend/index.js`)**: an Express server on port 9000 with JSON parsing and CORS, mounted at `/api/user` and `/api/products`.
- **Input checks (`backend/validation.js`)**: Joi schemas for registration (name, email, password) and login (email, password).
- **Protected products route (`backend/Routes/products.js`)**: guarded by a JWT check in `verifyToken.js`, which reads an `auth-token` header.

## How it's built

- **Frontend**: React 17 with Create React App (react-scripts 4), React Router, and axios. Both `client/` and `admin/` create an axios instance pointed at `http://localhost:9000`.
- **Backend**: Express 4, Mongoose 6 for the `User` model, Joi for validation, jsonwebtoken for token checks, and dotenv for `DB_CONNECT` and `TOKEN_SECRET`.
- **Decision**: validation schemas live in their own module, and token checking is middleware applied per route, so a route opts in to protection by adding `verifyToken`.
- **Layout**: each app has its own `package.json`. The root `package.json` only holds shortcut scripts that `cd` into each folder.

## Running it locally

Install dependencies in each folder that has a `package.json` (`backend`, `client`, `admin`), then from the repository root:

```bash
npm run backend   # Express API via nodemon, reads backend/.env
npm run client    # storefront dev server
npm run admin     # admin dev server
```

The backend reads `DB_CONNECT` (MongoDB connection string) and `TOKEN_SECRET` from `backend/.env`. Note that the API will not start until the missing auth route is restored (see below).

## What's left

- `backend/index.js` requires `./Routes/auth`, which is not in the repository, so the server fails at startup. The register and login endpoints need to be restored or rewritten.
- The products route returns a fixed sample object, not stored products.
- The storefront renders static content and does not call the API.
- `cleint-obsolete/` is an older front end with login and register screens, kept in the repo alongside its replacements. It can be removed.
- There are no tests.
