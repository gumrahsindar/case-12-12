const transitionName = ref('fade')

const transitions = ['fade', 'slide', 'zoom']

export const getRandomTransition = () => {
  const randomIndex = Math.floor(Math.random() * transitions.length)
  transitionName.value = transitions[randomIndex]

  return transitionName
}
