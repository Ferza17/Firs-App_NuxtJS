<template >
    <div>
        <v-container>
            <h1>This is users page</h1>   
            <v-form v-model="valid">
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                    <v-text-field
                        v-model="userId"
                        :counter="10"
                        label="User Id"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col class="my-2">
                        <v-btn 
                            @click="onLoadUser"
                            color="danger">Load User
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
            <!-- Nge Render foler /users -->
            <nuxt-child />
            <!-- /Nge Render foler /users -->

        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            userId: '',
            lastname: '',
        }
    },
    methods: {
        onLoadUser () {
            this.$router.push('/users/' + this.userId);
        }
    },
    layout: 'users'
}
</script>