// inspired by https://github.com/GENESISHASH/xdomls

const locks = require('locks');

export class DataSync {
  constructor(origin, options = {}) {

    const defaultOptions = {
      iframe_id: '__data_sync__',
      iframe_path: 'sync'
    }
    this.iframe_origin = origin;
    this.iframe_url = origin + '/' + (options.iframe_path || defaultOptions.iframe_path);
    this.iframe = null;
    this.iframe_id = options.iframe_id || defaultOptions.iframe_id;
    this.loaded = false;
    this.pendingMessages = [];
    this.mutex = locks.createMutex();
  }

  load() {
      if(!document.getElementById(this.iframe_id)){
        addEventListener('message', e => this.receive(e))
        const iframe = document.createElement('iframe');
        iframe.id = this.iframe_id;
        iframe.src = this.iframe_url;
        iframe.style.visibility = 'none';
        iframe.style.display = 'none';
        iframe.sandbox.add('allow-scripts', 'allow-same-origin')
        this.iframe = iframe;
        document.body.appendChild(iframe);
      }
  }

  process(){
    if(!this.loaded){
      return this.load();
    }

    this.mutex.lock(() => {
        if(this.pendingMessages.length > 0){
          const {mode, params} = this.pendingMessages.pop();
          this.iframe.contentWindow.postMessage(JSON.stringify({mode, params}), this.iframe_origin);
          this.mutex.unlock();
          this.process();
        }
        else {
          this.mutex.unlock();
        }
    })


  }

  receive(e){
    if(e.origin === this.iframe_origin){
      if(e.data){
        const message = JSON.parse(e.data);

        const methodName = 'receive'+message.mode.charAt(0).toUpperCase() + message.mode.slice(1)

        if(this[methodName]){
          this[methodName](message.data);
        }
        else {
          throw new Error(`No receiver for '${message.mode}'`)
        }
      }
    }
  }

  receiveReady() {
    this.loaded = true;
    this.process();
  }

  set(key, value){
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
    this.send('set', {key, value})
  }

  clear(){
    localStorage.clear()
    this.send('clear')
  }

  send(mode, params){
    this.pendingMessages.push({mode, params});
    this.process();
  }



}
