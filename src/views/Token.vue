<template>
    <main>
        <h1>Token information</h1>
        <hr>
        <p>token: {{getToken}}</p>
        <br>
        <!-- <template v-if="userdata"> -->
            {{userdata}}
        <!-- </template> -->
    </main>
</template>

<script>
import { mapGetters } from "vuex"
import UserData from '@/shared/user-data'
export default {
    name: 'Token',
    data() {
        return {
            userdata: ''
        }
    },
    computed: {
        ...mapGetters(["getToken"])
    },
    methods: {
        async getUserInfo () {
            const data = await UserData.getUserInfo(this.getToken);
            this.userdata = data.user;
            /**
             * Pendiente:
             * Error-handler
             * Eliminar password y id del backend (desde el modelo?)
             * Implementar en ambos comonentes
             */
        }
    },
    created () {
        this.getUserInfo()
    }
}
</script>