interface Scheme {
  login(): void;

  logout(): void;

  fetchUser(): any;
}

export default class LocalScheme implements Scheme {
  constructor() {
    const test: any[] = [];
  }
  login(): void {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
  fetchUser() {
    throw new Error('Method not implemented.');
  }
}
