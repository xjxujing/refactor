/**
 * 实现单位换算
 * 1 英尺(foot) = 12 英寸(inch)
 * 1 码(yard) = 3 英尺(foot)
 * */
import { YARD, F, INCH } from "./consts"

export class Length {
  constructor(val, unit) {
    this.value = val
    this.unit = unit
  }

  getVal() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  // 转换单位
  parseTo(u) {
    let len = this

    if (this.unit === YARD) {
      if (u === F) {
        len = new Length(this.value * 3, u)
      } else if (u === INCH) {
        len = new Length(this.value * 36, u)
      }
    }

    if (this.unit === INCH) {
      if (u === YARD) {
        len = new Length(this.value / 36, u)
      } else if (u === F) {
        len = new Length(this.value / 12, u)
      }
    }

    if (this.unit === F) {

      // 英尺转码
      if (u === YARD) {
        len = new Length(this.value / 3, u)

        // 英尺转英寸
      } else if (u === INCH) {
        len = new Length(this.value * 12, u)
      }
    }

    return len
  }

  equal(length) {
    return this.value === length.getVal() && this.unit === length.getUnit()
  }
}