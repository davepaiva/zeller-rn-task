/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getZellerCustomer?: Maybe<ZellerCustomer>;
  listZellerCustomers?: Maybe<ZellerCustomerConnection>;
};


export type QueryGetZellerCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryListZellerCustomersArgs = {
  filter?: InputMaybe<TableZellerCustomerFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
};

export type TableZellerCustomerFilterInput = {
  email?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  role?: InputMaybe<TableStringFilterInput>;
};

export type ZellerCustomer = {
  __typename?: 'ZellerCustomer';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type ZellerCustomerConnection = {
  __typename?: 'ZellerCustomerConnection';
  items?: Maybe<Array<Maybe<ZellerCustomer>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ListZellerCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListZellerCustomersQuery = { __typename?: 'Query', listZellerCustomers?: { __typename?: 'ZellerCustomerConnection', items?: Array<{ __typename?: 'ZellerCustomer', id: string, name?: string | null, role?: string | null } | null> | null } | null };


export const ListZellerCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListZellerCustomers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listZellerCustomers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<ListZellerCustomersQuery, ListZellerCustomersQueryVariables>;