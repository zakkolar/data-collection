import {dataStorage as ds} from "../backend/dataStorage";

export const userDataProperties = [
  'color',
  'entertainment',
  'number',
  'firstName',
  'lastName',
  'devices',
  'socialMedia'
]

const transformations = {
  number: number => number?.replace(/69/g, "68").replace(/420/,"429")
}

export const state = () => (userDataProperties.reduce((prev, current) => ({...prev, [current]: ds.retrieve(current)}), {} ))

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


