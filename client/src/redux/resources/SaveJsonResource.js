import axios from "axios";
import { URL_PREFIX } from "../../constants";

class SaveJsonResource {
    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.host = URL_PREFIX;
        } else {
            this.host = "http://localhost:3000";
        }
        this.mock = process.env.NODE_ENV !== "production";
    }

    saveJson(token, bankName, coordinates) {
        const data = {
            'bank': bankName,
            'coordinates': coordinates,
        }
        console.log(coordinates);
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        "msg": "saved"
                    },
                });
            });
        }
        return axios.post(this.host + "/save_json/", data, config);
    }
}

export default SaveJsonResource;
