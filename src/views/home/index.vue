<template>
  <main>
    <HomeItem>
      <template #heading>Features</template>
      <ul>
        <li><a href="https://vuejs.org">Vue3</a> : (v{{ vueVersion }})</li>
        <li>
          <a href="https://vitejs.dev">Vite</a> : generation frontend tooling
        </li>
        <li>
          <a href="https://www.typescriptlang.org">TypeScript</a>
          : Is a superset of JavaScript that compiles to clean JavaScript
          output.
        </li>
        <li><a href="https://router.vuejs.org">Vue Router</a> : router.</li>
        <li>
          <a href="https://pinia.vuejs.org">Pinia</a> : Intuitive, type safe and
          flexible Store for Vue.
        </li>
        <li><a href="https://sass-lang.com">Sass</a> : Extension of CSS</li>
        <li>
          <a href="https://github.com/vitest-dev/vitest">Vitest</a> :
          Vite-native test framework
        </li>
        <li>
          <a href="https://eslint.org">ESlint</a> : Find and fix problems in
          your JavaScript code.
        </li>
        <li><a href="https://prettier.io">Prettier</a> : code formatter.</li>
        <li>
          <a href="https://github.com/antfu/unplugin-auto-import"
            >Unplugin-auto-import</a
          >
          : Auto import APIs on-demand for Vite.
        </li>
        <li>
          <a href="https://github.com/antfu/unplugin-vue-components"
            >Unplugin-vue-components</a
          >
          : On-demand components auto importing for Vue.
        </li>
        <li>
          <a href="https://github.com/typicode/husky">Husky</a> : Git hooks.
        </li>
        <li>
          <a href="https://github.com/okonet/lint-staged">Lint-staged</a> : Run
          linters against staged git files.
        </li>
        <li>
          <a href="https://axios-http.com/docs/intro">Axios</a>
          : Promise based HTTP client for the browser and node.js
        </li>
        <li>
          <a href="https://github.com/nuysoft/Mock/wiki/Getting-Started"
            >Mockjs</a
          >
          : A simulation data generator.
        </li>
      </ul>
    </HomeItem>
    <HomeItem>
      <template #heading>Usage</template>
      <ul>
        <li>
          Git clone
          <a href="https://github.com/huyikai/vue3-project-demo.git"
            >https://github.com/huyikai/vue3-project-demo.git</a
          >
        </li>
        <li>Running：npm run dev</li>
      </ul>
    </HomeItem>
  </main>
</template>
<script setup lang="ts">
import { version as vueVersion } from 'vue';
</script>
