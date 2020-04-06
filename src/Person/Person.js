//a componet is a function which return jsx/dom example fo functional component
import React from 'react';

const person = () => {
	return <p>I am a person and I am {Math.floor(Math.random() *30)} years old!</p>
};

export default person;