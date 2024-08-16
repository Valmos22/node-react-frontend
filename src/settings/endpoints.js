import { environment } from "../environments/environment";

export const endpoints = {
    loginUser: environment.dictionary_api_endpoint + "/%word",
    registerUser: environment.dictionary_api_endpoint + "/%word",
    deleteUser: environment.dictionary_api_endpoint + "/%word",
    findUsers: environment.dictionary_api_endpoint + "/%word",
}