var Strings = require('./');

module.exports = new Strings('en', {
    // The top line of sheet
    // character - the aurebesh on the left side
    // name - the label for where the character's name goes
    header: {
        character: 'Character',
        name: 'Name'
    },
    // The characteristic section.
    // title - The title of the section
    // subtitle - The aurebesh to the right of the title
    characteristics: {
        title: 'Characteristics',
        subtitle: 'Characteristics',
        // each characteristic has the following
        // title - the label for the characteristic
        // subtitle - the aurebesh for under the characteristic box
        // abbrev - an abbreviation for the skills area
        brawn: {
            title: 'Brawn',
            subtitle: 'Brawn',
            abbrev: 'Br'
        },
        agility: {
            title: 'Agility',
            subtitle: 'Agility',
            abbrev: 'Ag'
        },
        intellect: {
            title: 'Intellect',
            subtitle: 'Intellect',
            abbrev: 'Int'
        },
        cunning: {
            title: 'Cunning',
            subtitle: 'Cunning',
            abbrev: 'Cun'
        },
        willpower: {
            title: 'Willpower',
            subtitle: 'Willpower',
            abbrev: 'Wil'
        },
        presence: {
            title: 'Presence',
            subtitle: 'Presence',
            abbrev: 'Pr'
        }
    },
    skills: {
        // section header
        title: 'Skills',
        // section aurebesh
        subtitle: 'Skills',
        // used in the header of the general skills area
        general: 'General Skills',
        // used in the header of the knowledge skills area
        knowledge: 'Knowledge Skills',
        // used in the header of combat skills area
        combat: 'Combat Skills',
        // used in the custom skills area
        custom: 'Custom Skills',
        // used in the header for each skills section
        experience: 'XP',
        characteristic: 'Char',
        dicepool: 'Pool',
        // Skill names
        astrogation: 'Astrogation',
        athletics: 'Athletics',
        charm: 'Charm',
        coercion: 'Coercion',
        computers: 'Computers',
        cool: 'Cool',
        coordination: 'Coordination',
        deception: 'Deception',
        discipline: 'Discipline',
        leadership: 'Leadership',
        mechanics: 'Mechanics',
        medicine: 'Medicine',
        negotiation: 'Negotiation',
        perception: 'Perception',
        piloting: {
            planetary: 'Piloting — Planetary',
            space: 'Piloting — Space'
        },
        resilience: 'Resilience',
        skulduggery: 'Skulduggery',
        stealth: 'Stealth',
        streetwise: 'Streetwise',
        survival: 'Survival',
        vigilence: 'Vigilance',
        core_worlds: 'Core Worlds',
        education: 'Education',
        lore: 'Lore',
        outer_rim: 'Outer Rim',
        underworld: 'Underworld',
        warefare: 'Warefare',
        xenology: 'Xenology',
        brawl: 'Brawl',
        gunnery: 'Gunnery',
        lightsaber: 'Lightsaber',
        melee: 'Melee',
        ranged: {
            heavy: 'Ranged — Heavy',
            light: 'Ranged — Light'
        }
    },
    abilities: {
        // section header
        title: 'Abilities',
        // section aurebesh
        subtitle: 'Abilities',
        activation: 'Act.',
        rank: 'Rank'
    },
    weapons: {
        title: 'Weapons',
        subtitle: 'Weapons',
        name: 'Name',
        skill: 'Skill',
        damage: 'Dam',
        critical: 'Crit',
        range: 'Range',
        encumbrance: 'Enc',
        hardpoints: 'HP',
        special: 'Special',
        condition: 'Condition'
    },
    description: {
        title: 'Description',
        subtitle: 'Description',
        career: 'Career',
        species: 'Species',
        gender: 'Gender',
        age: 'Age',
        height: 'Height',
        build: 'Build',
        hair: 'Hair',
        eyes: 'Eyes'
    },
    motivation: {
        title: 'Motivation',
        subtitle: 'Motivation'
    },
    obligation: {
        title: 'Obligation/Duty',
        subtitle: 'Obligation/Duty',
        size: 'Size'
    },
    morality: {
        title: 'Morality',
        subtitle: 'Morality',
        strength: 'Strength',
        weakness: 'Weakness',
        current: 'Current',
        conflict: 'Conflict'
    },
    soak: {
        title: 'Soak',
        subtitle: 'Soak',
        value: 'Value'
    },
    defense: {
        title: 'Defense',
        subtitle: 'Defense',
        melee: 'Melee',
        range: 'Range'
    },
    wounds: {
        title: 'Wounds',
        subtitle: 'Wounds',
        threshold: 'Threshold',
        current: 'Current'
    },
    strain: {
        title: 'Strain',
        subtitle: 'Strain',
        threshold: 'Threshold',
        current: 'Current'
    },
    criticals: {
        title: 'Critical Injuries',
        subtitle: 'Critical Injuries'
    },
    gear: {
        title: 'Gear',
        subtitle: 'Gear',
        encumbrance: 'Enc'
    },
    armor: {
        title: 'Armor',
        subtitle: 'Armor',
        defense: 'Defense',
        soak: 'Soak',
        encumbrance: 'Enc',
        hardpoints: 'HP',
        special: 'Special',
        condition: 'Condition'
    },
    credits: {
        title: 'Credits',
        subtitle: 'Credits'
    },
    encumbrance: {
        title: 'Encumbrance',
        subtitle: 'Encumbrance',
        threshold: 'Threshold',
        current: 'Current'
    },
    experience: {
        title: 'Experience',
        subtitle: 'Experience',
        total: 'Total',
        available: 'Available'
    },
    development: {
        title: 'Development',
        subtitle: 'Development',
        specialization: 'Specialization',
        signature_ability: 'Sig. Ability',
        power: 'Power'
    },
    notes: {
        title: 'Notes',
        subtitle: 'Notes'
    }
});
