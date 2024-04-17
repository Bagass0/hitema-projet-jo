import Joi from 'joi';

const customMessages = {
    'string.empty': `{#label} ne peut pas être vide`,
    'string.min': `{#label} doit avoir au moins {#limit} caractères`,
    'string.max': `{#label} ne doit pas dépasser {#limit} caractères`,
    'string.pattern.base': `{#label} doit être alphanumérique`,
    'any.required': `{#label} est requis`
};

const schema = Joi.object({
    name_sport: Joi.string().min(3).max(30).pattern(/^[a-zA-Z0-9 ]+$/).required().messages({
        ...customMessages,
        'string.empty': `Le nom du Sport ne peut pas être vide`,
        'string.min': `Le nom du Sport doit avoir au moins {#limit} caractères`,
        'string.max': `Le nom du Sport ne doit pas dépasser {#limit} caractères`,
        'string.pattern.base': `Le nom du Sport ne doit contenir que des lettres, des chiffres et des espaces`,
        'any.required': `Le nom du Sport est requis`
    }),    

    site_olympique: Joi.string().uri().required().messages({
        'string.empty': `L'URL du site Olympique ne peut pas être vide`,
        'string.uri': `L'URL du site Olympique doit être une URL valide`,
        'any.required': `L'URL du site Olympique est requise`
    }),

    img_sport: Joi.string().uri().required().messages({
        'string.empty': `L'URL de l'image ne peut pas être vide`,
        'string.uri': `L'URL de l'image doit être une URL valide`,
        'any.required': `L'URL de l'image est requise`
    }),

});

export const validateSport = (name_sport, site_olympique, img_sport) => {
    return schema.validate({ name_sport, site_olympique, img_sport }, { abortEarly: false }); 
};

export default schema;