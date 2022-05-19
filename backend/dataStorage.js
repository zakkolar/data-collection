import {DataSync} from "./dataSync";

const sync = new DataSync(process.env.syncUrlBase);

export const dataStorage = {
  store(key, value) {
    sync.set(key, value);
  },
  retrieve(key){
    return JSON.parse(localStorage.getItem(key));
  },
  unset(key){
    sync.unset(key)
  },
  clearAll() {
    sync.clear()
  }
}
