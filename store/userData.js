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
  number: number => number?.replace(/69/g, "68").replace(/420/,"429")
}

const defaultValues = {
  devices: [],
  socialMedia: []
}

export const state = () => (userDataProperties.reduce((prev, current) => ({...prev, [current]: ds.retrieve(current) || defaultValues[current] || null}), {} ))

function makeMutation(key){
  const transform = transformations[key] || (item => item);
  return (state, value) => {
    state[key] = transform(value);
  }
}

export const mutations = userDataProperties.reduce((prev, current) => ({...prev, [current]: makeMutation(current)}), {} )

function makeAction (key) {
  return ((context, value) => {
    context.commit(key, value);
    ds.store(key, context.state[key]);
  })
}

export const actions = userDataProperties.reduce((prev, current) => ({...prev, [current]: makeAction(current)}), {} )


