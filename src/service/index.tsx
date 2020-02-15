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

  static login = (state: any) => {
    const userData = {
      gender: 1,
      name: 'linrong'
    }
    const user = new User(userData);
    state.updateContext({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  static logout = (state: any) => {
    state.updateContext({ user: undefined })
    localStorage.removeItem('user')
  }

  public update = (newProp: object, state?: any) => {
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
}
/* END CLASS */

/* START INTERFACE */
export interface IGlobalContext {
  theme: string,
  user?: User,
  updateContext: (newState: object) => void
}
/* END INTERFACE */