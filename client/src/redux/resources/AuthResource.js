import axios from "axios";
import { URL_PREFIX } from "../../constants";

class AuthResource {
    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.host = URL_PREFIX;
        } else {
            this.host = "http://localhost:3000";
        }
        this.mock = process.env.NODE_ENV !== "production";
    }

    signup(username, email, password) {
        const data = {
            'username': username,
            'email': email,
            'password': password
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "user": {
                            "id": 6,
                            "username": "4Marsha1",
                            "email": "abhishekbharadwaz22@gmail.com"
                        },
                        "token": "acc961f8f3363b0889922f602960d4a75b7e50f1445030dd0c9a74db7bf53290"
                    },
                });
            });
        }
        return axios.post(this.host + "/api/auth/register", data, config);
    }

    login(username, password) {
        const data = {
            'username': username,
            'password': password
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "user": {
                            "id": 6,
                            "username": "4Marsha1",
                            "email": "abhishekbharadwaz22@gmail.com"
                        },
                        "token": "4c6c3e517a3ff462d5c7e6b1bdff28495e6662799bfdac3347a18c2016a6203f"
                    },
                });
            });
        }
        return axios.post(this.host + "/api/auth/login", data, config);
    }

    logout(token) {
        const config = {
            headers: {
                'Authorization': `Token ${token}`
            }
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({});
            });
        }

        return axios.post(this.host + '/api/auth/logout', {}, config);
    }
}

export default AuthResource;
