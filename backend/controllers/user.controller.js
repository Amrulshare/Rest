import dateTime from 'date-time';
import uniqid from 'uniqid';
import db from '../database/db.config.js';


export const getUsers = async (req, res) => {
    const users = db.data.users

    try {
       await res.json(users)

    } catch(erorr) {
        return res.status(500).send({message: erorr.message})
    }
}

//GET the item with specified id
export const getusersParams = async (req, res) => {

    const userFound = await db.data.users.find(
        (user) => user.id === req.params.id);

    if (userFound) {
        await res.json(userFound)
    } else {
        res.status(404).json({ msg: `No user with the id of ${req.params.id}` })
    }

}
export const postUsers = async (req, res) => {
    const { name, loaction, street, zipcode, phone } = req.body
    
    const address = {
        loaction:loaction,
        street:street,
        zipcode:zipcode
    }

    const newUsers = {
        id: uniqid(),
        datetime: Date.now(),
        name: name,
        address:address,
        phone:phone,
    }

    try {
        db.data.users.push(newUsers)
        db.write()
       await res.redirect('/user')

    } catch(erorr) {
        return res.status(500).send({message: error.message})
    }
}

