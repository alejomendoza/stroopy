import { OperationTypes } from './types';

/**
 *
 * Gets the type of operation and returns the value with
 * the asset code.
*/
export function getOperationValue(operation: any) {
  if (operation.asset_type === 'native') {
    operation.asset_code = 'XLM';
  }
  switch (operation.type_i) {
    case 0:
      return `${operation.starting_balance} XLM`;
    case 1:
    case 2:
      return `${operation.amount} ${operation.asset_code}`;
    case 6:
      return `Limit ${operation.limit} ${operation.asset_code}`;
    default:
      return 'View Operations';
  }
}

/**
 *
 * Gets the type of operation and returns the value with
 * the asset code.
*/
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