<template>
<div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>          
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ListContainer from '@/pages/Home/ListContainer'
import Reconmmend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
    name:'home',
    components:{
        ListContainer,
        Reconmmend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted() {
        this.$store.dispatch("floorList")
    },
    computed:{
        ...mapState({
            floorList:state=>state.home.floorList
        })
    }
}
</script>

<style>

</style>