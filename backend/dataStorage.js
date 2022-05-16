export const dataStorage = {
  store(key, value) {
    localStorage.setItem(key, value);
  },
  retrieve(key){
    return localStorage.getItem(key);
  },
  clearAll() {
    localStorage.clear()
  }
}
