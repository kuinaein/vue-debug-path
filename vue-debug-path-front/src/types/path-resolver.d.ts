import PathResolver from '@/debug-router/PathResolver';

declare module 'vue/types/vue' {
  interface Vue {
    $path: PathResolver;
  }
}
