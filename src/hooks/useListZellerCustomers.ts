import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client';
import {Customer} from '@app_types/customer';
import {Role} from '@app_types/filter';

export const GET_ZELLER_CUSTOMERS_LIST = gql`
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        id
        name
        role
      }
    }
  }
`;

const useListZellerCustomers = (role: Role, nameSearch?: string) => {
  const result = useQuery(GET_ZELLER_CUSTOMERS_LIST);

  const filteredData = result.data
    ? {
        listZellerCustomers: {
          items: result.data.listZellerCustomers.items.filter(
            (customer: Customer) => {
              // Filter by role
              const roleMatch = customer.role === role;

              // Filter by name if nameSearch is provided
              const nameMatch =
                !nameSearch ||
                customer.name?.toLowerCase().includes(nameSearch.toLowerCase());

              return roleMatch && nameMatch;
            },
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
