export default function isValidHttpUrl(string: string) {
  try {
    // eslint-disable-next-line no-new
    new URL(string)
  } catch (_) {
    return false
  }

  return true
}
