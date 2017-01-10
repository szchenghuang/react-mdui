const Styles = {
  'doc-example': {
    position: 'relative',
    marginBottom: '2.6em'
  },
  'doc-example-tools': {
    top: 4,
    position: 'absolute',
    right: 0,
    transition: 'top .3s'
  },
  'doc-example-tools a': {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: '0 8px'
  },
  'doc-example-demo-label': {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    lineHeight: 1,
    padding: '9px 14px',
    color: 'rgba(0, 0, 0, 0.38)',
    fontWeight: 700,
    fontSize: '12px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '3px 3px 0 0',
    userSelect: 'none'
  },
  'doc-example-demo': {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderTop: 'none',
    padding: '14px',
    transition: 'padding .3s',
    ':after': {
      clear: 'both',
      display: 'table',
      content: ' '
    }
  },
  'doc-example-code': {
    display: 'none',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderTop: 'none',
    borderRadius: '0 0 3px 3px',
    padding: '14px !important',
    margin: 0
  },
  'doc-example-showcode doc-example-code': {
    display: 'block'
  },
  'doc-example-code code': {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    lineHeight: 1.7,
    padding: 0,
  }
};

export default Styles;
