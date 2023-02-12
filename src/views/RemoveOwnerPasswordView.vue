<template>
  <main>
    <n-h1 prefix="bar" align-text>Remove Owner Password</n-h1>
    <PDFUpload @upload:file="handlePDFUpload" />
  </main>
</template>

<script setup lang="ts">
import { removeOwnerPassword } from "@/utils/qpdf/remove-owner-password";
import { NH1 } from "naive-ui";
import PDFUpload from "@/components/pdf/upload/PDFUpload.vue";

const handlePDFUpload = async (file: File) => {
  const newBlob = await removeOwnerPassword(file);
  const url = URL.createObjectURL(newBlob);
  const aTag = document.createElement("a");

  aTag.href = url;
  aTag.download = file.name;
  aTag.click();
  URL.revokeObjectURL(url);
  aTag.remove();
};
</script>
