<template>
    <div class="nav-sub-menu">
        <slot></slot>
        <ul class="nav-sub-menu-list">
            <li     v-for="submenuItem in submenu"
                    :key="submenuItem.id"
                    :class="{active: submenuItem.activeLink === $route.path}"
                    class="nav-sub-menu-item">
                <router-link
                        v-if="submenuItem.activeLink.length"
                        :to="submenuItem.activeLink"
                        @click.native="closeMobileMenu"
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
                <a v-else
                   :href="submenuItem.redirectLink"
                   target="_blank"
                   class="nav-sub-menu-link"
                >
                    <span>{{ submenuItem.text }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'NavSubMenu',
        props: ['submenu'],
        data() {
            return {

            }
        },
        methods: {
            closeMobileMenu() {
                this.$root.$emit('toggle-menu', false)
                this.$root.$emit('close-mobile-menu', false)
            }
        }
    }
</script>

<style lang="scss">
    @import "./nav-sub-menu";
</style>