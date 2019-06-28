<template>
    <div>
    <h1>Mes recettes</h1>
    <recipe-card></recipe-card>
        <!--<MediaBox>-->
            <!--<h2 slot="heading">Adam Jahr</h2>-->
            <!--<p slot="paragraph">My words.</p>-->
        <!--</MediaBox>-->
    </div>

</template>

<script>
    import axios from 'axios'
    import RecipeCard from '@/components/RecipeCard.vue';
    export default {
        name: "recipe-list",
        data(){
          return {
              recipes:[]
          }
        },
        components:{
            RecipeCard,
        },
        created(){
            axios.get('http://localhost:3000/recipes')
                .then(response =>{
                    this.recipes = response.data;
                })
                .catch(error =>{
                    console.log('There was an error:',error.message)
                })
        }
    }
</script>

<style scoped>

</style>