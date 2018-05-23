import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $appInsights: Microsoft.ApplicationInsights.IAppInsights;
  }
}
