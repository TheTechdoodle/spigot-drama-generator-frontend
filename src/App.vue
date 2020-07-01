<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title class="headline">
                <span class="font-weight-light">Spigot Drama Generator</span>
                <v-btn icon
                       href="https://github.com/TheTechdoodle/spigot-drama-generator-frontend"
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <dark-switch/>
        </v-app-bar>

        <v-main>
            <v-container v-if="hasData">
                <v-row class="text-center">
                    <v-col cols="12">
                        <random-generator/>
                    </v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="12">
                        <v-card>
                            <v-card-text class="text-subtitle-1">
                                <span class="text-decoration-line-through">Steals</span>
                                 Uses data from
                                <a href="https://github.com/md678685/spigot-drama-generator">
                                    md678685's Spigot Drama Generator
                                </a>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container v-else>
                <v-alert color="error">Could not get data!</v-alert>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import DarkSwitch from './components/DarkSwitch';
    import RandomGenerator from './components/RandomGenerator';

    export default {
        name: 'App',
        components: {
            RandomGenerator,
            DarkSwitch
        },
        computed: {
            hasData()
            {
                return this.$dramaData !== null;
            }
        }
    };
</script>
