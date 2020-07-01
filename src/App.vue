<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title class="headline">
                <span class="font-weight-light">Spigot Drama Generator</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <dark-switch/>
        </v-app-bar>

        <v-main>
            <HelloWorld/>
        </v-main>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import DarkSwitch from './components/DarkSwitch';

    export default {
        name: 'App',

        components: {
            DarkSwitch,
            HelloWorld
        },

        data: () => ({
            //
        })
    };
</script>
