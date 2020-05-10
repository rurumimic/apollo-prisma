import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema } from '@nexus/schema'
import path from 'path'

import { Query } from './Query'
import { User } from './User'

export default makeSchema({
  types: [Query, User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(
      __dirname,
      '../../../node_modules/@types/nexus-typegen/index.d.ts'
    ),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '.prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
  },
})
