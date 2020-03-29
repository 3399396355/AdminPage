import Vue from 'vue'
import Vuex from 'vuex';

// import { alert } from './alert.module';
// import { authentication } from './authentication.module';
import { logs } from './logs.module';

Vue.use( Vuex )
export const store = new Vuex.Store({
    modules: {
        logs ,
        //alert,
        //authentication,
        //users
    }
});