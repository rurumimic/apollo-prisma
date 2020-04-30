import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'

import apollo from './graphql/apollo'

const app = new Koa()

// Session
app.keys = ['some secret key']
app.use(session(app))

// Body Parser
app.use(bodyParser())

// Middlewares
app.use(apollo.getMiddleware())

export default app
