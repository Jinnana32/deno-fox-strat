
import db from '../data/fox-strat-client.ts'
import { makeHash256 } from "../utils/hash-util.ts";
import { generateToken } from '../utils/jwt-util.ts'
import { ERROR } from '../utils/resp-status-utils.ts'

const usersCollection = db.collection('users')

const login = async ({ request, response } : { request: any, response: any }) => {
    const reqBody = await request.body()
    const credentials = reqBody.value

    const users = await usersCollection.findOne({
        email: credentials.email,
        password: makeHash256(credentials.password)
    })

    if(users){
        const jwtToken = generateToken(credentials.email)
        response.body = {
            message: "You have successfully logged in.",
            token: jwtToken
        }
    }else{
        response.body = { error: {
            message: "You entered an invalid email or password."
        }}
    }
}

const register = async ({ request, response } : { request: any, response: any }) => {
    const reqBody = await request.body()
    const credentials = reqBody.value

    const emailValidate = await usersCollection.findOne( { email: credentials.email } )

    if(!emailValidate){
        await usersCollection.insertOne({
            email: credentials.email,
            password: makeHash256(credentials.password)
        })
        response.body = { message: "You have successfully created an account!" }
    }else{
        response.status = ERROR
        response.body = { message: "Email already exist." }
    }

}

export { login, register }