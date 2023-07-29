export const generateRandomNumber = (
  min: number,
  max: number,
  step: number,
) => {
  const randomNum = min + Math.random() * (max - min)
  return Math.round(randomNum / step) * step
}

export const debounce = (callback: Function, wait: number) => {
  let timeout: any
  return (...args: any) => {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(context, args), wait)
  }
}
