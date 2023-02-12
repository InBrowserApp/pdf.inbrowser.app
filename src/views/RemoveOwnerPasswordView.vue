<template>
  <main>
    <n-h1 prefix="bar" align-text>Remove Owner Password</n-h1>
  </main>
</template>

<script setup lang="ts">
import { removeOwnerPassword } from "@/utils/qpdf/remove-owner-password";
import { NH1 } from "naive-ui";
import { onMounted } from "vue";

onMounted(async () => {
  const res = await fetch("/test.pdf");
  const blob = await res.blob();

  const newBlob = await removeOwnerPassword(blob);
  console.log(newBlob);
});
</script>
