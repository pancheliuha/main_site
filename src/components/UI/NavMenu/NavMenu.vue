<template>
    <ul class="nav-list">
        <li class="nav-item" v-for="menuItem in menu" :key="menuItem.id">
            <router-link
                    v-if="!menuItem.redirectLink"
                    class="nav-link"
                    :class="{active: searchElInPaths(menuItem.activePaths)}"
                    :to="menuItem.linkTo"
            >
                {{ menuItem.text }}
            </router-link>
            <a v-else :href="menuItem.redirectUrl" class="nav-link" target="_blank">{{ menuItem.text }}</a>
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
        },
        methods: {
            searchElInPaths(pathsArr) {
                const currentRoute = this.$route.path;
                const searchEl = pathsArr.indexOf(currentRoute)
                return searchEl >=0
            }
        }
    }
</script>

<style lang="scss">
    @import "./nav-menu.scss";
</style>