// Storyline definition + all settings [Path/Type/Options/..]

// Video Settings
const VideoPath = '/video/';
const VideoType = '.mp4';
const OverlayTime = 22; // Sek
const Placeholder = "http://lifeanddeath.atwebpages.com/video/placeholder.mp4";

const state = {

  '1': {
    video: Placeholder,
    type: "question",
    question: 'Soll die Regierung Vorsichtsmaßnahmen treffen oder abwarten?',
    firstOption: {
      next: 1.1,
      response: 'Handeln',
    },
    secondOption: {
      next: 1.2,
      response: 'Abwarten',
    },
    MinMaxInfected: [0, 0],
    MinMaxDead: [0, 0],
    Overlay: OverlayTime,
  },
  '1.1': {
    video:Placeholder,
    type: "continue",
    continueStory: {
      next: '2',
      response: 'Weiter'
    },
    MinMaxInfected: [0, 0],
    MinMaxDead: [0, 0]
  },
  '1.2': {
    video: Placeholder,
    type: "continue",
    continueStory: {
      next: '2',
      response: 'Weiter'
    },
    MinMaxInfected: [0, 0],
    MinMaxDead: [0, 0],
    // AKW: [1500000,2500000]
  },
// Progress Number 2
  '2': {
    video: Placeholder,
    type: "question",
    question: 'Alle Geschäfte des nicht alltäglichen Gebrauchs schließen und Ausgangsbeschänkungen?',
    firstOption: {
      next: '2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '2.2',
      response: 'Nein'
    },
    // Setting for Score
    MinMaxInfected: [1, 1],
    MinMaxDead: [0, 0],
    InfectedDelay: 20000,
    Overlay: OverlayTime,
  },
  '2.1': {
    video:Placeholder,
    type: "continue",
    continueStory: {
      next: '3.1',
      response: 'Weiter'
    },
    MinMaxInfected: [4000, 6000],
    MinMaxDead: [3, 8]
  },
  '2.2': {
    video: Placeholder,
    type: "continue",
    continueStory: {
      next: '3.2',
      response: 'Weiter'
    },
    MinMaxInfected: [9000, 11000],
    MinMaxDead: [10, 15]
  },
// Progress Number 3
  '3.1': {
    video: Placeholder,
    type: "question",
    question: 'Wie lange sollen die Geschäfte noch geschlossen bleiben?',
    firstOption: {
      next: '3.1.1',
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    secondOption: {
      next: '3.2',
      response: 'Solange bis ein Impfmittel erhältlich ist'
    },
    MinMaxInfected: [10000 , 12000],
    MinMaxDead: [90, 110],
    Overlay: OverlayTime,
  },
  '3.1.1': {
    video: Placeholder,
    type: "question",
    question: 'Hilfpaket für Unternehmmerinnen und Unternehmer',
    firstOption: {
      next: '3.1.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.1.1.2',
      response: 'Nein'
    },
    // Setting for Score
    MinMaxInfected: [13000, 16000],
    MinMaxDead: [200, 300],
    Overlay: OverlayTime,
  },

  // End from 3.1.1.X
  '3.1.1.1': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [400, 600]

  }, '3.1.1.2': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [600, 800]
  },

  // Next Story
  '3.1.2': {
    video: Placeholder,
    type: "question",
    question: 'Illegale Demostrationen auflösen? Zur not mit Gewalt?',
    firstOption: {
      next: '3.2.1',
      response: 'Abwarten und Deeskalieren'
    },
    secondOption: {
      next: '3.2.2',
      response: 'Polizeieinsatz'
    },
    MinMaxInfected: [2500, 3000],
    MinMaxDead: [350, 450],
    Overlay: OverlayTime,
  },
  //End from 3.1.2.X
  '3.1.2.1': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [700, 900]
  },
  '3.1.2.2': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [800, 1000]
  },
//  Progress Number 4
  '3.2': {
    video: Placeholder,
    type: "question",
    question: 'Soll eine Ausgangssperre über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '3.2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.2.2',
      response: 'Nein'
    },
    MinMaxInfected: [30600, 37400],
    MinMaxDead: [580, 720],
    Overlay: OverlayTime,
  },
  '3.2.1': {
    video: Placeholder,
    type: "question",
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '3.2.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.2.1.2',
      response: 'Nein'
    },
    MinMaxInfected: [50650,62000],
    MinMaxDead: [1050, 1300]
  },
  //End from 3.2.1.X
  '3.2.1.1': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [1500, 1700]
  },
  '3.2.1.2': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [1500, 1760]
  },

  '3.2.2': {
    video: Placeholder,
    type: "question",
    question: 'Soll eine Ausgangsspeere über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '3.2.2.1',
      response: 'Nein'
    },
    secondOption: {
      next: '3.2.2.2',
      response: 'Ja'
    },
    MinMaxInfected: [4200000, 4300000],
    MinMaxDead: [260000, 260600]
  },

  '3.2.2.1': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [3000000, 3145000],
    AKW: [1500000,1550000],
  },

  '3.2.2.2': {
    video: Placeholder,
    type: "question",
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '3.2.2.2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.2.2.2.2',
      response: 'Nein'
    },
    MinMaxInfected: [6250000, 7600000],
    MinMaxDead: [328500, 400000],
  },

  '3.2.2.2.1': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [400000, 440000],
  },
  '3.2.2.2.2': {
    video: Placeholder,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [400000, 440000],
  },
};

const getters = {
  getStoryLineList: state => {
    return state;
  }
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
