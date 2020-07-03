import db from '../data/fox-strat-client.ts'
import { makeHash256 } from "../utils/hash-util.ts";
import { User } from '../types.ts';

const usersCollection = db.collection('users')

const findSingleUser = async (email: string, password?: string) => {
    if(password == undefined){
        return await usersCollection.findOne( { email: email } )
    }else{
        return await usersCollection.findOne({
            email: email,
            password: makeHash256(password!!)
        })
    }
}

const addSingleUser = async (credentials: User) => {
    return await usersCollection.insertOne({
        email: credentials.email,
        password: makeHash256(credentials.password!!),
        firstname: credentials.firstname,
        lastname: credentials.lastname
    })
}

export { findSingleUser, addSingleUser }