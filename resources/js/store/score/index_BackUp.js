const state = {
  // infected people and infected pointer
  infected: 0,
  // infectedMultiplier: 0.01,
  // infectedInterval: 5000,

  // dead people and dead pointer
  dead: 0,
  // deadMultiplier: 0.1,
  // deadInterval: 25000,

  // time spend
  elapsedTime: 0,
  timer: undefined,
  //multiplier

};

const getters = {
  // All Stats
  getScoreStats: state => {
    return state;
  },
  // Infected People Getters
  getInfected: state => {
    return state.infected;
  },
  getInfectedPointer: state => {
    return state.infectedPointer;
  },
  getInfectedCalc: state => {
    return (state.infected - state.dead);
  },

  // Dead People Getters
  getDead: state => {
    return state.dead;
  },
  getDeadPointer: state => {
    return state.deadPointer;
  },
  // Interval timer
  getInfectedInterval: state =>{
    return state.infectedInterval
  },
  getDeadInterval: state =>{
    return state.deadInterval
  },
  // Multiplier Getters
  getInfectedMultiplier: state => {
    return state.infectedMultiplier;
  },
  getDeadMultiplier: state => {
    return state.deadMultiplier;
  }
};

const mutations = {
  // Set the new infected value
  setInfectedValue: (state, value) => {
    state.infected = value;
  },
  // Set the new dead value
  setDeadValue: (state, value) => {
    state.dead = value;
  },

  // set the new Interval timer
  setInfectedInterval: (state, value) =>{
    state.infectedInterval = value;
  },
  setDeadInterval: (state, value) =>{
    state.deadInterval = value;
  },

  // Set Multiplier value
  setInfectedMultiplier: (state, value) => {
    state.infectedMultiplier = value
  },
  setDeadMultiplier: (state, value) => {
    state.deadMultiplier = value
  },
  // Set Pointer value
  setInfectedPointer: (state, value) => {
    state.infectedPointer = value
  },
  setDeadPointer: (state, value) => {
    state.deadPointer = value
  }
};

const actions = {
  // Handle changes of infected / dead value
  handleChangeInfectedValue({commit}, payload) {
    commit('setInfectedValue', payload);
  },
  handleChangeDeadValue({commit}, payload) {
    commit('setDeadValue', payload);
  },
  // Handle changes of infected / dead value
  handleChangeInfectedMultiplier({commit}, payload) {
    commit('setInfectedMultiplier', payload);
  },
  handleChangeDeadMultiplier({commit}, payload) {
    commit('setDeadMultiplier', payload);
  },
  handleChangeInfectedInterval({commit}, payload) {
    commit('setInfectedInterval', payload);
  },
  handleChangeDeadInterval({commit}, payload) {
    commit('setDeadInterval', payload);
  },
  // Handle changes of Pointer value
  handleChangeInfectedPointer({commit}, payload) {
    commit('setInfectedPointer', payload);
  },
  handleChangeDeadPointer({commit}, payload) {
    commit('setDeadPointer', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
