import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function connection() {
    // Connect the client
    await prisma.$connect()
}

//Get all users query
export const getAllUsers = async () => {
    const users = await prisma.Users.findMany({})
    return users
}

//Get a single user query
export const getUser = async id => {
    const user = await prisma.Users.findUnique({
        where: {id}
    })
    return user
}

//create a new user query
export const newUser = async (firstname, lastname, email, username, password, contact) => {
    const user = await prisma.Users.create({
        data : {
            firstname,
            lastname,
            email,
            username,
            password,
            contact,
        }
    })
    return user
}

// Update info of a particular user
export const updateUser = async (id, updateData) => {
    const user = await prisma.Users.update({
        where: {id},
        data : {...updateData}
    })
    return user
}

// Delete a user
export const deleteUser = async id => {
    const user = await prisma.Users.delete({where: {id:id}})
    return user
}

connection()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })