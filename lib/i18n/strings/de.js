var Strings = require('./');

module.exports = new Strings('de', {
    // set the 'fallback' language -- this way no strings go missing.
    // Also, in the case of more regions (en-GB vs en-US) we can use more locale
    // specific terminology (i.e: 'films' vs 'movies')
    base: 'en',

//------------------------------------------------------------------------------
// START EDITING HERE
//------------------------------------------------------------------------------
// Only edit the items in quotes. Everything on the left-side of a colon (':')
// are identifiers for use in scripting the layout.
//------------------------------------------------------------------------------

    // The top line of sheet
    // character - the aurebesh on the left side
    // name - the label for where the character's name goes
    header: {
        character: 'Charakter',
        name: 'Name'
    },
    // The characteristic section.
    // title - The title of the section
    // subtitle - The aurebesh to the right of the title
    characteristics: {
        title: 'Eigenschaften',
        subtitle: 'Eigenschaften',
        // each characteristic has the following
        // title - the label for the characteristic
        // subtitle - the aurebesh for under the characteristic box
        // abbrev - an abbreviation for the skills area
        brawn: {
            title: 'Str',
            subtitle: 'Str',
            abbrev: 'Str'
        },
        agility: {
            title: 'Gew',
            subtitle: 'Gew',
            abbrev: 'Gew'
        },
        intellect: {
            title: 'Int',
            subtitle: 'Int',
            abbrev: 'Int'
        },
        cunning: {
            title: 'List',
            subtitle: 'List',
            abbrev: 'Lis'
        },
        willpower: {
            title: 'Will',
            subtitle: 'Will',
            abbrev: 'Will'
        },
        presence: {
            title: 'Cha',
            subtitle: 'Cha',
            abbrev: 'Cha'
        }
    },
    // skills section
    skills: {
        // section header
        title: 'Fertigkeiten',
        // section aurebesh
        subtitle: 'Fertigkeiten',
        // used in the header of the general skills area
        general: 'Grundfertigkeiten',
        // used in the header of the knowledge skills area
        knowledge: 'Wissensfertigkeiten',
        // used in the header of combat skills area
        combat: 'Kampffertigkeiten',
        // used in the custom skills area
        custom: 'Eigene Fertigkeiten',
        // used in the header for each skills section
        experience: 'EP',
        characteristic: 'Eig',
        dicepool: 'Pool',
        // Skill names
        astrogation: 'Astronavigation',
        athletics: 'Athletik',
        charm: 'Charme',
        computers: 'Computertechnik',
        cool: 'Coolness',
        discipline: 'Disziplin',
        coercion: 'Einschüchterung',
        leadership: 'Führungsqualität',
        stealth: 'Heimlichkeit',
        skulduggery: 'Infiltration',
        coordination: 'Körperbeherrschung',
        mechanics: 'Mechanik',
        medicine: 'Medizin',
        piloting: {
            planetary: 'Pilot (Planetar)',
            space: 'Pilot (Weltraum)'
        },
        streetwise: 'Straßenwissen',
        deception: 'Täuschung',
        survival: 'Überleben',
        negotiation: 'Verhandeln',
        vigilence: 'Wachsamkeit',
        perception: 'Wahrnehmung',
        resilience: 'Widerstandskraft',
        education: 'Allgemeinbildung',
        lore: 'Altes Wissen',
        gunnery: 'Artillerie',
        outer_rim: 'Äusserer Rand',
        core_worlds: 'Kernwelten',
        warefare: 'Kriegskunde',
        underworld: 'Unterwelt',
        xenology: 'Xenologie',
        brawl: 'Handgemenge',
        lightsaber: 'Lichtschwertkampf',
        melee: 'Nahkampfwaffen',
        ranged: {
            heavy: 'Schwere Fernkampfwaffen',
            light: 'Leichte Fernkampfwaffen'
        }
    },
    abilities: {
        // section header
        title: 'Talente',
        // section aurebesh
        subtitle: 'Talente',
        activation: 'Akt',
        rank: 'Rang'
    },
    weapons: {
        title: 'Waffen',
        subtitle: 'Waffen',
        name: 'Name',
        skill: 'Fert',
        damage: 'Schad',
        critical: 'Krit',
        range: 'RW',
        encumbrance: 'Bel',
        hardpoints: 'AP',
        special: 'Eigensch',
        condition: 'Zustand'
    },
    description: {
        title: 'Beschreibung',
        subtitle: 'Beschreibung',
        career: 'Beruf',
        species: 'Spezies',
        gender: 'Geschlecht',
        age: 'Alter',
        height: 'Grösse',
        build: 'Statur',
        hair: 'Haare',
        eyes: 'Augen'
    },
    motivation: {
        title: 'Motivation',
        subtitle: 'Motivation'
    },
    obligation: {
        title: 'Verpflichtungen',
        subtitle: 'Verpflichtungen',
        size: 'Wert'
    },
    morality: {
        title: 'Moralität',
        subtitle: 'Moralität',
        strength: 'Stärke',
        weakness: 'Schwäche',
        current: 'Aktuell',
        conflict: 'Konflikt'
    },
    soak: {
        title: 'Absorption',
        subtitle: 'Absorption',
        value: 'Wert'
    },
    defense: {
        title: 'Vertdg',
        subtitle: 'Vertdg',
        melee: 'Nahk',
        range: 'Fernk'
    },
    wounds: {
        title: 'Wunden',
        subtitle: 'Wunden',
        threshold: 'Limit',
        current: 'Aktuell'
    },
    strain: {
        title: 'Erschöpfung',
        subtitle: 'Erschöpfung',
        threshold: 'Limit',
        current: 'Aktuell'
    },
    criticals: {
        title: 'Kritische Verletzungen',
        subtitle: 'Kritische Verletzungen'
    },
    gear: {
        title: 'Ausrüstung',
        subtitle: 'Ausrüstung',
        encumbrance: 'Bel'
    },
    armor: {
        title: 'Rüstung',
        subtitle: 'Rüstung',
        defense: 'Verteidigung',
        soak: 'Absorption',
        encumbrance: 'Bel',
        hardpoints: 'AP',
        special: 'Eigenschaft',
        condition: 'Zustand'
    },
    credits: {
        title: 'Credits',
        subtitle: 'Credits'
    },
    encumbrance: {
        title: 'Belastung',
        subtitle: 'Belastung',
        threshold: 'Limit',
        current: 'Aktuell'
    },
    experience: {
        title: 'Erfahrung',
        subtitle: 'Erfahrung',
        total: 'Gesamt',
        available: 'Verfügbar'
    },
    development: {
        title: 'Entwicklung',
        subtitle: 'Entwicklung',
        specialization: 'Spezialisierung',
        signature_ability: 'Sign. Muster',
        power: 'Macht'
    },
    notes: {
        title: 'Notizen',
        subtitle: 'Notizen'
    }
//------------------------------------------------------------------------------
// END HERE
//------------------------------------------------------------------------------
});
