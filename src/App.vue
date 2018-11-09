<template>
  <div id="app">
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
  </div>
</template>

<script>
    import AppHeader from './components/Layout/Header/Header';
    import AppFooter from './components/Layout/Footer/Footer';
    import AppAside from './components/Layout/Aside/Aside';
    import AppContent from './components/Layout/Content/Content';

export default {
  name: 'App',
    components: {
        AppHeader,
        AppFooter,
        AppAside,
        AppContent
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
