/* START ENUM */
enum Gender {
  'female' = 0,
  'male' = 1
}
/* END ENUM */

/* START CLASS */
export class User {
  name: string = "";
  gender: string = Gender[0];

  constructor(newUser: object) {
    this.update(newUser)
  }

  public update = (newProp: object, state?: IGlobalContext) => {
    Object.keys(newProp).forEach(key => {
      // 枚举类型的映射
      if (key === 'gender') {
        this[key] = typeof (newProp[key]) === 'string' ? newProp[key] : Gender[newProp[key]]
      } else {
        this[key] = newProp[key]
      }
    })
    if (state) {
      state.updateContext({ user: this })
    }
  }

  static login = (state: IGlobalContext) => {
    const userData = {
      gender: 1,
      name: 'linrong'
    }
    const user = new User(userData);
    state.updateContext({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  static logout = (state: IGlobalContext) => {
    state.updateContext({ user: undefined })
    localStorage.removeItem('user')
  }

  static restore = (state: IGlobalContext) => {
    const storedUser = localStorage.getItem('user')
    storedUser && state.updateContext({ user: new User(JSON.parse(storedUser)) })
  }
}
/* END CLASS */

/* START INTERFACE */
export interface IGlobalContext {
  theme: string,
  user?: User,
  updateContext: (newState: object) => void
}
/* END INTERFACE */