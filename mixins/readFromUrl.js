export default {
  mounted() {
    window.addEventListener('hashchange', this.readFromUrl);
    this.readFromUrl();
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.readFromUrl);
  },
  methods: {
    readFromUrl() {
      const hashParts = new Map(window.location.hash.substring(1).split('&')
        .filter(item => !!item)
        .map(item => item.split("=")));

      const encodedData = hashParts.get('userData');

      const fieldsToRead=['firstName', 'lastName', 'color', 'entertainment', 'book']

      try {
        const data = JSON.parse(atob(encodedData));

        fieldsToRead.forEach(field => {
          if(data[field]){
            this[field] = data[field]
          }
        })
      }
      catch(e){ }
    }
  }
}
