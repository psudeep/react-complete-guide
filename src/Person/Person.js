//a componet is a function which return jsx/dom example fo functional component
import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>
				I am a {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
		</div>
	)
};

export default person;