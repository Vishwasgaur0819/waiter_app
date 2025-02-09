import { useEffect, useState } from 'react';

const useGetTableStatus = ({ orderList, tableId }) => {
    const [tableOrder, setTableOrder] = useState(null);
    useEffect(() => {
        if (orderList?.length) {
            const filteredOrders = orderList.filter(order =>
                Number(order?.table_id) == Number(tableId)
                && order?.order_number != 'null'
            );
            // console.log(`filtered item for 999 : ${tableId}`,JSON.stringify(filteredOrders));
            if (filteredOrders.length > 0) {
                const latest = filteredOrders.reduce((prev, current) =>
                    Number(prev.order_number) > Number(current.order_number) ? prev : current
                );
                // console.log(`latest data of lable id - ${tableId} `,latest);
                setTableOrder(latest);
            }
        }
    }, [orderList, tableId]);

    return tableOrder;
};

export default useGetTableStatus;
