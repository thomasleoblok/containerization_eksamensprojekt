<template>
   <div>
        <h1>Admin</h1>
        <div>
        <b-table
        hover head-variant="dark"
        :items="items" :fields="fields" 
        >
        <template v-slot:cell(actions)="{ item }">
        <button @click="DeleteItem(item)" :disabled="DeleteRun">Delete</button>
        </template>
        </b-table>
        </div>
    </div>
</template>

<script>
import { authenticationService, userService } from '../ServicesHelp';

// exports the credentiels to the store DeleteUser/Delete returns state-status and disabled the button untill the respond is returned
//model
export default {
    data () {
        return {
            user: authenticationService.currentUserValue,
            items: 
            [{id: 'id', fullName:'fullName', email:'email', role:'role'}],
            fields: ["id", "fullName", "email","role", "actions"],
            submitted: false
            
        };
    },
    //Viewmodel
    computed: {
        DeleteRun () {
            return this.$store.state.DeleteUser.status.DeleteRun
        },
        
    },
    created () {
        userService.getAll().then(items => this.items = items);
    },
    methods:{
        DeleteItem (item) {
            const userid = item.id
            this.submitted = true;
            const id = userid;
            console.log(id)
            const { dispatch } = this.$store;
            if (id) {
                dispatch('DeleteUser/Delete', { id });
               }  
            
        }
    }
};
</script>