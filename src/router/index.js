import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Admin from '../pages/admin.vue';
import Login from '../pages/login.vue';
import Cart from '../pages/Cart.vue';
import Shop from '../pages/Shop.vue';

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: 
    [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/Shop",
        name: "Shop",
        component: Shop,
    },
    {
        path: "*",
        redirect: "/",
    },

]});

router.beforeEach((to, from, next) =>{
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else next();
});

export default router;