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

      const fieldsToRead=['displayName', 'color', 'entertainment', 'book', 'inferenceLabel']

      try {
        const data = JSON.parse(atob(encodedData));

        fieldsToRead.forEach(field => {
          if(data[field]){
            this[field] = data[field]
          }
        })
        if(data.inferenceList) {

          const inferences = data.inferenceList
            .map(row => {return {date: new Date(row[0]), value: row[1]}})
            .sort((a, b) => Number(b.date) - Number(a.date) );

          let inferenceValue = "";
          const now = Number(new Date());

          for(let inference of inferences) {
            if(Number(inference.date) < now) {
              inferenceValue = inference.value;
              break;
            }
          }

          this.inferenceValue = inferenceValue;

        }

      }
      catch(e){ }
    }
  }
}
