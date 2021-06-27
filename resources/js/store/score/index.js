const state = {
  infected: 0,
  dead: 0,
  // time spend
  elapsedTime: "00:00:00",
  timer: 0,
//  AKW
  akw: 0,
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
  getInfectedCalc: state => {
    return (state.infected - state.dead);
  },
  // Dead People Getters
  getDead: state => {
    return state.dead;
  },
//  Akw
  getAkwDead: state => {
    return state.akw;
  },
  getTimer: state =>{
    return state.timer;
  },
  getElapsedTime: state =>{
    return state.elapsedTime;
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
  // Set the new dead value
  setAkwValue: (state, value) => {
    state.akw = value;
  },
  setTimer:(state,value)=>{
    state.timer = value;
  },
  setElapsedTime:(state,value)=>{
    state.elapsedTime = value;
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
  handleChangeAkwValue({commit}, payload) {
    commit('setAkwValue', payload);
  },
  handleChangeTimer({commit},payload){
    commit('setTimer', payload);
  },
  handleChangeElapsedTime({commit},payload){
    commit('setElapsedTime', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
