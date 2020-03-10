const configs = require("../configs")
const linter = require("./linter")

describe("Validate eslint configs", () => {
  it("should lint using core preset", () => {
    const output = linter("./samples/base.js", configs.core)

    expect(output.results[0].messages).toStrictEqual([])
  })

  it("should lint using defaults preset", () => {
    const output = linter("./samples/base.js", configs.defaults)

    expect(output.results[0].messages).toStrictEqual([])
  })

  it("should lint using javscript preset", () => {
    const output = linter("./samples/base.js", configs.javascript)

    expect(output.results[0].messages).toStrictEqual([])
  })

  it("should lint using javscriptReact preset", () => {
    const output = linter("./samples/base.js", configs.javascriptReact)

    expect(output.results[0].messages).toStrictEqual([])
  })
})
