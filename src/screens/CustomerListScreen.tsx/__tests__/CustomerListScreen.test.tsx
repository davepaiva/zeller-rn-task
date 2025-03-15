import {render, screen, waitFor} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import CustomerListScreen from '../index';
import {GET_ZELLER_CUSTOMERS_LIST} from '@hooks/useListZellerCustomers';

jest.mock('react-native-radio-buttons-group', () => {
  const MockRadioButtonsGroup = require('../../../components/RadioButton/__mocks__/index');

  return MockRadioButtonsGroup;
});

describe('CustomerListScreen', () => {
  const mockCustomers = [
    {id: '1', name: 'John Doe', role: 'Admin'},
    {id: '2', name: 'Jane Smith', role: 'Admin'},
    {id: '3', name: 'Bob Johnson', role: 'Manager'},
  ];

  it('should render loading state initially', async () => {
    const mocks = [
      {
        request: {
          query: GET_ZELLER_CUSTOMERS_LIST,
        },
        loading: true,
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CustomerListScreen />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeTruthy();
    });
  });

  it('should render error state when API fails', async () => {
    const mocks = [
      {
        request: {
          query: GET_ZELLER_CUSTOMERS_LIST,
        },
        error: new Error('Test error'),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CustomerListScreen />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeTruthy();
      expect(screen.getByText(/Test error/)).toBeTruthy();
    });
  });

  it('should render customer list when data is loaded', async () => {
    const mocks = [
      {
        request: {
          query: GET_ZELLER_CUSTOMERS_LIST,
        },
        result: {
          data: {
            listZellerCustomers: {
              items: mockCustomers,
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CustomerListScreen />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('customer-list')).toBeTruthy();
      expect(screen.getByText('John Doe')).toBeTruthy();
      expect(screen.getByText('Jane Smith')).toBeTruthy();
    });
  });
});
