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