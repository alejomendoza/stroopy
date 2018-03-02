
export enum OperationTypes {
  create_account = 'Create Account',
  payment = 'Payment',
  path_payment = 'Path Payment',
  manage_offer = 'Manage Offer',
  create_passive_offer = 'Create Passive Offer',
  set_options = 'Set Options',
  change_trust = 'Change Trust',
  allow_trust = 'Allow Trust',
  account_merge = 'Account Merge',
  inflation = 'Inflation',
  manage_data = 'Manage Data',
}

export type Transaction = {
  id: string,
  hash: string,
  account: number,
  accountUrl: string,
  createdAt: string,
  createAtTimestamp: number,
  feePaid: string,
  operationCount: number,
  operationsUrl: string,
  ledger: number,
  ledgerUrl: string,
  transactionUrl: string,
  type?: OperationTypes,
  value?: string,
};
