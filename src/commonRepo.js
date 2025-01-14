import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoutes from "./api/apiEndpoints";
import { getData } from "./api/apiRequest";

const fetchOfflineData = async () => {
    try {
        const res = await getData(apiRoutes.getOfflineData);
        if (res?.success) {
            const {halls,categories,products} = res?.data;
            console.log('halls==>> ', halls);
            await AsyncStorage.setItem('@floors',JSON.stringify(halls))
            await AsyncStorage.setItem('@categories',JSON.stringify(categories))
            await AsyncStorage.setItem('@products',JSON.stringify(products))
            return true
        }
        return null
    } catch (er) {
        alert(er)
        return null
    }
}

export {fetchOfflineData};