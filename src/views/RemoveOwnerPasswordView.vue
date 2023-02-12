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
import { useHead } from "@vueuse/head";

useHead({
  title: "Remove Owner Password | PDF InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Remove PDF owner password online. Fully runs in your browser, no data is sent to the server. Fast, secure, and offline capable.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://pdf.inbrowser.app/tools/remove-owner-password",
    },
  ],
});


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
