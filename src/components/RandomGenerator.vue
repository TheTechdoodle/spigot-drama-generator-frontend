<template>
    <v-card>
        <v-card-text>
            <p class="text-h4">{{statement}}</p>
        </v-card-text>
        <v-card-actions>
            <v-container>
                <v-row justify="center">
                    <v-col>
                        <v-btn color="success" @click="regenerate()" large>
                            Regenerate
                        </v-btn>
                        <Keypress key-event="keyup" :key-code="32" @success="regenerate()"/>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col align-self="center" class="col-12 col-md-5">
                        <text-share :value="shareUrl" label="Link"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { nanoid } from 'nanoid';
    import Keypress from 'vue-keypress';
    import TextShare from './TextShare';
    const seed = require('seed-random');

    function randomElement(arr, random)
    {
        return arr[Math.floor(random() * arr.length)];
    }

    export default {
        name: 'RandomGenerator',
        components: {TextShare, Keypress},
        data: () => ({
            statement: 'Bla bla bla',
            seedStr: ''
        }),
        methods: {
            regenerate(seedStr)
            {
                this.seedStr = seedStr || nanoid(5);
                const random = seed(this.seedStr);

                let sentence = randomElement(this.$dramaData.sentences, random);
                for(let match of sentence.match(/\[.+?]/g))
                {
                    let prop = match.slice(1, -1);
                    if(this.$dramaData.combinations.hasOwnProperty(prop))
                    {
                        sentence = sentence.replace(match, randomElement(this.$dramaData.combinations[prop], random));
                    }
                }
                this.statement = sentence;
            }
        },
        computed: {
            shareUrl()
            {
                let url = new URL(window.location);
                url.hash = this.seedStr;
                return url.toString();
            }
        },
        created()
        {
            this.regenerate(window.location.hash.replace('#', ''));
        }
    };
</script>

<style scoped>

</style>
