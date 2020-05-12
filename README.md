# Apollo & Prisma

- [Apollo](https://www.apollographql.com/): GraphQL Implementation
- [Prisma](https://www.prisma.io/): Database Toolkit
  - [Nexus Schema](https://github.com/graphql-nexus/nexus-schema-plugin-prisma): A plugin for Nexus Schema that integrates Prisma
  - [Nexus Framework](https://www.nexusjs.org/): GraphQL Application Framework
- [GraphQL](https://graphql.org/): Query language for APIs
- [Koa](https://koajs.com/): Web Framework for Node.js

---

## Documentation

### Server

1. [Setup](server/docs/01.setup.md): Init project.
2. [Server](server/docs/02.server.md): Koa, Apollo, Prisma, Nexus Schema, GraphQL.
3. [Publish](server/docs/03.publish.md): Apollo Graph Manager.
4. [Build](server/docs/04.build.md): Run Server. Test GraphQL.

### Client

1. [Setup](client/docs/01.setup.md): Init React App & Apollo Client
2. [Query](client/docs/02.query.md): Fetch a small data.
3. Mutation, Local State, Cache... 여기서부터는 [Apollo Client: React](https://www.apollographql.com/docs/react/) 문서를 읽으면 된다.

---

## Articles

### What is Nexus and how to use it to build GraphQL servers?

With Nexus, the GraphQL schema is defined and implemented programmatically.

[prisma.io/blog/series/what-is-nexus](https://www.prisma.io/blog/series/what-is-nexus-wsobadcm7oju)

1. [The Problems of "Schema-First" GraphQL Server Development](https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3)
2. [Introducing GraphQL Nexus: Code-First GraphQL Server Development](https://www.prisma.io/blog/introducing-graphql-nexus-code-first-graphql-server-development-ll6s1yy5cxl5)
3. [Using GraphQL Nexus with a Database](https://www.prisma.io/blog/using-graphql-nexus-with-a-database-pmyl3660ncst)

- **schema-first**: Making schema design a priority in the development process.
- **SDL-first**: A development process where the GraphQL schema is first defined _manually_ in SDL, with the resolvers implemented afterwards.
- **code-first**: also called _resolver-first_. A process where the GraphQL schema is implemented _programmatically_ and the SDL version of the schema is a _generated artifact_ of that.
