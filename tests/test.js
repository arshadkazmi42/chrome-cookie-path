const { expect } = require('chai');
const os = require('os');
const homeDir = os.homedir();

const ChromeCookiePath = require('../index');


describe('test returned cookie path', () => {
  it('should return path of chrome coookie', () => {
    try {
      const path = ChromeCookiePath.get();
      if (os.platform() === 'darwin') {
        expect(path).to.equal(`${homeDir}/Library/Application Support/Google/Chrome/Default/Cookies`);
      } else {
        expect(path).to.equal(`${homeDir}/.config/google-chrome/Default/Cookies`);
      }
    } catch (err) {
      if (os.platform() === 'win32') {
        expect(err.message).to.equal('Windows is not supported');
      }
    }
  });
});
