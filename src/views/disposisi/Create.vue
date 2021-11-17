<template>
  <v-form @submit.prevent="save">
    <v-card>
      <v-card-title> Diposisi </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <v-subheader>No Surat Penugasan </v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="No"></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-subheader>Tanggal Penugasan</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    clearable
                    label="Format (DD/MMMM/YYYY)"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date = null"
                  ></v-text-field>
                </template>
                <v-date-picker
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>Jenis Laporan</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                :loading="isLoading.jenis_laporan"
                :items="documentTypesOptions"
                :search-input.sync="documentcategorySearch"
                item-text="label"
                item-value="value"
                color="white"
                label="Jenis Laporan"
                placeholder="Start typing to Search"
                return-object
              ></v-autocomplete>
            </v-col>
            <v-col cols="2">
              <v-subheader>Upload File</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-file-input
                show-size
                label="File input"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>Satker</v-subheader>
            </v-col>
            <!-- {{getItems}} -->
            <v-col cols="4">
              <v-autocomplete
                :loading="isLoading.satker"
                color="white"
                item-text="label"
                item-value="value"
                label="Satker"
                placeholder="Start typing to Search"
                return-object
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <div class="text-center">
              <center>
                <v-btn block color="primary" class="mt-6" type="submit">
                  Save
                </v-btn>
              </center>

              <!-- <v-btn class="ma-2" :loading="loading" :disabled="loading" color="primary"
              @click="loader = 'loading'">
              Simpan
            </v-btn> -->
            </div>
            <div>
              <v-alert v-if="msg" dense text type="success">
                {{ msg }}
              </v-alert>
            </div>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-form>
</template>
<script>
import searchDocumentCategory 
    from '../../services/documentCategory.js'

export default {
  setup(props, content) {
    console.log("--",props,content);
  },
  data: () => ({
    documentTypes :[],
    documentcategorySearch: null,
    document_id: null,
    images: null,
    msg: null,
    // datepicker
    //date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
    menu1: false,
    // end
    // autocomplete
    isLoading: {
      satker: false,
      ketua_tim: false,
      pengendali_teknis: false,
      pengendali_mutu: false,
      jenis_laporan: false,
    },
    disposisiObject : {
      satker: null,
      ketua_tim: null,
      pengendali_teknis: null,
      pengendali_mutu: null,
      jenis_laporan: null,
      inspektor_wilayah: null,
      inspektor_utama: null,
      tanggal: null,
      file: null,
    },
    readOnly: {
      inspektor_wilayah: null,
      inspektor_utama: null,
    },
  }),
  computed: {
      documentTypesOptions() {
        return this.documentTypes;
      },
  },
  watch :{ 
      async documentcategorySearch(val){
        console.log(val);
        await searchDocumentCategory(val).then(res => {
            this.documentTypes = res.data
          })
          .catch(err => {
            console.log(err)
          })
      }
  }
};
</script>
