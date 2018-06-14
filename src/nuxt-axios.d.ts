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

    $request(config: AxiosRequestConfig): Promise<any>;
    $get(url: string, config?: AxiosRequestConfig): Promise<any>;
    $delete(url: string, config?: AxiosRequestConfig): Promise<any>;
    $head(url: string, config?: AxiosRequestConfig): Promise<any>;
    $post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
    $put(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
    $patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
  }
}

declare module 'vuex' {
  interface Store<S> {
    $axios: AxiosInstance
  }
}
