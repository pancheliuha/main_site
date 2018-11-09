<template>
    <ul class="nav-list">
        <li class="nav-item" v-for="menuItem in menu" :key="menuItem.id">
            <router-link class="nav-link" :to="menuItem.linkTo">
                {{ menuItem.text }}
            </router-link>
        </li>
    </ul>

</template>

<script>
    import { menu } from "./menu-arr";

    export default {
        name: 'NavMenu',
        data() {
            return {
               menu,
            }
        }
    }
</script>

<style>
    @import "nav-menu.scss";
</style>