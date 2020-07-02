import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router()
const baseVersion = '/api/v1'

// Authentication API
router
    .post(`${baseVersion}/auth/login`, )
    .post(`${baseVersion}/auth/register`, )

// Skulks API
router
    .post(`${baseVersion}/skulks/search`, )
    .get(`${baseVersion}/skulks`)

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