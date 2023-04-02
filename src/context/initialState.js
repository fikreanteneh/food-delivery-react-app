import { fetchUser } from "../util/fetchLocalStorageData"

const userInfo = fetchUser();

export const initialState = {
    user: userInfo
}