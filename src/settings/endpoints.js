import { environment } from "../environments/environment";

export const endpoints = {
    loginUser: environment.api_node + "/%word",
    registerUser: environment.api_node + "/%word",
    deleteUser: environment.api_node + "/%word",
    findUsers: environment.api_node + "/%word",
}