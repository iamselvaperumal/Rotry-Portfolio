const memberPhotoModules = import.meta.glob(
  '../assets/members photo/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' },
)

const TITLE_TOKENS = new Set(['rtn', 'phf', 'dr', 'arch', 'er', 'nee'])

const PHOTO_ALIASES = {
  'gowtham|new gen sports co ordinator': 'gowtham co ordinator',
  'karthick natarajan': 'karthick nadrajan',
  prabhakaran: 'prabakaran',
  'suresh kumar': 'sursh kumar',
  srinath: 'varadharajan',
  varadharajan: 'srinath',
}

const normalizeText = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const getPhotoName = (path) =>
  normalizeText(path.split('/').pop().replace(/\.[^.]+$/, ''))

const photosByName = Object.fromEntries(
  Object.entries(memberPhotoModules).map(([path, src]) => [getPhotoName(path), src]),
)

const getMemberNameKey = (name) =>
  normalizeText(name)
    .split(' ')
    .filter((token) => !TITLE_TOKENS.has(token) && token.length > 1)
    .join(' ')

export const getMemberPhoto = (member) => {
  if (member.image && member.image.trim() !== '') return member.image

  const nameKey = getMemberNameKey(member.name)
  const designationKey = normalizeText(member.designation || member.role || '')
  const photoKey =
    PHOTO_ALIASES[`${nameKey}|${designationKey}`] ||
    PHOTO_ALIASES[nameKey] ||
    nameKey

  return photosByName[photoKey] || ''
}
