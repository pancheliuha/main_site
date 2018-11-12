export const menu = [
    {
        id: 0,
        text: 'Серцево-судинні захворювання (ССЗ)',
        linkTo: '/cardio-vascular/statistic',
        redirectLink: false,
        activePaths: ['/cardio-vascular/statistic', '/cardio-vascular/diseases', '/cardio-vascular/facts-vs-myths'],
        subMenu: 'cardioVascularSubMenu'
    },
    {
        id: 1,
        text: 'Як знизити ризики виникнення ССЗ',
        linkTo: '/reduce-risks',
        redirectLink: false,
        activePaths: ['/reduce-risks'],
        subMenu: 'reduceRisksSubMenu'
    },
    {
        id: 2,
        text: 'Сигнали тривоги',
        linkTo: '/disease-alert/heart-attack',
        redirectLink: false,
        activePaths: ['/disease-alert/heart-attack', '/disease-alert/insult'],
        subMenu: 'diseaseAlertSubMenu'

    },
    {
        id: 3,
        text: 'Перша допомога',
        linkTo: '/first-aid',
        redirectLink: false,
        activePaths: ['/first-aid'],
        subMenu: 'firstAidSubmenu'
    },
    {
        id: 4,
        text: 'Для фахівців охорони здоров\'я',
        redirectLink: true,
        redirectUrl: 'https://www.pfizermed.com.ua/',
        activePaths: ['nothing'],
        subMenu: ''
    },
]