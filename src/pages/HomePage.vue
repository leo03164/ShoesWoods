<script setup lang="ts">
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const items = [
  {
    id: 1,
    title: 'Top 1 Australian beaches',
    subtitle: 'Number 1',
    content: 'Whitsunday Island, Whitsunday Islands'
  },
  {
    id: 2,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 2',
    content: 'Byron Bay, New South Wales'
  },
  {
    id: 3,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 3',
    content: 'Cable Beach, Western Australia'
  },
  {
    id: 4,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 4',
    content: 'Noosa Main Beach, Queensland'
  },
  {
    id: 5,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 5',
    content: 'Bells Beach, Victoria'
  },
  {
    id: 6,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 6',
    content: 'Manly Beach, New South Wales'
  },
  {
    id: 7,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 7',
    content: 'Burleigh Heads Beach, Queensland'
  },
  {
    id: 8,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 8',
    content: 'Bondi Beach, New South Wales'
  },
  {
    id: 9,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 9',
    content: 'Surfers Paradise Beach, Queensland'
  },
  {
    id: 10,
    title: 'Top 10 Australian beaches',
    subtitle: 'Number 10',
    content: 'Hyams Beach, Jervis Bay Territory'
  }
]
</script>

<template>
  <v-container fluid class="homePage__container">
    <v-row no-gutters>
      <v-col class="postInfoCard__column" v-for="item in items" :key="item.id" :cols="userStore.isMobile ? 12 : 3">
        <v-card class="mx-auto postInfoCard">
          <v-img
            class="align-end text-white"
            src="https://scontent.ftpe9-1.fna.fbcdn.net/v/t39.30808-6/334950172_752937896248509_2917887479560866319_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=xv9KLDoar5cAX9FH6as&_nc_ht=scontent.ftpe9-1.fna&oh=00_AfAjhtP7PVInBaSTTaqsKgzpJ0uEhgbeDbPbkSfYdBQLdA&oe=6420002F"
            cover
          >
          </v-img>

          <!-- 這個比較適合放 title -->
          <v-card-subtitle class="pt-4"> {{ item.subtitle }} </v-card-subtitle>

          <v-card-text>
            <div>{{ item.content }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange"> Share </v-btn>

            <v-btn color="orange"> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.postInfoCard__column{
  margin-top: 15px;
}
@media screen and (min-width: 768px) {
  .homePage__container{
    display: flex;
    justify-content: center;
    padding: 0 100px;
  }
}
</style>
