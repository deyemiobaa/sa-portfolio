export default function useTitle(location) {
  if (location === '/') {
    return 'Sodiq | Software Developer | Soft Life Advocate'
  } else {
    return `Sodiq | ${location[1].toUpperCase()}${location.slice(2)}`
  }
}