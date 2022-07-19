export default function useTitle(location) {
  if (location === '/') {
    return 'Sodiq | Software Developer'
  } else {
    return `Sodiq | ${location[1].toUpperCase()}${location.slice(2)}`
  }
}