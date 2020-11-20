const fontWeight = {
  extraLight: 200,
  light: 300,
  medium: 500
}

const typography = {
  fontSize: 14,
  fontWeight: fontWeight,
  h1: {
    fontSize: '2rem',
    fontWeight: fontWeight.medium,
    lineHeight: 1.2
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: fontWeight.light,
    lineHeight: 1.2
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: fontWeight.light,
    lineHeight: 1.2
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: fontWeight.light,
    lineHeight: 1.2
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: fontWeight.light,
    lineHeight: 1.2
  },
  h6: {
    fontSize: '1.0625rem',
    fontWeight: fontWeight.light,
    lineHeight: 1.2
  },
  body1: {
    fontSize: 14,
    fontWeight: fontWeight.extraLight
  },
  button: {
    color: '#fff',
    textTransform: 'none',
    border: '1px solid transparent',
    padding: '5px',
    fontSize: '1rem',
    borderRadius: '0.25rem',
    margin: '5px'
  },
  input: {
    margin: '5px',
    padding: '5px 10px',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  }
}

export { typography }
