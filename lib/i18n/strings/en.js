var Strings = require('./');

module.exports = new Strings('en', {
    characteristics: {
        brawn: {
            label: 'Brawn',
            abbrev: 'Br'
        },
        agility: {
            label: 'Agility',
            abbrev: 'Ag'
        },
        intellect: {
            label: 'Intellect',
            abbrev: 'Int'
        },
        cunning: {
            label: 'Cunning',
            abbrev: 'Cun'
        },
        willpower: {
            label: 'Willpower',
            abbrev: 'Wil'
        },
        presence: {
            label: 'Presence',
            abbrev: 'Pr'
        }
    },
    sections: {
        characteristics: {
            title: 'Characteristics',
            subtitle: 'Characteristics'
        },
        skills: {
            title: 'Skills',
            subtitle: 'Skills',
            general: 'General Skills',
            knowledge: 'Knowledge Skills',
            combat: 'Combat Skills',
            custom: 'Custom Skills',
            experience: 'XP',
            characteristic: 'Char',
            dicepool: 'Pool',
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
            title: 'Abilities',
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
            subtitle: 'Morality'
        }
    }
});
