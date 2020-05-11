import { ApolloServer } from 'apollo-server-koa'
import schema from './schema'
import { createContext } from './context'

const server = new ApolloServer({
  schema,
  context: createContext,
  engine: {
    apiKey: process.env.APOLLO_KEY,
  },
})

export default server
