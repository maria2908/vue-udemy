import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './components/pages/TeamsList.vue';
import UsersList from './components/pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/pages/NotFound.vue';
import TeamsFooter from "@/components/pages/TeamsFooter.vue";
import UsersFooter from "@/components/pages/UsersFooter.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                {
                    name:'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        }, // our-domain.com/teams => TeamsList
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('sdfsfdsfd')
                console.log(to, from);
                next();
            }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior( _, _2, sevedPosition) {
        // console.log(to, from, sevedPosition );
        if (sevedPosition) {
            return sevedPosition;
        }
        return { left: 0, top: 0};
    }
});

router.beforeEach(function (to, from, next) {
    console.log('Gloval beforEach');
    console.log(to, from);
    if(to.meta.needsAuth) {
        console.log('Needs auth');
        next();
    } else {
        next();
    }
    next();
    // if(to.name === 'team-members') {
    //   next();
    // }
    // next({name: 'team-members', params: { teamId: 't2'}}); // onclick navigate just to members
});

router.afterEach(function (to, from) {
    console.log('global after each')
    console.log(to,from)
});

export default router;