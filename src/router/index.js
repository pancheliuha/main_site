import Vue from 'vue'
import Router from 'vue-router'

import StartAside from '../components/Pages/Start/StartAside/StartAside'
import StartContent from '../components/Pages/Start/StartContent/StartContent'

import CardioVascularAside from '../components/Pages/CardioVascular/CardioVascularAside/CardioVascularAside'
import StatisticsContent from '../components/Pages/CardioVascular/StatisticsContent/StatisticsContent'
import DiseasesContent from '../components/Pages/CardioVascular/DiseasesContent/DiseasesContent'
import MythsContent from '../components/Pages/CardioVascular/MythsContent/MythsContent'

import ReduceRisksAside from '../components/Pages/ReduceRisks/ReduceRisksAside/ReduceRisksAside'
import ReduceRisksContent from '../components/Pages/ReduceRisks/ReduceRisksContent/ReduceRisksContent'

import DiseaseAlertAside from '../components/Pages/DiseaseAlert/DiseaseAlertAside/DiseaseAlertAside'
import HeartAttackContent from '../components/Pages/DiseaseAlert/HeartAttackContent/HeartAttackContent'
import InsultContent from '../components/Pages/DiseaseAlert/InsultContent/InsultContent'

import FirstAidAside from '../components/Pages/FirstAid/FirstAidAside/FIrstAidAside'
import FirstAidContent from '../components/Pages/FirstAid/FirtsAidContent/FirstAidContent'

import TestResult from '../components/Pages/TestResult/TestResultContent/TestResultContent'

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Start',
        components: {
            aside: StartAside,
            mainContent: StartContent
        }
      },
      {
          path: '/cardio-vascular/statistic',
          name: 'CardioStatistic',
          components: {
              aside: CardioVascularAside,
              mainContent: StatisticsContent
          }
      },
      {
          path: '/cardio-vascular/diseases',
          name: 'CardioDiseases',
          components: {
              aside: CardioVascularAside,
              mainContent: DiseasesContent
          }
      },
      {
          path: '/cardio-vascular/facts-vs-myths',
          name: 'CardioMyths',
          components: {
              aside: CardioVascularAside,
              mainContent: MythsContent
          }
      },
      {
          path: '/reduce-risks',
          name: 'ReduceRisks',
          components: {
              aside: ReduceRisksAside,
              mainContent: ReduceRisksContent
          }
      },
      {
          path: '/disease-alert/heart-attack',
          name: 'DiseaseAlertHeartAttack',
          components: {
              aside: DiseaseAlertAside,
              mainContent: HeartAttackContent
          }
      },
      {
          path: '/disease-alert/insult',
          name: 'DiseaseAlertInsult',
          components: {
              aside: DiseaseAlertAside,
              mainContent: InsultContent
          }
      },
      {
          path: '/first-aid',
          name: 'FirstAide',
          components: {
              aside: FirstAidAside,
              mainContent: FirstAidContent
          }
      },
      {
          path: '/test-result',
          name: 'TestResult',
          components: {
              mainContent: TestResult
          }
      }
  ],
    mode: 'history'
})
