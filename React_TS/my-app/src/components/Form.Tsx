import * as React from 'react'
import { Component, FormEvent, Fragment } from 'react'

interface IFormProps {
	action: string
}

export interface IValues {
	/* This sets the K:V pairs for all field values, the key is a string value is any*/
	[key: string]: any
}

export interface IErrors {
	/* Validation error messages for each field value is always string in this case */
	[key: string]: string
}

export interface IFormState {
	/* The form's state is a collection of its values and errors */
	values: IValues

	errors: IErrors

	submitSuccess?: boolean
}

export class Form extends Component<IFormProps, IFormState> {
	constructor(props: IFormProps) {
		super(props)

		const errors: IErrors = {}
		const values: IValues = {}
		this.state = {
			errors,
			values
		}
	}

	private haveErrors(errors: IErrors) {
		let haveError: boolean = false
		Object.keys(errors).map((key: string) => {
			if (errors[key].length > 0) {
				haveError = true
			}
		})
		return haveError
	}

	private handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()
		if (this.validateForm()) {
			const submitSuccess: boolean = await this.submitForm()
			this.setState({ submitSuccess })
		}
	}

	private validateForm(): boolean {
		return true
	}
}
