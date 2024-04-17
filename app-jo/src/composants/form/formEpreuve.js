import Joi from 'joi';

const customMessages = {
    'string.empty': `{#label} ne peut pas être vide`,
    'string.min': `{#label} doit avoir au moins {#limit} caractères`,
    'string.max': `{#label} ne doit pas dépasser {#limit} caractères`,
    'string.pattern.base': `{#label} doit être alphanumérique`,
    'any.required': `{#label} est requis`
};

const schema = Joi.object({
    name_epreuve: Joi.string().min(3).max(30).pattern(/^[a-zA-Z0-9 ]+$/).required().messages({
        ...customMessages,
        'string.empty': `Le nom de l'épreuve ne peut pas être vide`,
        'string.min': `Le nom de l'épreuve doit avoir au moins {#limit} caractères`,
        'string.max': `Le nom de l'épreuve ne doit pas dépasser {#limit} caractères`,
        'string.pattern.base': `Le nom de l'épreuve ne doit contenir que des lettres, des chiffres et des espaces`,
        'any.required': `Le nom de l'épreuve est requis`
    }),    

});

export const validateEpreuve = (name_epreuve) => {
    return schema.validate({ name_epreuve }, { abortEarly: false }); 
};

export default schema;