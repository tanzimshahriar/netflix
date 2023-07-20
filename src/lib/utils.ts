export const generateRandomNumber = (
  min: number,
  max: number,
  step: number,
) => {
  const randomNum = min + Math.random() * (max - min)
  return Math.round(randomNum / step) * step
}
