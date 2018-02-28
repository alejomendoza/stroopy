
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

export function getOperationType(type: string) {
  switch (type) {
    case 'create_account':
      return OperationTypes.create_account;
    case 'payment':
      return OperationTypes.payment;
    case 'path_payment':
      return OperationTypes.path_payment;
    case 'manage_offer':
      return OperationTypes.manage_offer;
    case 'create_passive_offer':
      return OperationTypes.create_passive_offer;
    case 'set_options':
      return OperationTypes.set_options;
    case 'change_trust':
      return OperationTypes.change_trust;
    case 'allow_trust':
      return OperationTypes.allow_trust;
    case 'account_merge':
      return OperationTypes.account_merge;
    case 'inflation':
      return OperationTypes.inflation;
    case 'manage_data':
      return OperationTypes.manage_data;
    default:
      return null;
  }
}