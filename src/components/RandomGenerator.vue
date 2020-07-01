<template>
    <v-card>
        <v-card-text>
            <p class="text-h4">{{statement}}</p>
            <p>Share: {{shareUrl}}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" @click="regenerate()">
                Regenerate
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { nanoid } from 'nanoid';
    const seed = require('seed-random');

    function randomElement(arr, random)
    {
        return arr[Math.floor(random() * arr.length)];
    }

    export default {
        name: 'RandomGenerator',
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
