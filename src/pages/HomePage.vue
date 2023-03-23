<script setup lang="ts">
</script>

<template>
  <v-container>
    <v-carousel :color="'#7D7D7D'" id="carousel">
      <v-carousel-item
        src="https://scontent.ftpe9-1.fna.fbcdn.net/v/t39.30808-6/334950172_752937896248509_2917887479560866319_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=xv9KLDoar5cAX9FH6as&_nc_ht=scontent.ftpe9-1.fna&oh=00_AfAjhtP7PVInBaSTTaqsKgzpJ0uEhgbeDbPbkSfYdBQLdA&oe=6420002F"
      ></v-carousel-item>

      <v-carousel-item
        src="https://scontent.ftpe9-1.fna.fbcdn.net/v/t39.30808-6/327795310_1161000711285703_1519418558105098640_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=kN5YZwO2MSUAX8UhSUP&_nc_oc=AQls-23H3teUTncPChxyl3W02u2s3fuGfgZorbT7ZLnvNe5mmYGHpWdSbGcvRG5Akwg&_nc_ht=scontent.ftpe9-1.fna&oh=00_AfA5PhaVNc58VvOa3MaOZue7mZSlDTMAypixzI6IbPPfvQ&oe=6420AC90"
      ></v-carousel-item>

      <v-carousel-item
        src="https://scontent.ftpe9-1.fna.fbcdn.net/v/t39.30808-6/324431009_853213852576568_8811024443079132010_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=132DkZnL2BoAX-2cVRH&_nc_ht=scontent.ftpe9-1.fna&oh=00_AfCHyVNT08QFA1_zx9ijvX0W3ZSXUE8SQZAh3CEF-DvIlQ&oe=641F3322"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style scoped>
#carousel :deep(.v-carousel__controls){
  background: none;
}

</style>
