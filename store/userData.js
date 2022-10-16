import {dataStorage as ds} from "../backend/dataStorage";
import {CookieSync} from "../backend/cookieSync";

export const userDataProperties = [
  'color',
  'entertainment',
  'number',
  'displayName',
  'devices',
  'socialMedia',
  'ip',
  'country',
  'region',
  'city',
  'latitude',
  'longitude',
  'language',
  'userAgent',
  'platform',
  'screenSize',
  'browserSize',
  'darkMode',
  'timeZone',
  'operatingSystem',
  'colorDepth',
  'inferenceValue',
  'inferenceLabel'
]

const transformations = {
  number: number => number?.replace(/69/g, "68").replace(/420/,"429") || null
}

const extraStorageMethods = {
  color: color => color ? CookieSync.set('color', color) : CookieSync.delete('color')
}


const extraRetrievalMethods = {
  color: () => CookieSync.get('color')
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


