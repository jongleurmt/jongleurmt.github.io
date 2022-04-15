import { Link } from "../interfaces/link";

export const outerNav: Link[] = [
    {
        image: '/assets/logo/jongleur-solid.svg',
        imageActive: '/assets/logo/jongleur.svg',
        label: 'Jongleur',
        routerLink: '/app/jongleur'
    },
    {
        icon: 'dpad-fill',
        label: 'Games',
        routerLink: '/app/games'
    },
    {
        icon: 'megaphone-fill',
        label: 'News',
        routerLink: '/app/news'
    }
];

export const innerNav: { url: string, links: Link[] }[] = [
    {
        url: 'jongleur',
        links: [
            {
                image: '/assets/logo/jongleur-solid.svg',
                imageActive: '/assets/logo/jongleur.svg',
                label: 'About',
                routerLink: '/app/jongleur/about'
            },
            // {
            //     icon: 'phone-vibrate-fill',
            //     label: 'Contact',
            //     routerLink: '/app/jongleur/contact'
            // },
            {
                icon: 'person-heart',
                label: 'Connect',
                routerLink: '/app/jongleur/connect'
            }
        ]
    },
    {
        url: 'news',
        links: [
            {
                icon: 'megaphone',
                label: 'nlink 1',
                routerLink: '/app/news/#'
            },
            {
                icon: 'megaphone',
                label: 'nlink 1',
                routerLink: '/app/news/#'
            },
            {
                icon: 'megaphone',
                label: 'nlink 1',
                routerLink: '/app/news/#'
            },
            {
                icon: 'megaphone',
                label: 'nlink 1',
                routerLink: '/app/news/#'
            },
            {
                icon: 'megaphone',
                label: 'nlink 1',
                routerLink: '/app/news/#'
            }
        ]
    },
    {
        url: 'games',
        links: [
            {
                icon: 'controller',
                label: 'glink 1',
                routerLink: '/app/games/#'
            },
            {
                icon: 'controller',
                label: 'glink 1',
                routerLink: '/app/games/#'
            },
            {
                icon: 'controller',
                label: 'glink 1',
                routerLink: '/app/games/#'
            }
        ]
    },
];