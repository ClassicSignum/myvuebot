<template>
  <div id="app">
    <!-- Root foo: {{rootFoo}} <br/>
    Robot foo: {{robotFoo}} <br/>
    user foo: {{userFoo}} <br/>
    <br/>
    root getter foo: {{rootGetterFoo}} <br/>
    robot getter foo: {{robotGetterFoo}} <br/> -->
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" exact>

            <img class="logo" src="./assets/build-a-bot-logo.png" alt=""/>
            Build a bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" exact>
            Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link :to="{name: 'Cart'}" exact>
            Cart
            </router-link>
            <div class="cart-item">
              {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
          <router-view name="sidebar"/>
      </aside>
    <main>
      <router-view />
      <!-- if u dont give any name to the router view then name is 'default' -->
    <!-- <RobotBuilder /> -->
    </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    // rootFoo() {
    //   return this.$store.state.foo;
    // },
    // robotFoo() {
    //   return this.$store.state.robots.foo;
    // },
    // userFoo() {
    //   return this.$store.state.users.foo;
    // },

    // instead of using above code we could use this code below
    ...mapState({
      rootFoo: 'foo',
      robotFoo: (state) => state.robots.foo,
      userFoo: (state) => state.users.foo,
    }),
    // rootGetterFoo() {
    //   return this.$store.getters.foo;
    // },
    // robotGetterFoo() {
    //   return this.$store.getters['robots/foo'];
    // },
    // userGetterFoo() {
    //   return this.$store.getters['users/foo']; won't work cuz getters only works with namespaced
    // },
    ...mapGetters({
      rootGetterFoo: 'foo',
    }),
    ...mapGetters('robots', { robotGetterFoo: 'foo' }),
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>
<style >

body{
  background: linear-gradient(to bottom,#555,#999);
  background-attachment: fixed;
}

</style>

<style scoped>

/* if scoped then only affects to this component..
but if not scoped then it affects globally,like above style tag */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main{
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul,li {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.cart{
  position: relative;
  border-right:none ;
  margin-left: auto;
}
.cart-item{
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.router-link-active{
 color: white;
 font-weight: 700;
}
.container{
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside{
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
