
import { controller, bot } from './bot';
import * as chai from 'chai';
import * as spies from 'chai-spies';
chai.use(spies);
const { expect, spy } = chai;

describe('Bot Controller', () => {
  it('should be initialized', () => {
    expect(controller).to.be.an('object');
  });

  it('should be spawned', () => {
    expect(bot).to.be.an('object');
  });

  it('should start RTM', async () => {
    let startRTM = spy.on(bot, 'startRTM');
    expect(startRTM).to.have.been.called;
  });
});