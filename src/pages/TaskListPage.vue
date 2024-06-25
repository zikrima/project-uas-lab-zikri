<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Daftar Tugas Zikri Maarif</div>
      </q-card-section>
      <q-list bordered padding>
        <q-item clickable v-for="task in tasks" :key="task.id" @click="goToTask(task.id)">
          <q-item-section>{{ task.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, name: 'Tugas 1' },
        { id: 2, name: 'Tugas 2' },
        { id: 3, name: 'Tugas 3' },
        { id: 4, name: 'Tugas 4' },
        { id: 5, name: 'Tugas 5' },
        { id: 6, name: 'Tugas 6' },
        { id: 7, name: 'Tugas 7' }
      ]
    }
  },
  methods: {
    goToTask(taskId) {
      this.$router.push({ name: 'taskDetail', params: { id: taskId } })
    }
  }
}
</script>

<style scoped>
/* Tambahkan CSS jika diperlukan */
</style>
