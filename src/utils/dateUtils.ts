export function formatDate(date: string, lang: string = 'pt-BR') {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return new Date(date).toLocaleDateString(lang, options);
}

