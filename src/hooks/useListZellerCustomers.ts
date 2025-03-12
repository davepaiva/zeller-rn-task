import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client';
import {Customer} from '@app_types/customer';
import {Role} from '@app_types/filter';

export const GET_ZELLER_CUSTOMERS_LIST = gql`
  query ListZellerCustomers($role: String) {
    listZellerCustomers(filter: {role: {eq: $role}}) {
      items {
        id
        name
        role
      }
    }
  }
`;

const useListZellerCustomers = (role: Role) => {
  const result = useQuery(GET_ZELLER_CUSTOMERS_LIST);

  // Apply client-side filtering
  const filteredData = result.data
    ? {
        listZellerCustomers: {
          items: result.data.listZellerCustomers.items.filter(
            (customer: Customer) => customer.role === role,
          ),
        },
      }
    : undefined;

  return {
    ...result,
    data: filteredData,
  };
};

export default useListZellerCustomers;
