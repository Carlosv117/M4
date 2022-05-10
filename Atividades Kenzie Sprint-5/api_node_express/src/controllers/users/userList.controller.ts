import {Request, Response} from "express"
import userListService from "../../service/userList.service"

const userListeController = (req: Request, res: Response) => {
    try{
        const listUsers = userListService()

        return res.send(listUsers)
    }catch(err){
        if(err instanceof Error){
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default userListeController