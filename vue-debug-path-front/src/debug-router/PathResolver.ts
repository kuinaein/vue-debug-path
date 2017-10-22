import Vue from 'vue';

export default class PathResolver {
  private static installed: boolean = false;
  private readonly contextPath: string;

  public static install(vue: typeof Vue, options: {
    contextPath: string
  }) {
    if (PathResolver.installed) {
      return;
    }
    PathResolver.installed = true;

    const instance = new PathResolver(options.contextPath);
    Object.defineProperty(Vue.prototype, '$path', {
      get() {
        return instance;
      }
    });
  }

  private constructor(contextPath: string) {
    // get rid of trailing slash
    this.contextPath = contextPath.replace(/\/$/, '');
  }

  public abs(path: string): string {
    return 'production' === process.env.NODE_ENV ?
        this.contextPath + path : '#' + path;
  }
}
