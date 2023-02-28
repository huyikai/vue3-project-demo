<template>
  <div class="container">
    <button @click="request">Request</button>
    <button @click="setSession">Set Session</button>
  </div>
</template>
<script lang="ts" setup>
import { login } from '@/api/user';
import { session } from '@/utils/storage';
const request = async () => {
  let token = await login();
  alert('response: ' + JSON.stringify(token));
};
const setSession = () => {
  session.set('token', 123456);
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  gap: 10px;
}
</style>
