<template>
  <div id="app">
    <NavMobileMenu></NavMobileMenu>
    <div class="content-wrapper">
      <AppHeader></AppHeader>
      <main class="main-content">
        <AppAside>
          <transition
                  name="fade-out"
                  leave-active-class="opacity-in">
            <router-view name="aside"></router-view>
          </transition>
        </AppAside>
        <AppContent>
          <transition
                  name="fade-out"
                  leave-active-class="opacity-in">
            <router-view name="mainContent"></router-view>
          </transition>
        </AppContent>
      </main>
    </div>
    <AppFooter></AppFooter>
    <Popup></Popup>
  </div>
</template>

<script>
    import AppHeader from './components/Layout/Header/Header';
    import AppFooter from './components/Layout/Footer/Footer';
    import AppAside from './components/Layout/Aside/Aside';
    import AppContent from './components/Layout/Content/Content';
    import NavMobileMenu from './components/UI/NavMobileMenu/NavMobileMenu';
    import Popup from './components/UI/Popup/Popup'

export default {
  name: 'App',
    components: {
        AppHeader,
        AppFooter,
        AppAside,
        AppContent,
        NavMobileMenu,
        Popup
    }
}
</script>

<style lang="scss">
  @import '~normalize.css/normalize';
  @import "./assets/scss/_mixins.scss";
  @import '~vue-directive-tooltip/css/index.css';
  @import "./App";
  @import "./assets/scss/common";
</style>
