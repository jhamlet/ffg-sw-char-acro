var GENERAL     = 'general',
    KNOWLEDGE   = 'knowledge',
    COMBAT      = 'combat',
    BRAWN       = 'brawn',
    AGILITY     = 'agility',
    INTELLECT   = 'intellect',
    CUNNING     = 'cunning',
    WILLPOWER   = 'willpower',
    PRESENCE    = 'presence';

function skill (id, characteristic, type) {
    return {
        id: id,
        characteristic: characteristic,
        type: type,
    };
}

module.exports = [
    skill('astrogation', INTELLECT, GENERAL),
    skill('athletics', BRAWN, GENERAL),
    skill('charm', PRESENCE, GENERAL),
    skill('coercion', WILLPOWER, GENERAL),
    skill('computers', INTELLECT, GENERAL),
    skill('cool', PRESENCE, GENERAL),
    skill('coordination', INTELLECT, GENERAL),
    skill('deception', CUNNING, GENERAL),
    skill('discipline', WILLPOWER, GENERAL),
    skill('leadership', PRESENCE, GENERAL),
    skill('mechanics', INTELLECT, GENERAL),
    skill('medicine', INTELLECT, GENERAL),
    skill('negotiation', PRESENCE, GENERAL),
    skill('perception', CUNNING, GENERAL),
    skill('piloting-planetary', AGILITY, GENERAL),
    skill('piloting-space', AGILITY, GENERAL),
    skill('resilience', BRAWN, GENERAL),
    skill('skulduggery', CUNNING, GENERAL),
    skill('stealth', AGILITY, GENERAL),
    skill('streetwise', CUNNING, GENERAL),
    skill('survival', CUNNING, GENERAL),
    skill('vigilance', WILLPOWER, GENERAL),

    skill('brawl', BRAWN, COMBAT),
    skill('gunnery', AGILITY, COMBAT),
    skill('lightsaber', BRAWN, COMBAT),
    skill('melee', BRAWN, COMBAT),
    skill('ranged-heavy', AGILITY, COMBAT),
    skill('ranged-light', AGILITY, COMBAT),

    skill('core-worlds', INTELLECT, KNOWLEDGE),
    skill('education', INTELLECT, KNOWLEDGE),
    skill('lore', INTELLECT, KNOWLEDGE),
    skill('outer-rim', INTELLECT, KNOWLEDGE),
    skill('underworld', INTELLECT, KNOWLEDGE),
    skill('warfare', INTELLECT, KNOWLEDGE),
    skill('xenology', INTELLECT, KNOWLEDGE)
];
