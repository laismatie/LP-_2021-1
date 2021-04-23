<template>
  <v-app>
    <v-main>
      <Curriculum/>
    </v-main>
  </v-app>
</template>

<script>
import Curriculum from './components/Curriculum';

export default {
  name: 'App',

  components: {
    Curriculum,
  },

  data: () => ({
    //
  }),
};
</script>
