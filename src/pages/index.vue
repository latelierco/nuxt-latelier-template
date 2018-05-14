<template>
  <section class="container">
    <div class="content">
      <logo/>
      <h1 class="title">
        L'Atelier
      </h1>
      <h2 class="subtitle">
        Turning good ideas into great products
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '~/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo
  }
});
</script>

<style lang="scss" scoped>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  transform: translateY(-129px);
}

.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */

  margin-top: 24px;

  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
