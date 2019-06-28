<template>
    <router-link class="recipe-link" :to="{ name: 'recipe-show', params: { id: '1' } }">
    <div class="recipe-card -shadow">
        <BaseIcon name="users" />
        <span class="eyebrow">@{{ recipe.owner }} on {{ recipe.date }}</span>
        <h4 class="title">{{ recipe.title }}</h4>
        <span>{{ recipe.desc}}</span>
    </div>
    </router-link>
</template>

<script>
    export default {
        name: "recipe-card",
        data(){
            return {
                recipe: {
                    title: "une premiere recette",
                    desc: "c'est une delicieuse recette",
                    date: '01/01/2019',
                    owner: 'pierre'
                }

            }
        }
    }
</script>

<style scoped>
    .recipe-card {
        padding: 20px;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
    }
    .recipe-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .recipe-card > .title {
        margin: 0;
    }

    .recipe-link {
        color: black;
        text-decoration: none;
        font-weight: 100;
    }
</style>