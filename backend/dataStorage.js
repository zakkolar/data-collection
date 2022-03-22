const ls = require('local-storage');

import { v4 as uuidv4 } from 'uuid';


export const dataStorage = {
  store(key, value) {
    ls.set(key, value);
  },
  retrieve(key){
    return ls.get(key);
  }
}

export function uuid(){
  let id = dataStorage.retrieve('uuid');
  if(!id){
    id =  uuidv4();
    dataStorage.store('uuid', id);
  }
  return id;
}
