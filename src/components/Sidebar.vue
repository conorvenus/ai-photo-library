<script setup>
import SidebarSection from './SidebarSection.vue';
import ProfileSummary from './ProfileSummary.vue';
</script>
<template>
    <nav class="flex flex-col gap-16 flex-[0.3] h-full justify-between">
      <SidebarSection title="Library" :links="[{
        title: 'Photos',
        to: '/photos',
        icon: 'hi-photograph'
      }, {
        title: 'Albums',
        to: '/albums',
        icon: 'md-photoalbum-outlined'
      }, {
        title: 'Folders',
        to: '/folders',
        icon: 'bi-folder'
      }]" />
      <SidebarSection title="Collections" :links="[{
        title: 'Memories',
        to: '/memories',
        icon: 'bi-bookmark-heart'
      }, {
        title: 'Location',
        to: '/location',
        icon: 'co-location-pin'
      }, {
        title: 'People',
        to: '/people',
        icon: 'bi-people'
      }, {
        title: 'Add New',
        to: '/add-new',
        icon: 'md-addphotoalternate-outlined'
      }]" />
      <ProfileSummary name="John Doe" photoURL="https://ui-avatars.com/api/?name=John+Doe" />
    </nav>
</template>