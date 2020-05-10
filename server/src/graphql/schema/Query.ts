import { queryType, intArg } from '@nexus/schema'

export const Query = queryType({
  definition(t) {
    t.crud.users()
    t.crud.posts()
    t.crud.profiles()

    t.field('post', {
      type: 'Post',
      args: {
        id: intArg({ required: true }),
      },
      async resolve(_root, args, ctx) {
        const result = await ctx.prisma.post.findOne({
          where: {
            id: args.id,
          },
        })
        if (result === null) {
          throw new Error(`No post with id of "${String(args.id)}"`)
        }
        return result
      },
    })
  },
})
