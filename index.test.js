import { Length } from "./trans-length"

describe("Length", () => {
  test("getVal", () => {
    const length = new Length(100)
    expect(length.getVal()).toBe(100)
  })

  test('1 英尺应该等于 12 英寸', () => {
    const length = new Length(1, "f").parseTo("inch")
    expect(length.getVal()).toBe(12)
  })

  test('9 英尺应该等于 3 码', () => {
    const length = new Length(9, "f").parseTo("yard")
    expect(length.getVal()).toBe(3)
  })

  test('24 英寸应该等于 2 英尺', () => {
    const length = new Length(24, "inch").parseTo("f")
    expect(length.getVal()).toBe(2)
  })

  test('36 英寸应该等于 1 码', () => {
    const length = new Length(36, "inch").parseTo("yard")
    expect(length.getVal()).toBe(1)
  })

  test('36 英寸应该等于 1 码', () => {
    const length = new Length(36, "inch").parseTo("yard")
    expect(length.getVal()).toBe(1)
  })

  test('1 码应该等于 3 英尺', () => {
    const length = new Length(1, "yard").parseTo("f")
    expect(length.getVal()).toBe(3)
  })

  test('1 码应该等于 36 英寸', () => {
    const length = new Length(1, "yard").parseTo("inch")
    expect(length.getVal()).toBe(36)
  })

  test('如果没有对应的转换单位，就返回当前单位', () => {
    const val = 1
    const unit = 'yard'
    const length = new Length(val, unit)
    const newLength = length.parseTo("mi")
    expect(length.equal(newLength)).toBeTruthy()
  })
})