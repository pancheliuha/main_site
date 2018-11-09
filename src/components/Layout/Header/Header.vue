<template>
    <header class="header">
        <router-link class="header-logo" :to="{name: 'Start'}">
            <img src="../../../assets/img/icons/logo-blue.png" alt="logo">
        </router-link>
        <NavMenu></NavMenu>
    </header>

</template>

<script>
    import NavMenu from '../../UI/NavMenu/NavMenu'

    export default {
        name: 'Header',
        data() {
            return {

            }
        },
        components: {
            NavMenu
        }
    }
</script>

<style>
    @import "./header.scss";
</style>