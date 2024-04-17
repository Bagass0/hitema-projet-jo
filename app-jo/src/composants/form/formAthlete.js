import Joi from 'joi';

const customMessages = {
    'string.empty': `{#label} ne peut pas être vide`,
    'string.min': `{#label} doit avoir au moins {#limit} caractères`,
    'string.max': `{#label} ne doit pas dépasser {#limit} caractères`,
    'string.pattern.base': `{#label} doit être alphanumérique`,
    'any.required': `{#label} est requis`
};

const schema = Joi.object({
    name_athlete: Joi.string().min(3).max(30).pattern(/^[a-zA-Z0-9 ]+$/).required().messages({
        ...customMessages,
        'string.empty': `Le nom de l'athlète ne peut pas être vide`,
        'string.min': `Le nom de l'athlète doit avoir au moins {#limit} caractères`,
        'string.max': `Le nom de l'athlète ne doit pas dépasser {#limit} caractères`,
        'string.pattern.base': `Le nom de l'athlète ne doit contenir que des lettres, des chiffres et des espaces`,
        'any.required': `Le nom de l'athlète est requis`
    }),
    
    pays: Joi.string().pattern(/^[a-zA-Z0-9]{3}$/).required().messages({
        ...customMessages,
        'string.empty': `Le champ pays ne peut pas être vide`,
        'string.pattern.base': `Le champ pays doit contenir exactement trois caractères alphanumériques`,
        'any.required': `Le champ pays est requis`
    }),    

    best_result: Joi.string().min(3).max(30).pattern(/^[a-zA-Z0-9 ]+$/).required().messages({
        ...customMessages,
        'string.empty': `Le champ meilleur résultat ne peut pas être vide`,
        'string.min': `Le champ meilleur résultat doit avoir au moins {#limit} caractères`,
        'string.max': `Le champ meilleur résultat ne doit pas dépasser {#limit} caractères`,
        'string.pattern.base': `Le champ meilleur résultat ne doit contenir que des lettres, des chiffres et des espaces`,
        'any.required': `Le champ meilleur résultat est requis`
    }), 

});

export const validateAthlete = (name_athlete, pays, best_result) => {
    return schema.validate({ name_athlete, pays, best_result }, { abortEarly: false }); 
};

export default schema;