<script>
export default {
  name: "App",
  data() {
    return {
      spaceXApiData: null,
      integrantes: [
        {
          name: 'Campestrini, Pablo',
          LU: '7114'
        },
        {
          name: 'Kachuk, Carlos',
          LU: '8971'
        },
        {
          name: 'Kutalek, Nicolás',
          LU: '6533'
        }
      ],
      profesores: [
        {
          name: 'Gerzel, Stella',
        },
        {
          name: 'Nuñez, Francisco',
        },
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.axios
        .get("https://api.spacexdata.com/v5/launches/latest")
        .then((response) => {
          console.log("Request:", response.request);
          console.log("Config:", response.config);
          console.log("Headers:", response.headers);
          console.log("Status:", response.status);
          this.spaceXApiData = response.data;
        });
    },
  },
};
</script>
<template>
  <main>
    <v-row class="bg-blue-grey-lighten-4" justify="center" no-gutters>
      <v-card width="1280" v-if="spaceXApiData" class="pa-5 ma-5">
        <v-row class="mt-5 mb-5" justify="center" no-gutters>
          <v-img :src="spaceXApiData.links.patch.small" webcastwidth="200"  height="125"></v-img>
        </v-row>
        <v-row class="mt-5 mb-5" justify="center" no-gutters>
          <h1>Proyecto de Redes</h1>
        </v-row>
        <v-row no-gutters>
          <h3>Profesores: </h3>
          <v-list lines="one">
            <v-list-item
              v-for="item in profesores"
              :key="item.name"
              :title="item.name"
            ></v-list-item>
          </v-list>
        </v-row>
        <v-row no-gutters>
          <h3>Integrantes: </h3>
          <v-list lines="one">
            <v-list-item
              v-for="item in integrantes"
              :key="item.name"
              :title="item.name"
              :subtitle="'L.U.: '+item.LU"
            ></v-list-item>
          </v-list>
        </v-row>
        <v-row class="mb-5" no-gutters justify="center">
          <iframe width="1280" height="720" :src="'https://www.youtube.com/embed/'+spaceXApiData.links.youtube_id"></iframe>
        </v-row>
      </v-card>
    </v-row>
  </main>
</template>
