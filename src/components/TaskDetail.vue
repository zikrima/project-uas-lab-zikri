<template>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Detail {{ task.name }}</div>
          <a :href="task.url" target="_blank">Go to {{ task.name }}</a>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: null,
        tasks: [
          { id: 1, name: 'Tugas 1', url: 'https://zikri-project-cv.netlify.app' },
          { id: 2, name: 'Tugas 2', url: 'https://github.com/zikrima/PBK_2' },
          { id: 3, name: 'Tugas 3', url: 'https://tugas3-zikri.netlify.app' },
          { id: 4, name: 'Tugas 4', url: 'https://github.com/zikrima/tugas4' },
          { id: 5, name: 'Tugas 5', url: 'https://zikri-jersey.netlify.app' },
          { id: 6, name: 'Tugas 6', url: 'https://zikri-pbk6.netlify.app' },
          { id: 7, name: 'Tugas 7', url: 'https://223510775-zikri.netlify.app' }
        ]
      }
    },
    created() {
      const taskId = this.$route.params.id
      this.task = this.tasks.find(task => task.id == taskId)
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan CSS jika diperlukan */
  </style>
  