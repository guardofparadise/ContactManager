import React from 'react';
import classnames from 'classnames';

const TextInputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	onChange,
	error
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input 
				type={type} 
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}/>
				{error && <div className="invalid-feedback">{error}</div>}
		</div>
	)
}

TextInputGroup.defaultProps = {
	type: 'text'
}

export default TextInputGroup;