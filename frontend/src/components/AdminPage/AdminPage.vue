<template>
   <div>
        <h1>Admin</h1>
        <p>This page can only be accessed by administrators.</p>
        <div>
            <h1>{{user}}</h1>
            All users from secure (admin only) api end point:
            <ul v-if="users.length">
                <li v-for="user in users" :key="user.id">
                    {{user.fullName}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { authenticationService, userService } from '../ServicesHelp';
export default {
    data () {
        return {
            user: authenticationService.currentUserValue,
            users: []
        };
    },
    created () {
        userService.getAll().then(users => this.users = users);
    }
};
</script>