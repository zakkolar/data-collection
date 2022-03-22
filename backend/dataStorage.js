const ls = require('local-storage');

export const dataStorage = {
  store(key, value) {
    ls.set(key, value);
  },
  retrieve(key){
    return ls.get(key);
  }
}
