import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)


const messages = {
    'en' : {
        msg : 'Welcome back {name}',
        menuList:{
            home : 'Home'
        }
    },
    'id' : {
        msg : 'Selamat datang {name}',
        menuList:{
            home : 'Halaman Utama'
        }
    }
}

const dateTimeFormats = {
    'en' : {
        'short' : {
            year : 'numeric',
            month: 'long',
            day : 'numeric',
            weekday : 'long'
        },
        'digit' : {
            year : 'numeric',
            month: '2-digit',
            day : '2-digit',
        }
    },
    'id' : {
        'short' : {
            year : 'numeric',
            month : 'long',
            day: 'numeric',
            weekday : 'long'
        },
        'digit' : {
            year : 'numeric',
            month: '2-digit',
            day : '2-digit',
        }
    }
}

const numberFormats = {
    'id' :{
        'currency' : {
            style : 'currency',
            currency : 'IDR',
            // minimumFractionDigits : 2,
            maximumFractionDigits:5
        }
    },
    'en':{
        'currency' : {
            style : 'currency',
            currency : 'USD',
            // minimumFractionDigits : 2,
            maximumFractionDigits:5
        }
    }
}

const i18n = new VueI18n({
    locale : 'en',
    fallbackLocale : 'id',
    messages,
    dateTimeFormats,
    numberFormats
})

export default i18n