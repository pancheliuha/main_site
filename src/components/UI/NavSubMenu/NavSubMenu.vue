<template>
    <div class="nav-sub-menu">
        <slot></slot>
        <ul class="nav-sub-menu-list">
            <li     v-for="submenuItem in submenu"
                    :key="submenuItem.id"
                    :class="{active: submenuItem.activeLink === $route.path}"
                    class="nav-sub-menu-item">
                <router-link
                        :to="submenuItem.activeLink"
                        class="nav-sub-menu-link">
                        <span>{{ submenuItem.text }}</span>
                    <transition name="fadeHeight" mode="out-in">
                        <span
                                v-if="submenuItem.activeLink === $route.path"
                                class="nav-sub-menu-subtext grow">
                            {{ submenuItem.subtext }}
                        </span>
                    </transition>

                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'NavSubMenu',
        props: ['submenu'],
        data() {
            return {

            }
        },
        mounted() {
            console.log(this.$route.path);
        }
    }
</script>

<style lang="scss">
    @import "./nav-sub-menu";
</style>