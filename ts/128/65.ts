enum DFA_STATE {
  Initial,
  IntSign,
  Int,
  Point,
  PointNoInt,
  Fraction,
  Exp,
  ExpSign,
  ExpInt,
  Illegal
}

enum CHAR_TYPE {
  Number,
  Sign,
  Exp,
  Point,
  Illegal,
}

const toCharType = (ch: string): CHAR_TYPE => {
  if (ch >= '0' && ch <= '9') return CHAR_TYPE.Number
  if (ch === '+' || ch === '-') return CHAR_TYPE.Sign
  if (ch === 'e' || ch === 'E') return CHAR_TYPE.Exp
  if (ch === '.') return CHAR_TYPE.Point
  return CHAR_TYPE.Illegal
}

function isNumber(s: string): boolean {
  let state: DFA_STATE = DFA_STATE.Initial
  const transer = (state: DFA_STATE, type: CHAR_TYPE): DFA_STATE => {
    switch (state) {
      case DFA_STATE.Initial:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.Int
          case CHAR_TYPE.Sign:
            return DFA_STATE.IntSign
          case CHAR_TYPE.Point:
            return DFA_STATE.PointNoInt
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.IntSign:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.Int
          case CHAR_TYPE.Point:
            return DFA_STATE.PointNoInt
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.Int:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.Int
          case CHAR_TYPE.Point:
            return DFA_STATE.Point
          case CHAR_TYPE.Exp:
            return DFA_STATE.Exp
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.Point:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.Fraction
          case CHAR_TYPE.Exp:
            return DFA_STATE.Exp
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.PointNoInt:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.Fraction
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.Fraction:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.Fraction
          case CHAR_TYPE.Exp:
            return DFA_STATE.Exp
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.Exp:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.ExpInt
          case CHAR_TYPE.Sign:
            return DFA_STATE.ExpSign
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.ExpSign:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.ExpInt
          default:
            return DFA_STATE.Illegal
        }
      case DFA_STATE.ExpInt:
        switch (type) {
          case CHAR_TYPE.Number:
            return DFA_STATE.ExpInt
          default:
            return DFA_STATE.Illegal
        }
      default:
        return DFA_STATE.Illegal
    }
  }
  for (const ch of s) {
    const newState: DFA_STATE = transer(state, toCharType(ch))
    if (newState === DFA_STATE.Illegal) return false
    state = newState
  }
  return state === DFA_STATE.Int || state === DFA_STATE.Point || state === DFA_STATE.ExpInt || state === DFA_STATE.Fraction
};