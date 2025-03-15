import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import useListZellerCustomers from '../useListZellerCustomers';
import {GET_ZELLER_CUSTOMERS_LIST} from '@hooks/useListZellerCustomers';

describe('useListZellerCustomers', () => {
  const mockCustomers = [
    {id: '1', name: 'John Doe', role: 'Admin'},
    {id: '2', name: 'Jane Smith', role: 'Admin'},
  ];

  it('should return loading state initially', async () => {
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

    const {result} = renderHook(() => useListZellerCustomers('Admin'), {
      wrapper: (props: {children: React.ReactNode}) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {props.children}
        </MockedProvider>
      ),
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeUndefined();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual({
      listZellerCustomers: {
        items: mockCustomers,
      },
    });
  });

  it('handles error state', async () => {
    const errorMock = [
      {
        request: {
          query: GET_ZELLER_CUSTOMERS_LIST,
        },
        error: new Error('An error occurred'),
      },
    ];

    const {result} = renderHook(() => useListZellerCustomers('Admin'), {
      wrapper: (props: {children: React.ReactNode}) => (
        <MockedProvider mocks={errorMock} addTypename={false}>
          {props.children}
        </MockedProvider>
      ),
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeTruthy();
    expect(result.current.error?.message).toContain('An error occurred');
  });
});
