import { FlatList, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import colors from '../styles/colors';
import FAIcon from 'react-native-vector-icons/AntDesign';
import { FontFamily } from '../assets/fonts/FontFamily';
import { FontSize } from '../assets/fonts/Fonts';
import Header from '../components/shared/Header';
import { getData } from '../api/apiRequest';
import apiRoutes from '../api/apiEndpoints';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import LoadingPage from './LoadingPage';
import Spacer from '../components/shared/Spacer';
import useGetOrderList from '../hooks/useGetOrderList';

const AllOrders = ({ navigation }) => {
  const {orderList,loading} = useGetOrderList();


  const handleViewOrder = (orderItem) => {
    try {
      // navigation.push('KOT', {
      //   orderItem: orderItem,
      //   navigateFrom: 'AllOrders'
      // });
      alert('Order details')
    } catch (err) {
      console.error(`Error in handleViewOrder--->${err}`);
    }
  };

  return (
    <View style={styles.mainView}>
      <Header title='All Orders' />
      <View style={styles.container}>
        {loading ? (
          <LoadingPage />
        ) : (
          <>
          <FlatList
            data={orderList}
            keyExtractor={(item) => item?.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleViewOrder(item)}
                style={styles.orderItem}
              >
                <View style={styles.orderDetails}>
                  <Text style={styles.orderText}>{item?.created_at}</Text>
                  <Text style={styles.orderTable}>{item?.table}</Text>
                </View>
                <TouchableOpacity style={styles.viewIcon}>
                  <FAIcon name='eye' color={colors.splash_background} size={25} />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            // onEndReached={loadMoreOrders}
            // onEndReachedThreshold={0.5}
            // ListFooterComponent={visibleOrders.length < orderList.length ? <ActivityIndicator size='small' color={colors.splash_background} /> : null}
          />
          <Spacer h={2}/>
          </>
        )}
      </View>
    </View>
  );
};

export default AllOrders;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    width: '93%',
    alignSelf: 'center',
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: FontFamily.TTCommonsMedium,
    fontSize: FontSize.large,
  },
  orderTable: {
    fontFamily: FontFamily.TTCommonsMedium,
    marginLeft: 15,
    fontSize: FontSize.large,
  },
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
