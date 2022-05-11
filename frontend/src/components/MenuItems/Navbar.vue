<template>
<div class="navbar-container">
	<ul>
	<li><a href="/">Home</a></li>
	<li v-if="!$store.state.users.isLoggedIn"><a href="/login">Login</a></li>
  <li v-if="$store.state.users.isLoggedIn">
  <a href="/login">Logout</a>
  </li>
	<li><a href="/events">Events</a></li>
	</ul>  
</div>
</template>

<script>
import {mapGetters} from 'vuex'
// import { CurrentSession } from '../ServicesHelp/GlobalVariables';
export default({
    name: 'Navbar',
        
    data: () => ({
		//CS: CurrentSession
	}),
  //mounted: function() {
    //let user = JSON.parse(localStorage.getItem('user'));
    //if(user && user.token) 
        //{
            //CurrentSession.isLoggedIn = true
        //}
        //if(!user && !user.token)
        //{
            //CurrentSession.isLoggedIn = false
    //     }
    // },
    computed: {
      ...mapGetters(['GetLoginState'])
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