import React from 'react';

const headerStyles = {
	color: 'white',
	fontSize: '3rem',
	fontFamily: 'Ubuntu',
	fontWeight: 'bold',
	textTransform: 'uppercase',
}

const MainHeader = () => {
  return (
    <div style={{	display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<h1 style={headerStyles}>sunny all the time</h1>
		</div>
   )
}

export default MainHeader;