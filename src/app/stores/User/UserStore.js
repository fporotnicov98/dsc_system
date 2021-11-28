const { makeObservable } = require("mobx");

class UserStore {
  constructor() {
    makeObservable(this);
  }
}