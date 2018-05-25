import Vue from 'vue';
import { MetaInfo } from 'vue-meta';
import VueRouter, { Route } from 'vue-router';
import { ActionContext, Store } from 'vuex';
import { AxiosInstance } from 'axios';

type Dictionary<T> = { [key: string]: T };

export interface NuxtContext {
    app: Vue,
    isClient: boolean,
    isServer: boolean,
    isStatic: boolean,
    isDev: boolean,
    isHMR: boolean,
    route: Route,

    store: Store<any>,
    env: any,

    params: Dictionary<string>,
    query: Dictionary<string>

    nuxtState: Object
}

export type ContextFunction = (context: NuxtContext) => void;

export type TransitionObject = {
    name?: string,
    mode?: string,
    css?: boolean,
    duration?: number,
    type?: string,
    enterClass?: string,
    enterToClass?: string,
    enterActiveClass?: string,
    leaveClass?: string,
    leaveToClass?: string,
    leaveActiveClass?: string
};

type ActionHandler<S, R> = (this: Store<S>, injectee: ActionContext<S, R>, payload: any) => any;

type Mutation<S> = (this: Store<S>, state: S, payload: any) => any;

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        head?: MetaInfo | (() => MetaInfo);

        asyncData?: ContextFunction;
        fetch?: ContextFunction;

        layout?: string | ContextFunction;
        middleware?: string | Array<string>;
        scrollToTop?: boolean;

        transition?: string | TransitionObject | ((to: Route, from: Route) => void);

        validate?: ((context: NuxtContext) => boolean);

        watchQuery?: Array<any>;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        head?: MetaInfo | (() => MetaInfo);
    }
}

declare module 'vuex' {

  interface Store<S> {
    $router: VueRouter
  }
  interface ActionTreeContext<S, R> {
    [key: string]: (this: Store<S>, injectee: ActionContext<S, R>, payload: any) => any;
  }

  interface MutationTreeContext<S> {
    [key: string]: (this: Store<S>, state: S, payload: any) => any;
  }
}
