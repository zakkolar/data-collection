import {dataStorage as ds} from "../backend/dataStorage";

export const userDataProperties = [
  'color',
  'entertainment',
  'number',
  'firstName',
  'lastName',
  'devices',
  'socialMedia',
  'ip',
  'country',
  'region',
  'city',
  'language',
  'userAgent',
  'platform',
  'screenSize',
  'browserSize',
]

const transformations = {
  number: number => number?.replace(/69/g, "68").replace(/420/,"429") || null
}

const extraStorageMethods = {
  color: color => {
    const afterCookie = `;path=/;domain=${process.env.domainBase}`;
    if(color){
      document.cookie = `color=${color}${afterCookie}`
    }
    else {
      document.cookie = `color=null${afterCookie};expires=Thu, 01 Jan 1970 00:00:01 GMT"`
    }
  }
}

const extraRetrievalMethods = {
  color: () => {
    var name = "color=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if ((c.indexOf(name)) == 0) {
        return c.substring(name.length);
      }
    }
    return null;
  }
}

export const defaultValues = {
  devices: [],
  socialMedia: []
}

function makeState(key){
  const extraRetrievalMethod = extraRetrievalMethods[key] || (() => "");
  return ds.retrieve(key) || extraRetrievalMethod() || defaultValues[key] || "";
}

export const state = () => (userDataProperties.reduce((prev, current) => ({...prev, [current]: makeState(current)}), {} ))

function makeMutation(key){
  const transform = transformations[key] || (item => item);
  return (state, value) => {
    state[key] = transform(value);
  }
}

export const mutations = userDataProperties.reduce((prev, current) => ({...prev, [current]: makeMutation(current)}), {} )

function makeAction (key) {
  return ((context, value) => {
    const extraStorageMethod = extraStorageMethods[key] || (val => {})
    context.commit(key, value);
    if(!value || value.length === 0){
      ds.unset(key);
    }
    else {
      ds.store(key, context.state[key]);
    }
    extraStorageMethod(value);
  })
}

const actions = userDataProperties.reduce((prev, current) => ({...prev, [current]: makeAction(current)}), {} )

actions.clearAll = ({dispatch}) => {
  userDataProperties.forEach(prop => {
    dispatch(prop, defaultValues[prop] || null)
  })
}

export {actions}


