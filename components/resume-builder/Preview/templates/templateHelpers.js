// Shared rendering helpers used by all resume templates
// All styles use solid hex colors (no rgba/gradients) for html2canvas compatibility

export function getInitials(name) {
  if (!name) return '?';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function filterEmpty(arr) {
  return (arr || []).filter(Boolean);
}

export const contactIcons = {
  email: '\u2709',
  phone: '\u260E',
  location: '\u2302',
  portfolio: '\u2B50',
  linkedin: 'in',
  github: '\u2B22',
};

export function getContactItems(contact) {
  return [
    { key: 'email', value: contact.email },
    { key: 'phone', value: contact.phone },
    { key: 'location', value: contact.location },
    { key: 'portfolio', value: contact.portfolio },
    { key: 'linkedin', value: contact.linkedin },
    { key: 'github', value: contact.github },
  ].filter((item) => item.value);
}
