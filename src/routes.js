import Pokelist from './components/Pokelist.vue'
import Followme from './components/Followme.vue'
import ContactForm from './components/ContactForm.vue'

export const routes = [
    {
        path: '',
        component:Pokelist
    },
    {
        path: '/followme',
        component: Followme
    },
    {
        path: '/contactme',
        component: ContactForm
    }
];