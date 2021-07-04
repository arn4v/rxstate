class RxState {
  constructor(initialState = {}) {
    this.initialState = initialState;
    this.__internalState__ = new Map();
    this.__listenerMap__ = new Map();
    this.setInitialState();
  }

  /**
   * @private
   */
  setInitialState() {
    for (let key in this.initialState) {
      this.__internalState__.set(key, this.initialState[key]);
    }
  }

  setState(key, value) {
    this.__internalState__.set(key, value);
    for (const cb of this.__listenerMap__[key]) {
      cb(this.__internalState__.get(key));
    }
  }

  getState() {
    const state = {};

    for (const [key, value] of this.__internalState__) {
      state[key] = value;
    }

    return state;
  }

  subscribe(key, cb) {
    this.__listenerMap__[key] = [...(this.__listenerMap__[key] ?? []), cb];
    return function () {
      if (Array.isArray(this.listenerMap[key])) {
        this.listenerMap[key] = this.listenerMap[key].filter(
          (_cb) => cb !== _cb
        );
      }
    };
  }
}

export * from "./react";
export default RxState;
