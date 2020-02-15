import GlobalContext from '@/context'
enum Gender {
  female = 0,
  male = 1
}

export class User {
  static contextType = GlobalContext

  name: string = "";
  login: boolean = false;
  gender: Gender = 0;

  constructor(newUser: object) {
    this.update(newUser)
  }

  public update = (newProp: object) => {
    Object.keys(newProp).forEach(key => {
      this[key] = newProp[key]
    })
  }
}

export interface IGlobalContext {
  theme: string,
  user?: User,
  updateContext: (newState: object) => void
}
