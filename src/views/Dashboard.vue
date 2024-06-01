<template>
  <div class="min-h-screen bg-gray-500">
    <NavBar />
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
        <DashboardTable />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/Reuse/navbar.vue'
import DashboardTable from '../components/Reuse/DashboardTable.vue'

export default {
  name: 'DashboardPage',
  components: {
    NavBar,
    DashboardTable,
  },
}
</script>