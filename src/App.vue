<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow  rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <div class="text-left"> <a class="navbar-brand float-left " href="#"
            target="_blank">
            <b class="logo"> VUE LOGIN PAGE</b>

          </a>
        </div>
        <div class="navbar-brand float-right">

          <b-dropdown id="dropdown-1" :text="activeLocale" variant="outline-secondary" class="dropDownMenu m-md-2"
            v-model="$i18n.locale">
            <b-dropdown-item class="locale-link" v-for="locale in locales" :key="locale.id" @click="setLocale(locale)"
              :class="{ 'is-current': locale === activeLocale }" href="#">
              {{ getLanguageString(locale) }}
            </b-dropdown-item>
          </b-dropdown>
        </div>

      </div>
    </nav>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import i18n from "./i18n"
// Restore locale from cookie, if it was set
import VueCookie from 'vue-cookies'
Vue.use(VueCookie)
Vue.use(i18n)


const localeStrings = {
  en: "English",
  de: "Deutsch"
}

Vue.config.lang = VueCookie.locales || 'en'

export default {
  props: {
    locales: {
      type: Array,
      default: () => ['en', 'de']
    },
  },
  data: function () {
    return {
      activeLocale: Vue.config.lang
    }
  },

  methods: {
    setLocale: function (locale) {
      Vue.config.lang = locale
      this.activeLocale = locale;
      this.$cookies.set('locale', locale)
      this.$i18n.locale = Vue.config.lang;
    },
    getLanguageString: function (locale) {
      return localeStrings[locale]
    }
  }
}
</script>