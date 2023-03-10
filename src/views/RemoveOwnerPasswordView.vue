<template>
  <main>
    <n-h1 prefix="bar" align-text>Remove PDF Owner Password</n-h1>
    <PDFUpload @upload:file="handlePDFUpload" />

    <n-h2 prefix="bar" align-text>What is PDF Owner Password?</n-h2>
    <n-p>
      A PDF owner password is a password that is used to restrict documents in
      PDF files. In Adobe Acrobat, the owner password is known as the change
      permissions password. Sometimes also referred as a restriction password,
      PDF permissions password, or PDF master password depending on the PDF
      users.
    </n-p>
    <n-p>
      As of the latest PDF version, document restrictions put in place with an
      owner password can include the following:
      <n-ul>
        <n-li>Printing</n-li>
        <n-li>Changing the document</n-li>
        <n-li>Document assembly</n-li>
        <n-li>Content copying</n-li>
        <n-li>Content copying for accessibility</n-li>
        <n-li>Page and graphics extraction</n-li>
        <n-li>Commenting</n-li>
        <n-li>Filling of form fields</n-li>
        <n-li>Signing</n-li>
        <n-li>Creation of template pages</n-li>
      </n-ul>
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { removeOwnerPassword } from "@/utils/qpdf/remove-owner-password";
import { NH1, NH2, NP, NUl, NLi } from "naive-ui";
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
