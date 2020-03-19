export const isJSONSource = (code) => {
  try {
    const parsed = JSON.parse(code)
    return true
  }
  catch (error) {
    return false
  }
}
