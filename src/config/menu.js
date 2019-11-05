const data = [
    // ORGANIZER
    {
        title: 'Dashboard',
        icon: 'dashboard',
        route: 'painel.dashboard',
        childrens: []
    },
    {
        title: 'Meus Eventos',
        icon: '',
        route: 'painel.organizer.events',
        permition: ['O'],
        childrens: []
    },
    {
        title: 'Configurações',
        icon: '',
        route: 'painel.organizer.configuration',
        permition: ['O'],
        childrens: []
    },
    // ATTENDEE
    {
        title: 'Minhas Inscrições',
        icon: '',
        route: 'painel.attendee.my-subscriptions',
        permition: ['A'],
        childrens: []
    },
    {
        title: 'Configurações',
        icon: '',
        route: 'painel.attendee.configuration',
        permition: ['A'],
        childrens: []
    }
]

export default {
    data
}