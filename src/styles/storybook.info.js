export default stylesheet => {
  return {
    ...stylesheet,
    propTableHead: {
      ...stylesheet,
      marginBottom: '15px',
    },
    infoBody: {
      ...stylesheet.infoBody,
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    header: {
      h1: {
        ...stylesheet.header.h1,
        fontSize: '20px',
      },
      ...stylesheet.header.h2,
      h2: {
        fontSize: '16px',
        marginTop: '4px',
      },
    },
    source: {
      h1: {
        ...stylesheet.source.h1,
        fontSize: '18px',
      },
    },
  };
};
