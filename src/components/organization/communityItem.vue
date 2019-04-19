<template>
<div class="com-item fs-r28">
    <router-link :to="'/community/details/'+[community.id]">
    <div>
        <div class="box hd">
                <img :src="'../../../static/img/community/'+[community.logo]" alt="" >
            <div class="name">
                <h5 class="fs-r32">{{community.name}}</h5>
                <p>{{community.message}}</p>
            </div>
        </div>
        <div class="flex-row ct">
            <p>版主：<span>{{community.head}}</span></p>
            <p>成员：<span>{{community.num}}</span></p>
            <p>活动：<span>{{community.activenum}}</span></p>
        </div>
      </div>
    </router-link>
</div>
  
</template>

<script>

  export default {
    name:'',
    props:["community"],
    data () {
      return {
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.com-item{
    background: #fff;
    margin-bottom: 0.2rem;
}
.hd{
    padding: 0.2rem;
    border-bottom: 1px solid #F0F4F7;
}
.hd img{
    width: 20%;
    margin: 0.1rem;
    border-radius: 50%;
}
.hd .name h5{
    margin: 0.2rem 0.1rem;
}
.hd .name p{
    margin: 0.1rem;
    color: #969799;
}
.name {
    
    text-align: left;
    margin-left: 0.2rem
}
.ct{
    width: 100%;
}
.ct p{
    margin: 0.1rem;
    padding: 0.1rem;
    width: 33.33%;
    border-right: 1px solid #F0F4F7;
}
.ct p:nth-last-child(1)
{
border-right:none;
}
</style>