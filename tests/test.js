const { expect } = require('chai');
const os = require('os');
const homeDir = os.homedir();
const username = os.userInfo().username;

const ChromeCookiePath = require('../index');


describe('test returned cookie path', () => {
  it('should return path of chrome coookie', () => {
    const path = ChromeCookiePath.get();
    if (os.platform() === 'darwin') {
      expect(path).to.equal(`${homeDir}/Library/Application Support/Google/Chrome/Default/Cookies`);
    } else if(os.platform() === 'win32') {
      expect(path).to.equal(`C:\\Users\\${username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cookies`);
    } else {
      expect(path).to.equal(`${homeDir}/.config/google-chrome/Default/Cookies`);
    }
  });
});
