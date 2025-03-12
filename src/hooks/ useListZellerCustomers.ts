import {useQuery} from '@apollo/client';
import {gql} from '@app_types/graphql';

export const GET_ZELLER_CUSTOMERS_LIST = gql(`
    query ListZellerCustomers {
        listZellerCustomers {
            items {
            name
            role
            }
        }
    }
    `);

const useListZellerCustomers = () => {
  const result = useQuery(GET_ZELLER_CUSTOMERS_LIST, {});
};

export default useListZellerCustomers;
