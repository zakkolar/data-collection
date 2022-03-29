const axios = require('axios');

exports.handler = async function(event, context) {


  return new Promise((resolve, reject) => {

    const ip = event.headers['x-nf-client-connection-ip'] || '44.235.126.100';

    const ipData = {ip}

    const url = `http://ip-api.com/json/${ip}`

    axios.get(url).then(res => {
      const {country, regionName, city} = res.data;
      Object.assign(ipData, {country, region: regionName, city})
      resolve({
          statusCode: 200,
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(ipData)
        });
    }).catch(()=>{
      resolve({
        statusCode: 200,
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(ipData)
      });
    })
  })

}
