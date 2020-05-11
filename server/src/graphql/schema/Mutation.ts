import { mutationType } from '@nexus/schema'

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.updateOneUser()

    t.crud.createOnePost()
    t.crud.deleteOnePost()
    t.crud.updateOnePost()

    t.crud.createOneProfile()
    t.crud.deleteOneProfile()
    t.crud.updateOneProfile()
  },
})
