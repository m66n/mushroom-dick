function weakRandomBelow (n) {
  return Math.floor(Math.random() * n)
}

function strongRandomBelow (n) {
  return window.crypto.getRandomValues(new Uint32Array(1))[0] % n
}

const randomBelow = window.crypto ? strongRandomBelow : weakRandomBelow

const LOWERS = 'abcdefghijklmnopqrstuvwxyz'
const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const DIGITS = '0123456789'
const SYMBOLS = '!@#$%^&*'

export function generatePassword (length, flags) {
  let pw = ''
  const pool = LOWERS + UPPERS + DIGITS
  while (pw.length < length) {
    const index = randomBelow(pool.length)
    pw += pool.charAt(index)
  }
  return pw
}

export function copyTextToClipboard (text) {
  let textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}
