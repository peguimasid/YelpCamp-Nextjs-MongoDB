export default function removeDoubledSpaces(text: string) {
  return text.replace(/ {2,}/g, ' ')
}
