import bcrypt from 'bcryptjs';


const users = [
    {
        name : 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name : 'Sam Sam',
        email: 'sam@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name : 'Samiksha S',
        email: 'samiksha@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,
    },

];

export default users;

