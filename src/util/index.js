function weakRandomBelow(n) {
  return Math.floor(Math.random() * n);
}

function strongRandomBelow(n) {
  return window.crypto.getRandomValues(new Uint32Array(1))[0] % n;
}

const randomBelow = window.crypto ? strongRandomBelow : weakRandomBelow;

const LOWERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*";
const AMBIGUOUS = "B8G6I1l!0OQDS5Z2";

const VOWELS = [
  { val: "a", valCap: "A" },
  { val: "ae", valCap: "Ae", dipthong: true },
  { val: "ah", valCap: "Ah", dipthong: true },
  { val: "ai", valCap: "Ai", dipthong: true },
  { val: "e", valCap: "E" },
  { val: "ee", valCap: "Ee", dipthong: true },
  { val: "ei", valCap: "Ei", dipthong: true },
  { val: "i", valCap: "I" },
  { val: "ie", valCap: "Ie", dipthong: true },
  { val: "o", valCap: "O" },
  { val: "oh", valCap: "Oh", dipthong: true },
  { val: "oo", valCap: "Oo", dipthong: true },
  { val: "u", valCap: "U" },
];

const CONSONANTS = [
  { val: "b", valCap: "B" },
  { val: "c", valCap: "C" },
  { val: "ch", valCap: "Ch", dipthong: true },
  { val: "d", valCap: "F" },
  { val: "f", valCap: "F" },
  { val: "g", valCap: "G" },
  { val: "gh", valCap: "Gh", dipthong: true, notFirst: true },
  { val: "h", valCap: "H" },
  { val: "j", valCap: "J" },
  { val: "k", valCap: "K" },
  { val: "l", valCap: "L" },
  { val: "m", valCap: "M" },
  { val: "n", valCap: "N" },
  { val: "ng", valCap: "Ng", dipthong: true, notFirst: true },
  { val: "p", valCap: "P" },
  { val: "ph", valCap: "Ph", dipthong: true },
  { val: "qu", valCap: "Qu", dipthong: true },
  { val: "r", valCap: "R" },
  { val: "s", valCap: "S" },
  { val: "sh", valCap: "Sh", dipthong: true },
  { val: "t", valCap: "T" },
  { val: "th", valCap: "Th", dipthong: true },
  { val: "v", valCap: "V" },
  { val: "w", valCap: "W" },
  { val: "x", valCap: "X" },
  { val: "y", valCap: "Y" },
  { val: "z", valCap: "Z" },
];

function containsAny(haystack, needles) {
  for (let i = 0; i < haystack.length; ++i) {
    if (needles.indexOf(haystack[i]) !== -1) {
      return true;
    }
  }
  return false;
}

export const flags = {
  uppers: true,
  digits: true,
  symbols: false,
  ambiguous: false,
};

export function generatePhonemes(length, flags) {
  let pw = "";
  let pool = randomBelow(2) ? VOWELS : CONSONANTS;
  let prev = null;
  while (pw.length < length) {
    let elem = JSON.parse(JSON.stringify(pool[randomBelow(pool.length)]));
    if (pw.length === 0 && elem.notFirst) {
      continue;
    }
    if (prev === VOWELS && pool === VOWELS && elem.dipthong) {
      continue;
    }
    if (length < pw.length + elem.val.length) {
      continue;
    }
    let val = elem.val;
    if (
      flags.uppers &&
      (pw.length === 0 || pool === CONSONANTS) &&
      randomBelow(10) < 2
    ) {
      val = elem.valCap;
    }
    if (flags.ambiguous && containsAny(val, AMBIGUOUS)) {
      continue;
    }
    pw += val;
    if (pw.length === length) {
      break;
    }
    if (flags.digits && randomBelow(10) < 3) {
      let d = DIGITS[randomBelow(DIGITS.length)];
      while (flags.ambiguous && containsAny(d, AMBIGUOUS)) {
        d = DIGITS[randomBelow(DIGITS.length)];
      }
      pw += d;
      prev = null;
      pool = randomBelow(2) ? VOWELS : CONSONANTS;
      continue;
    }
    if (flags.symbols && randomBelow(10) < 2) {
      let s = SYMBOLS[randomBelow(SYMBOLS.length)];
      while (flags.ambiguous && containsAny(s, AMBIGUOUS)) {
        s = SYMBOLS[randomBelow(SYMBOLS.length)];
      }
      pw += s;
    }
    if (pool === CONSONANTS) {
      prev = pool;
      pool = VOWELS;
    } else {
      if (prev === VOWELS || elem.dipthong || randomBelow(10) < 7) {
        prev = pool;
        pool = CONSONANTS;
      } else {
        prev = pool;
        pool = VOWELS;
      }
    }
  }
  if (
    (flags.uppers && !containsAny(pw, UPPERS)) ||
    (flags.digits && !containsAny(pw, DIGITS)) ||
    (flags.symbols && !containsAny(pw, SYMBOLS))
  ) {
    return generatePhonemes(length, flags);
  } else {
    return pw;
  }
}

export function generatePassword(length, flags) {
  let pw = "";
  let pool = LOWERS;
  if (flags.uppers) {
    pool += UPPERS;
  }
  if (flags.digits) {
    pool += DIGITS;
  }
  if (flags.symbols) {
    pool += SYMBOLS;
  }
  if (flags.ambiguous) {
    for (let i = 0; i < AMBIGUOUS.length; ++i) {
      pool = pool.replace(AMBIGUOUS[i], "");
    }
  }
  while (pw.length < length) {
    const index = randomBelow(pool.length);
    pw += pool[index];
  }
  if (
    (flags.uppers && !containsAny(pw, UPPERS)) ||
    (flags.digits && !containsAny(pw, DIGITS)) ||
    (flags.symbols && !containsAny(pw, SYMBOLS))
  ) {
    return generatePassword(length, flags);
  } else {
    return pw;
  }
}

export function copyTextToClipboard(text) {
  let textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
