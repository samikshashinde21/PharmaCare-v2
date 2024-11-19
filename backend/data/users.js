import bcrypt from 'bcryptjs';


const users = [
    {
        name : 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('Admin@123',10),
        isAdmin:true,
    },
    {
        name : 'Sam Sam',
        email: 'sam@email.com',
        password: bcrypt.hashSync('Sam@1234',10),
        isAdmin:false,
    },
    {
        name : 'Samiksha S',
        email: 'samiksha@email.com',
        password: bcrypt.hashSync('Samiksha@123',10),
        isAdmin:true,
    },

];

export default users;

