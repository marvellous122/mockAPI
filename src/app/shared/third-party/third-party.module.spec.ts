import { ThirdPartyModule } from './third-party.module';

describe('ThirdPartyModule', () => {
  let thirdPartyModule: ThirdPartyModule;

  beforeEach(() => {
    thirdPartyModule = new ThirdPartyModule();
  });

  it('should create an instance', () => {
    expect(thirdPartyModule).toBeTruthy();
  });
});
