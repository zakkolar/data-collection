export const dataStorage = {
  store(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  retrieve(key){
    return JSON.parse(localStorage.getItem(key));
  },
  clearAll() {
    localStorage.clear()
  }
}
