export interface IslamicDateInfo {
  gregorianDate: Date;
  hijriYear: number;
  hijriMonthIndex: number; // 0-11
  hijriMonthName: string;
  hijriDay: number;
  weekday: string;
}

const HIJRI_MONTHS = [
  'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
  'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
  'Ramadan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah'
];

export const getIslamicDateInfo = (date: Date = new Date()): IslamicDateInfo | null => {
  try {
    // Try using Intl.DateTimeFormat first
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long'
    });

    // Output looks like: "Friday, 10/12/1445 AH" (depending on browser/node version)
    // We will extract parts using formatting
    const parts = formatter.formatToParts(date);

    let year = 0;
    let monthIndex = 0;
    let day = 0;
    let weekday = '';

    parts.forEach(part => {
      if (part.type === 'year') {
         // handle "1445 AH" or similar formats safely
         year = parseInt(part.value.replace(/[^0-9]/g, ''), 10);
      }
      if (part.type === 'month') {
        // Some browsers return the month as a number string (e.g. "10"), some might return text.
        monthIndex = parseInt(part.value, 10) - 1;
      }
      if (part.type === 'day') {
        day = parseInt(part.value, 10);
      }
      if (part.type === 'weekday') {
        weekday = part.value;
      }
    });

    if (isNaN(year) || isNaN(monthIndex) || isNaN(day)) {
        return calculateApproximateHijri(date);
    }

    // Ensure monthIndex is within bounds (0-11)
    if (monthIndex < 0 || monthIndex > 11) {
       return calculateApproximateHijri(date);
    }

    return {
      gregorianDate: date,
      hijriYear: year,
      hijriMonthIndex: monthIndex,
      hijriMonthName: HIJRI_MONTHS[monthIndex],
      hijriDay: day,
      weekday: weekday || date.toLocaleDateString('en-US', { weekday: 'long' })
    };
  } catch (error) {
    console.error("Intl.DateTimeFormat failed for islamic calendar. Falling back.", error);
    return calculateApproximateHijri(date);
  }
};

// Fallback Kuwaity algorithm approximation if Intl fails
function calculateApproximateHijri(date: Date): IslamicDateInfo {
  let day = date.getDate();
  let month = date.getMonth(); // 0-11
  let year = date.getFullYear();

  let m = month + 1;
  let y = year;

  if (m < 3) {
    y -= 1;
    m += 12;
  }

  let a = Math.floor(y / 100);
  let b = 2 - a + Math.floor(a / 4);

  if (y < 1583) {
      b = 0;
  }
  if (y === 1582) {
    if (m > 10)  {
        b = -10;
    }
    if (m === 10) {
      b = 0;
      if (day > 4) b = -10;
    }
  }

  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;

  b = 0;
  if (jd > 2299160) {
    a = Math.floor((jd - 1867216.25) / 36524.25);
    b = 1 + a - Math.floor(a / 4);
  }
  const bb = jd + b + 1524;
  let cc = Math.floor((bb - 122.1) / 365.25);
  const dd = Math.floor(365.25 * cc);
  const ee = Math.floor((bb - dd) / 30.6001);
  day = (bb - dd) - Math.floor(30.6001 * ee);
  month = ee - 1;
  if (ee > 13) {
    cc += 1;
    month = ee - 13;
  }
  year = cc - 4716;

  const iyear = 10631.0 / 30.0;
  const epochastro = 1948084;
  const shift1 = 8.01 / 60.0;

  let z = jd - epochastro;
  const cyc = Math.floor(z / 10631);
  z = z - 10631 * cyc;
  const j = Math.floor((z - shift1) / iyear);
  const iy = 30 * cyc + j;
  z = z - Math.floor(j * iyear + shift1);
  let im = Math.floor((z + 28.5001) / 29.5);

  if (im === 13) {
      im = 12;
  }
  const id = z - Math.floor(29.5001 * im - 29);

  return {
    gregorianDate: date,
    hijriYear: iy,
    hijriMonthIndex: im - 1, // 0-indexed
    hijriMonthName: HIJRI_MONTHS[im - 1],
    hijriDay: id,
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' })
  };
}
