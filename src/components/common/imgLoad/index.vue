<template>
  <div>
    <ul>
      <li v-for="img in imgs" :key="img" style="float:left;">
        <img :src="img" alt>
      </li>
    </ul>
    <label for="upload-image" style="float:left;">
      <i class="icon icon-xiangji"></i>
    </label>
    <input
      ref="upload"
      type="file"
      @change="upload"
      id="upload-image"
      style="display:none;"
      multiple
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
      imgLength: 5,
    };
  },
  methods: {
    upload() {
      let file = this.$refs.upload.files[0];
      let fr = new FileReader();
      fr.onload = () => {
        this.imgs.push(fr.result);
      };
      fr.readAsDataURL(file);
    }
  }
};
</script>

<style lang='scss' scoped>
input,
label,
li img {
  width: 2rem;
  height: 2rem;
  font-size: 0.2rem;
  margin-left: 0.2rem;
  border: 1px dashed #666;
}
.icon{
    color: #666;
    line-height: 2rem;
}
</style>
