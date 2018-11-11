<template>
    <header class="header">
        <router-link @click.native="closeMobileMenu" class="header-logo" :to="{name: 'Start'}">
            <img src="../../../assets/img/icons/logo-blue.png" alt="logo">
        </router-link>
        <NavMenu></NavMenu>
        <Burger></Burger>
    </header>
</template>

<script>
    import NavMenu from '../../UI/NavMenu/NavMenu'
    import Burger from '../../UI/Burger/Burger'

    export default {
        name: 'Header',
        data() {
            return {

            }
        },
        methods: {
            closeMobileMenu() {
                this.$root.$emit('toggle-menu', false)
                this.$root.$emit('close-mobile-menu', false)
            }
        },
        components: {
            NavMenu,
            Burger
        }
    }
</script>

<style lang="scss">
    @import "./header.scss";
</style>