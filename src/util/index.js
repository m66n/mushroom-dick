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
const AMBIGUOUS = 'B8G6I1l!0OQDS5Z2'

function containsAny (haystack, needles) {
  for (let i = 0; i < haystack.length; ++i) {
    if (needles.indexOf(haystack[i]) !== -1) {
      return true
    }
  }
  return false
}

export const flags = {
  uppers: true,
  digits: true,
  symbols: false,
  ambiguous: false
}

export function generatePassword (length, flags) {
  let pw = ''
  let pool = LOWERS
  if (flags.uppers) {
    pool += UPPERS
  }
  if (flags.digits) {
    pool += DIGITS
  }
  if (flags.symbols) {
    pool += SYMBOLS
  }
  if (flags.ambiguous) {
    for (let i = 0; i < AMBIGUOUS.length; ++i) {
      pool = pool.replace(AMBIGUOUS[i], '')
    }
  }
  while (pw.length < length) {
    const index = randomBelow(pool.length)
    pw += pool[index]
  }
  if ((flags.uppers && !containsAny(UPPERS, pw)) ||
      (flags.digits && !containsAny(DIGITS, pw)) ||
      (flags.symbols && !containsAny(SYMBOLS, pw))) {
    return generatePassword(length, flags)
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
