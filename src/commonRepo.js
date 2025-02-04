import AsyncStorage from "@react-native-async-storage/async-storage";
import apiRoutes from "./api/apiEndpoints";
import { getData } from "./api/apiRequest";

const fetchOfflineData = async () => {
    try {
        const res = await getData(apiRoutes.getOfflineData);
        if (res?.success) {
            const { halls, categories, products } = res?.data;
            const floors = halls?.map(({ tables, ...rest }) => rest);
            const tables = halls?.flatMap(floor => floor.tables);
            console.log(floors);
            console.log(tables);
            await AsyncStorage.setItem('@floors', JSON.stringify(floors))
            await AsyncStorage.setItem('@categories', JSON.stringify(categories))
            await AsyncStorage.setItem('@products', JSON.stringify(products))
            await AsyncStorage.setItem('@tables', JSON.stringify(tables))
            return true
        }
        return null
    } catch (er) {
        alert(er)
        return null
    }
}

export { fetchOfflineData };