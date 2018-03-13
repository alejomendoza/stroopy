
import { controller } from './bot';
import * as chai from 'chai';
import * as spies from 'chai-spies';
chai.use(spies);
const { expect } = chai;

describe('Bot Controller', () => {
  it('should be initialized', () => {
    expect(controller).to.be.an('object');
  });
});