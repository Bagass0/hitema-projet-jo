import Joi from 'joi';

const customMessages = {
    'string.empty': `{#label} ne peut pas être vide`,
    'string.min': `{#label} doit avoir au moins {#limit} caractères`,
    'string.max': `{#label} ne doit pas dépasser {#limit} caractères`,
    'string.pattern.base': `{#label} doit être alphanumérique`,
    'any.required': `{#label} est requis`
};

const schema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        ...customMessages,
        'string.empty': `Le nom d'utilisateur ne peut pas être vide`,
        'string.min': `Le nom d'utilisateur doit avoir au moins {#limit} caractères`,
        'string.max': `Le nom d'utilisateur ne doit pas dépasser {#limit} caractères`,
        'any.required': `Le nom d'utilisateur est requis`
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
        ...customMessages,
        'string.pattern.base': `Le mot de passe doit être alphanumérique et peut inclure des caractères spéciaux`,
        'any.required': `Le mot de passe est requis`
    }),
}).with('username', 'password');

export const validateLogin = (username, password) => {
    return schema.validate({ username, password }, { abortEarly: false }); 
};
