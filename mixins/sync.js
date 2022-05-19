export default {
  data() {
    return {
      targetUrl: process.env.syncUrlBase
    }
  },
  mounted() {
    this.send('ready');
    addEventListener('message', e => this.receive(e));
  },
  methods: {
    send(mode, params){
      window.parent.postMessage(JSON.stringify({mode, params}), this.targetUrl);
    },
    receive(e){
      if(e.origin === this.targetUrl){
        if(e.data){
          const message = JSON.parse(e.data);
          const methodName = 'receive'+message.mode.charAt(0).toUpperCase() + message.mode.slice(1)

          if(this[methodName]){
            this[methodName](message.params);
          }
          else {
            throw new Error(`No receiver for '${message.mode}'`)
          }
        }
      }
    },

    receiveSet({key, value}){
      localStorage.setItem(key, value);
    },

    receiveUnset({key}){
      localStorage.removeItem(key);
    },

    receiveClear(){
      localStorage.clear()
    }
  }
}
