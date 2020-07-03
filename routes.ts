import { Router } from "https://deno.land/x/oak/mod.ts";
import { login, register } from './controllers/auth-controller.ts'
import { authMiddleware } from './middleware/auth-middleware.ts'

const router = new Router()
const baseVersion = '/api/v1'

// Authentication API
router
    .post(`${baseVersion}/auth/login`, login)
    .post(`${baseVersion}/auth/register`, register)

// Skulks API
router
    .post(`${baseVersion}/skulks/search`)
    .get(`${baseVersion}/skulks`, authMiddleware, (ctx) => {
        ctx.response.body = "welcome to the skulks!"
    })

// Conversation API
router
    .get(`${baseVersion}/conversations`)
    .post(`${baseVersion}/conversations`)

// Match API
router
    .get(`${baseVersion}/match/history`)
    .post(`${baseVersion}/match/request`)
    .put(`${baseVersion}/match/accept/:id`)

export default router