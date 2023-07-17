# Mallva

Mallva is a Starbucks demo project showcasing a web application with several pages. The project utilizes popular technologies such as React.js, TypeScript, Next.js, Prisma, Vercel, PostgreSQL, and NextAuth for authentication.

## Pages

### `https://mallva.vercel.app/`

The root page of the application. This page serves as the landing page for Mallva and provides an overview of the Starbucks demo project.

### `https://mallva.vercel.app/sign-in` (TODO still in progress)

The sign-in page allows users to authenticate themselves to access the admin area. It employs NextAuth for authentication purposes, ensuring secure and seamless user login experiences.

### `https://mallva.vercel.app/admin` (TODO still in progress)

The admin page is the central hub for managing various aspects of the Starbucks demo project. It provides an interface for administrators to perform administrative tasks, such as managing products, user accounts, and other related functionalities.

## Getting Started

Run the project using the following steps:

- Rename file with environment variables and fill necessary one

```sh
cp .env.sample .env
```

- Install all dependencies

```sh
pnpm i
```

- Start the server

```sh
pnpm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **React.js:** A popular JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that enhances code maintainability and scalability.
- **Next.js:** A React framework that enables server-side rendering, static site generation, and other optimizations for efficient web development.
- **Prisma:** An open-source database toolkit that simplifies database access and manipulation, providing an intuitive and type-safe interface.
- **Vercel:** A cloud platform for deploying and hosting static websites, providing seamless integration with Next.js.
- **PostgreSQL:** A powerful open-source relational database management system used to store and manage data for the Mallva project.
- **NextAuth:** A flexible authentication library for Next.js applications that supports various authentication providers, including social logins, OAuth, and password-based authentication.
