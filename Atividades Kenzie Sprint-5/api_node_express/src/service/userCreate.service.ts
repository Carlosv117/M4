import { users } from "../database";
import { IUser, IUserCreate } from "../interface/users";
import { v4 as uuidv4 } from "uuid"

const userCreateService = ({name,email}: IUserCreate) => {
    const emailExists = users.find(user => user.email === email)

    if(emailExists){
        throw new Error("Este email já existe!")
    }

    const newUser: IUser ={
        id: uuidv4(),
        name,
        email
    }

    users.push(newUser)

    return newUser
}

export default userCreateService