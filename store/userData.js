import {dataStorage as ds} from "../backend/dataStorage";
import {CookieSync} from "../backend/cookieSync";

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

export const USER_DATA_COOKIE_NAME = 'userDataItems';

function makeAction (key) {
  return ((context, value) => {
    const extraStorageMethod = extraStorageMethods[key] || (val => {})
    context.commit(key, value);

    let userDataItems = parseInt(CookieSync.get(USER_DATA_COOKIE_NAME) || 0);

    if(!value || value.length === 0){
      ds.unset(key);
      userDataItems--;
    }
    else {
      ds.store(key, context.state[key]);
      userDataItems++;
    }
    if(userDataItems > 0){
      CookieSync.set(USER_DATA_COOKIE_NAME, userDataItems);
    }
    else {
      CookieSync.delete(USER_DATA_COOKIE_NAME);
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


