import { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}

declare type CallbackFunction<V, T = V> = (onFulfilled: (context: V) => T) => number;

declare module 'axios' {
  interface AxiosInstance {
    setHeader(name: string, value: string | Boolean, scopes?: Array<string> | string);

    setToken(name: string, value: string, scopes?: Array<string> | string);
    setToken(name: false);

    onRequest: CallbackFunction<AxiosRequestConfig>
    onResponse: CallbackFunction<AxiosResponse>
    onRequestError: CallbackFunction<AxiosError, any>
    onResponseError: CallbackFunction<AxiosError, any>
    onError: CallbackFunction<AxiosError, any>

    $request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;
    $get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    $delete(url: string, config?: AxiosRequestConfig): AxiosPromise;
    $head(url: string, config?: AxiosRequestConfig): AxiosPromise;
    $post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
    $put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
    $patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
  }
}

declare module 'vuex' {
  interface Store<S> {
    $axios: AxiosInstance
  }
}
