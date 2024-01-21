import React from 'react';

const InfoBanner = ({ visible, onHide }) => {
  if (!visible) return null;

  const style = {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    marginLeft: 80,
    marginRight: 80,
    position: 'sticky',
    top: 100,
    left: 40,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-between',
    backgroundColor: 'var(--color-background)',
    zIndex: 2147483647,
  };

  //   const linkStyle = {
  //     color: 'grey',
  //     textDecoration: 'underline',
  //   };

  const textStyle = {
    flex: 90,
  };

  const buttonDiv = {
    flex: 10,
    textAlign: 'right',
  };

  const buttonStyle = {
    outline: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--color-text)',
    cursor: 'pointer',
  };

  return (
    <div style={style}>
      <div stule={textStyle}>
        {/* TODO: Have this part have a different byline */}
        {/* Doing the course exam soon? Test the new exam system, read more{' '}
        <a href="/part0/general_info#doing-the-exam">
          <span style={linkStyle}>here</span>!
        </a> */}
      </div>
      <div style={buttonDiv}>
        <button style={buttonStyle} onClick={onHide}>
          x
        </button>
      </div>
    </div>
  );
};

export default InfoBanner;
