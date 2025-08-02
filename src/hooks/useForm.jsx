import { useState } from "react";
import { helperHttp } from "../helpers/helperHttp";


export const useForm = (initialForm, validateForm) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validateForm(form));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(form));

		if (Object.keys(errors).length === 0) {
			alert("Enviando Formulario");
			setLoading(true);
			helperHttp()
				.post("https://formsubmit.co/ajax/richard_allcca_llano@hotmail.com", {
					body: form,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				})
				.then(() => {
					setLoading(false);
					setResponse(true);
					setForm(initialForm);
					setTimeout(() => setResponse(false), 3500);
				});
		} else {
			return;
		}
	};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
