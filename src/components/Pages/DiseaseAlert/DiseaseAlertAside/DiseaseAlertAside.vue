<template>
    <div class="reduce-risks-aside common-aside">
        <NavSubMenu :submenu="submenu" class="little-submenus">
            <div class="nav-sub-menu-link">Сигнали тривоги</div>
        </NavSubMenu>
    </div>
</template>

<script>
    import NavSubMenu from '../../../UI/NavSubMenu/NavSubMenu'
    import { diseaseAlertSubMenu } from '../disease-alert-submenu'

    export default {
        name: 'DiseaseAlertAside',
        components: {
            NavSubMenu
        },
        data() {
            return {
                submenu: diseaseAlertSubMenu
            }
        }
    }
</script>

<style lang="scss">
    .little-submenus {
        a.nav-sub-menu-link {
            font-family: "Helvetica-Light", sans-serif;
            font-size: 21px;
        }
    }
</style>