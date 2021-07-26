import React from 'react';
import './AddRecipeForm.css'

export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = ' *'
    }
    if (!input.summary) {
        errors.summary = ' *'
    }
    return errors;
}

export default function Form() {
    const [input, setInput] = React.useState({
        name: '',
        summary: '',
        score: '',
        healthScore: '',
        instructions: '',
    });

    const [errors, setErrors] = React.useState({});

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className='imagenForm'>
            <div className='contenedor'>
                <div className='divInput'>
                    <label>Name: </label>
                    <input className={errors.name && 'danger'} type="text" name="name" placeholder="name.." onChange={handleInputChange} value={input.name} />
                    {errors.name && (<span className="danger">{errors.name}</span>)}
                </div>
                <div className='divInput'>
                    <label>Summary: </label>
                    <input className={errors.summary && 'danger'} type='text' name='summary' placeholder='summary..' onChange={handleInputChange} value={input.summary} />
                    {errors.summary && (<span className="danger">{errors.summary}</span>)}
                </div>
                <div className='divInput'>
                    <label>Score: </label>
                    <input type='text' name='score' placeholder='score..' onChange={handleInputChange} validate={input.score} />
                </div>
                <div className='divInput'>
                    <label>healthScore:  </label>
                    <input type='text' name='healthScore' placeholder='healthScore..' onChange={handleInputChange} validate={input.healthScore} />
                </div>
                <div className='divInput'>
                    <label>instructions: </label>
                    <input type='text' name='instructions' placeholder='instructions..' onChange={handleInputChange} validate={input.instructions} />
                </div>
                <div className='divInput'>
                    <input type='submit' value='Crear' />
                </div>
            </div>
        </form>
    )
}