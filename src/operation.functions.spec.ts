
import { getOperationValue, getOperationType } from './operation.functions';
import { expect } from 'chai';

describe('Get operation value', () => {

  it('should return XLM value when being called with type 0', () => {
    let operation = {
      type_i: 0,
      starting_balance: 100
    };
    let value = getOperationValue(operation);
    expect(value).to.be.equal('100 XLM');
  });

  it('should return amount and asset code value when being called with types 1 or 2', () => {
    let operation = {
      type_i: 1,
      amount: 100,
      asset_code: 'USD'
    };
    let value = getOperationValue(operation);
    expect(value).to.be.equal('100 USD');
  });

  it('should return limit and asset code when being called with type 6', () => {
    let operation = {
      type_i: 6,
      limit: 100,
      asset_code: 'USD'
    };
    let value = getOperationValue(operation);
    expect(value).to.be.equal('Limit 100 USD');
  });

  it('should View Operations when being called with type 3, 4, 5 or 7', () => {
    let operation = {
      type_i: 3,
      limit: 100,
      asset_code: 'USD'
    };
    let value = getOperationValue(operation);
    expect(value).to.be.equal('View Operations');
  });

});

describe('Get operation type', () => {

  it('should return Create Account', () => {
    let type = 'create_account';
    let value = getOperationType(type);
    expect(value).to.be.equal('Create Account');
  });

  it('should return Payment', () => {
    let type = 'payment';
    let value = getOperationType(type);
    expect(value).to.be.equal('Payment');
  });

  it('should return Path Payment', () => {
    let type = 'path_payment';
    let value = getOperationType(type);
    expect(value).to.be.equal('Path Payment');
  });

  it('should return Manage Offer', () => {
    let type = 'manage_offer';
    let value = getOperationType(type);
    expect(value).to.be.equal('Manage Offer');
  });

  it('should return Create Passive Offer', () => {
    let type = 'create_passive_offer';
    let value = getOperationType(type);
    expect(value).to.be.equal('Create Passive Offer');
  });

  it('should return Set Options', () => {
    let type = 'set_options';
    let value = getOperationType(type);
    expect(value).to.be.equal('Set Options');
  });

  it('should return Change Trust', () => {
    let type = 'change_trust';
    let value = getOperationType(type);
    expect(value).to.be.equal('Change Trust');
  });

  it('should return Allow Trust', () => {
    let type = 'allow_trust';
    let value = getOperationType(type);
    expect(value).to.be.equal('Allow Trust');
  });

  it('should return Account Merge', () => {
    let type = 'account_merge';
    let value = getOperationType(type);
    expect(value).to.be.equal('Account Merge');
  });

  it('should return Inflation', () => {
    let type = 'inflation';
    let value = getOperationType(type);
    expect(value).to.be.equal('Inflation');
  });

  it('should return Manage Data', () => {
    let type = 'manage_data';
    let value = getOperationType(type);
    expect(value).to.be.equal('Manage Data');
  });

});