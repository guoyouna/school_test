<template>
  <div>
      <div v-for="(item,index) in community" :key="index">
        <router-link to="/community/details/:id">
          <community-item :community="item"></community-item>
        </router-link>
      </div>
  </div>
</template>

<script>
import communityItem from "@/components/organization/communityItem";
  export default {
    name:'',
    props:[''],
    data () {
      return {
        community:[]
      };
    },

    components: {
        communityItem
    },

    computed: {},

    beforeMount() {},

    mounted() {
      this.getCommunity();
    },

    methods: {
      getCommunity() {
        this.$http.get('/community',{
        emulateJSON: true
        }).then(res=>{
          this.community=res.data;
            console.log(this.community)
        }, error=> {
        console.log(error)
        })
        },
    },

    watch: {}

  }

</script>
<style lang='' scoped>

</style>