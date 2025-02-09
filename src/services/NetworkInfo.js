
import NetInfo from '@react-native-community/netinfo';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNetworkStatus } from '../store/reducers/networkSlice';
export default function NetworkInfo(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(addNetworkStatus(state.isConnected));
        });
        return () => unsubscribe();
    }, []);


    return null;
}


