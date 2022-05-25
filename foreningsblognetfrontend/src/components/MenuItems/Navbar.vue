<template>
<div class="navbar-container">
	<ul>
	<li><a href="/">Home</a></li>
	<li v-if="!$store.state.users.isLoggedIn"><a href="/login">Login</a></li>
  <li v-if="$store.state.users.isLoggedIn"><a href="/login">Logout</a></li>
  <li v-if="$store.state.users.isAdmin"><a href="/admin">Admin</a></li>
	<li><a href="/events">Events</a></li>
  <li><a href="/Blogs">Blogs</a></li>

	</ul>  
</div>
</template>

<script>
import {mapGetters} from 'vuex'
//ViewModel
export default({
    name: 'Navbar',
        
    data: () => ({
		
	}),
  // used to check user state on navbar on loggedin and if admin 
    computed: {
      ...mapGetters(['GetLoginState', 'GetAdminState']),
      
    }
})

</script>

<style>
.navbar-container{
	margin-bottom: 40px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgb(222, 222, 222);
}

li {
  float: left;
  color: black;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(119, 119, 119);
}
</style>