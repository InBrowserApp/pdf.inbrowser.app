<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools List</n-h2>
    <router-link
      to="/tools/remove-owner-password"
      #="{ navigate, href }"
      custom
    >
      <n-button tag="a" :href="href" @click="navigate" text>
        <template #icon>
          <n-icon :component="Key16Regular" />
        </template>
        Remove Owner Password
      </n-button>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon } from "naive-ui";
import Key16Regular from "@vicons/fluent/Key16Regular";
</script>
