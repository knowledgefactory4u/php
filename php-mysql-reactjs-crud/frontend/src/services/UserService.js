import axios from 'axios';

const USER_API_URL = "http://localhost:8080/php-mysql-crud-api";

class UserService {

    getUsers(){
        return axios.get(`${USER_API_URL}/read.php`);
    }

    createUser(user){
        return axios.post(`${USER_API_URL}/create.php`, user);
    }

    getUserById(id){
        return axios.get(`${USER_API_URL}/single_user.php`, 
            { params: { id: id } });
    }

    updateUser(user){
        return axios.put(`${USER_API_URL}/update.php`, user);
    }

    deleteUser(id){
        return axios.delete(`${USER_API_URL}/delete.php`, 
                                    { params: { id: id } });
    }
}

export default new UserService()