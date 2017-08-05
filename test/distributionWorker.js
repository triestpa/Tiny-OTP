importScripts('../otp.min.js')

function getPsuedoRandomValue () {
  // Initialize the PRNG with a random seed each time.
  let secret = OTP.getRandomInt(0, Math.pow(10, 12))
  const otpGenerator = new OTP(secret)
  return otpGenerator.getTOTP()
}

// Our PRNG returns values between 0 and 1000000
const max = 10 ** 6

// We'll be charting the results in 100 bins on the UI thread
const ticks = 100

// The incremental size of each bin
const binSize = max / ticks

// Send data to UI thread after every 50,000 numbers
const postInterval = 5 * (10 ** 4)

// Initialize empty bin dictionary
const bins = {}

// Fill the bins with zeros
for (let i = 0; i < ticks; i++) {
  bins[i * binSize] = 0
}

// Round the number down to the closest bin
function roundToBin(number) {
  return Math.floor(number / binSize) * binSize
}

// Generate up to 1 billion random numbers
for (let i = 1; i <= 10 ** 9; i++) {
  // Increment the bin that the number falls into
  bins[roundToBin(getPsuedoRandomValue())] += 1

  // Once the post interval is reached, post data to the UI thread
  if (i % postInterval === 0) {
    postMessage(bins)
  }
}