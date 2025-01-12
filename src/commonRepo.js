import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoutes from "./api/apiEndpoints";
import { getData } from "./api/apiRequest";

const fetchOfflineData = async () => {
    try {
        const res = await getData(apiRoutes.getOfflineData);
        // console.log('Fetched Offline Data:', JSON.stringify(res?.data));
        if (res?.status) {
            let stringifiedData = JSON.stringify(res.data);
            await AsyncStorage.setItem('@offlineData',stringifiedData)
            return true
        }
        return null
    } catch (er) {
        alert(er)
        return null
    }
}

export {fetchOfflineData};