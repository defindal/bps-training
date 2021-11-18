<template>
  <v-form>
    <v-card>
      <v-card-title> Diposisi </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <v-subheader>No Surat Penugasan </v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="No" 
              v-model="no_surat" 
              :error-messages="NoSuratError"
              required
              @input="$v.no_surat.$touch()"
              @blur="$v.no_surat.$touch()">
            </v-text-field>
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
                    required
                    v-bind="attrs"
                    v-model="tanggal"
                    :error-messages="tanggalError"
                    v-on="on"
                    @input="$v.tanggal.$touch()"
                    @blur="$v.tanggal.$touch()"
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
                <v-btn block color="primary" class="mt-6" 
                    type="submit" @click="submit">
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
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 
    'vuelidate/lib/validators/'


export default {

  setup(props, content) {
    console.log("--",props,content);
  },
  mixins: [validationMixin],
  data: () => ({
    documentTypes :[],
    documentcategorySearch: null,
    
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

    document_id: null,
    tanggal: '',
    no_surat : '',
    jenis_laporan: null,
    satker: null,
    file: null,
   
    ketua_tim: null,
    pengendali_teknis: null,
    pengendali_mutu: null,
    inspektor_wilayah: null,
    inspektor_utama: null,
    readOnly: {
      inspektor_wilayah: null,
      inspektor_utama: null,
    },
  }),
  validations :{
    tanggal: {required},
    no_surat : {required , maxLength : maxLength(10)},    
  },
  computed: {
      documentTypesOptions() {
        return this.documentTypes;
      },
      tanggalError(){
          const errors = [];
          if(!this.$v.tanggal.$dirty) return errors
          !this.$v.tanggal.required && 
            errors.push("Tanggal Harus diisi")
          return errors;
      },
        NoSuratError(){
          const errors = [];
          if(!this.$v.no_surat.$dirty) return errors
          !this.$v.no_surat.required && errors.push("No Surat Harus diisi")
          return errors;
      }
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
  },
  methods:{
      submit(){
           this.$v.$touch()
      }
  }
};
</script>
