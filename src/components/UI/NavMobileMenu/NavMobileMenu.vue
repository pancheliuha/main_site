<template>
    <div class="mobile-menu-wrapper" :class="{closed: !menuOpened}">
        <ul class="nav-list">
            <li
                    class="nav-item"
                    v-for="menuItem in menu"
                    :key="menuItem.id"
                    :class="{active: searchElInPaths(menuItem.activePaths)}"
            >
                <router-link
                        v-if="!menuItem.redirectLink"
                        class="nav-link"
                        :to="menuItem.linkTo"
                        @click.native="closeMobileMenu"
                >
                    <span>{{ menuItem.text }}</span>
                </router-link>
                <div v-if="menuItem.subMenu.length" class="submenu-wrapper">
                    <NavSubMenu :submenu="subMenus[menuItem.subMenu]"></NavSubMenu>
                </div>

                <a
                        v-if="menuItem.redirectLink"
                        :href="menuItem.redirectUrl"
                        class="nav-link"
                        target="_blank"
                >
                    {{ menuItem.text }}
                </a>
            </li>
        </ul>
        <div @click="closeMobileMenu" class="mobile-menu-backdrop"></div>
    </div>


</template>

<script>
    import { menu } from "../NavMenu/menu-arr";
    import NavSubMenu from '../../UI/NavSubMenu/NavSubMenu'
    import { cardioVascularSubMenu } from '../../Pages/CardioVascular/cardio-vascular-submenu'
    import {diseaseAlertSubMenu} from '../../Pages/DiseaseAlert/disease-alert-submenu';
    import {firstAidSubmenu} from '../../Pages/FirstAid/first-aid-submenu';
    import {reduceRisksSubMenu} from '../../Pages/ReduceRisks/reduce-risks-submenu';

    export default {
        name: 'NavMobileMenu',
        data() {
            return {
                menu,
                subMenus: {
                    cardioVascularSubMenu,
                    diseaseAlertSubMenu,
                    firstAidSubmenu,
                    reduceRisksSubMenu
                },
                menuOpened: false
            }
        },
        components: {
            NavSubMenu
        },
        methods: {
            searchElInPaths(pathsArr) {
                const currentRoute = this.$route.path;
                const searchEl = pathsArr.indexOf(currentRoute)
                return searchEl >=0
            },
            closeMobileMenu() {
                this.menuOpened = false
                this.$root.$emit('close-mobile-menu')
            },
            toggleMenu(menuOpened) {
                this.menuOpened = menuOpened;
            }
        },
        mounted() {
            this.$root.$on('toggle-menu', this.toggleMenu)
        }
    }
</script>

<style lang="scss">
    @import "./nav-mobile-menu.scss";
</style>