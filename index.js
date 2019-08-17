const os = require('os');


const get = () => {
  const homeDir = os.homedir();
  const username = os.userInfo().username;
  if (os.platform() === 'win32') {
    return `C:\\Users\\${username}\\AppData\\Local\\Google\\Ghrome\\User Data\\Default\\Cookies`;
  }

  if (os.platform() === 'darwin') {
    return `${homeDir}/Library/Application Support/Google/Chrome/Default/Cookies`;
  }

  return `${homeDir}/.config/google-chrome/Default/Cookies`;
};


module.exports = {
  get
};
