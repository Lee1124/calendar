import homePage from '@/components/homePage/homePage';
import Calender from '@/components/homePage/calendar/calendar';

export default [
  {
    path: '/',
    name: 'homePage',
    component: homePage,
    children: [
      {
        path: '/',
        name: 'Calender',
        component: Calender,
      },
    ]
  }
]
