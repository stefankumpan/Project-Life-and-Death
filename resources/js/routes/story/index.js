//Layout Import
const header = () => import('../../components/layout/header/index');
const footer = () => import('../../components/layout/footer/index');



const home = () => import('../../views/Home/index');
const game = () => import('../../views/Game/index');
const impressum = () => import('../../views/Impressum/index');
const leaderboard = () => import('../../views/Leaderboard/index.vue');



// import start from '../../components/start/index'
export default [
  {
    name: 'home',
    path: '/',
    components: {
      header: header,
      content: home,
      footer: footer,
    }, meta: {
      title: 'Home',
    },
  },  {
    name: 'game',
    path: '/game',
    components: {
      content: game,
    },
  } , {
    name: 'leaderboard',
    path: '/leaderboard',
    components: {
      header: header,
      content: leaderboard,
      footer: footer,
    },
  }, {
    name: 'impressum',
    path: '/impressum',
    components: {
      header: header,
      content: impressum,
      footer: footer,
    },
  }
]
