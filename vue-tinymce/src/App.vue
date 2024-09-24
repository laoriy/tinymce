<script setup>
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue';
const content = ref('')
</script>

<template>
  <main id="sample">
    {{ content }}
    <Editor v-model="content" tinymceScriptSrc="http://localhost:3000/tinymce@7.3.0/tinymce.min.js" :init="{
      language: 'zh_CN',
      selector: 'textarea',  // change this value according to your HTML
      license_key: 'gpl',
      plugins: [
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'help', 'wordcount'
      ],
      promotion: false,
      branding: false,
      toolbar: 'undo redo | blocks | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    }" />
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 1000px;
  }
}
</style>