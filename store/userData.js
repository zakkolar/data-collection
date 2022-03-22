import {dataStorage as ds} from "../backend/dataStorage";

export const state = () => ({
  color: ds.retrieve('color'),
  entertainment: ds.retrieve('entertainment'),
  number: ds.retrieve('number'),
  firstName: ds.retrieve('firstName'),
  lastName: ds.retrieve('lastName')
})

function makeMutation(key, transform = v => v){
  return (state, value) => {
    state[key] = transform(value);
    transform(value);
  }
}

export const mutations = {
  color: makeMutation('color'),
  entertainment: makeMutation('entertainment'),
  number: makeMutation('number', number => number?.replace(/69/g, "68").replace(/420/,"429")),
  firstName: makeMutation('firstName'),
  lastName: makeMutation('lastName')
}

function makeAction (key) {
  return ((context, value) => {
    context.commit(key, value);
    ds.store(key, context.state[key]);
  })
}

export const actions = {
  color: makeAction('color'),
  entertainment: makeAction('entertainment'),
  number: makeAction('number'),
  firstName: makeAction('firstName'),
  lastName: makeAction('lastName')

}

