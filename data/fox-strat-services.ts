import db from './data/fox-strat-client.ts'

const usersCollection = db.collection('users')

const findUser = async () => {
    const users = await usersCollection.find()
    return users
}

export { findUser }