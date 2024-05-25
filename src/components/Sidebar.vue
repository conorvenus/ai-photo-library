<script setup>
import SidebarLink from './SidebarLink.vue'
</script>
<template>
    <nav>
      <SidebarLink />
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
</template>