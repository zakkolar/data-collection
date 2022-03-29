const axios = require('axios');

exports.handler = async function(event, context) {


  return new Promise((resolve, reject) => {

    const ip = event.headers['x-nf-client-connection-ip'] || '44.235.126.100';

    const ipData = {ip}

    const url = `http://ip-api.com/json/${ip}`

    axios.get(url).then(res => {
      const {country, regionName, city, zip} = res.data;
      Object.assign(ipData, {country, region: regionName, city, zip})
      resolve({
          statusCode: 200,
          body: JSON.stringify(ipData)
        });
    }).catch(()=>{
      resolve({
        statusCode: 200,
        body: JSON.stringify(ipData)
      });
    })
  })

}
