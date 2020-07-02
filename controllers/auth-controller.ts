
const login = async ({ request, response } : { request: any, response: any }) => {
    const reqBody = await request.body()
    const credentials = reqBody.value

    response.body = {
        credentials: credentials
    }
}

const register = async ({ request, response } : { request: any, response: any }) => {
    const reqBody = await request.body()
    const credentials = reqBody.value

    response.body = {
        credentials: credentials
    }
}

export { login, register }