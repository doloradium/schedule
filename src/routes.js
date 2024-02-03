import { MainLayout } from './layouts/main'
import { AuthLayout } from './layouts/auth'

import { MarksList } from './components/MarksList/index'
import { NameForm } from './components/NameForm/NameForm'
import { SupportForm } from './components/SupportForm/SupportForm'
import { Menu } from './components/Menu'
import { Login } from './components/Login'

export const routes = [
    {
        path: '/auth',
        component: AuthLayout,
        routes: [
            {
                path: '/auth/login',
                component: Login
            }

        ]
    },
    {
        path: '*',
        component: MainLayout,
        routes: [
            {
                path: '/support',
                component: SupportForm
            },
            {
                path: '/name',
                component: NameForm
            },
            {
                path: '/',
                component: MarksList
            }

        ]
    }
]