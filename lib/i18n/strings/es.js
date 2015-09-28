var Strings = require('./');

module.exports = new Strings('es', {
    // set the 'fallback' language -- this way no strings go missing.
    // Also, in the case of more regions (en-GB vs en-US) we can use more locale
    // specific terminology (i.e: 'films' vs 'movies')
    // Since this is the 'en' file we don't need this
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
        character: 'Personaje',
        name: 'Nombre'
    },
    // The characteristic section.
    // title - The title of the section
    // subtitle - The aurebesh to the right of the title
    characteristics: {
        title: 'Características',
        subtitle: 'Características',
        // each characteristic has the following
        // title - the label for the characteristic
        // subtitle - the aurebesh for under the characteristic box
        // abbrev - an abbreviation for the skills area
        brawn: {
            title: 'Fortaleza',
            subtitle: 'Fortaleza',
            abbrev: 'For'
        },
        agility: {
            title: 'Agilidad',
            subtitle: 'Agilidad',
            abbrev: 'Agi'
        },
        intellect: {
            title: 'Intelecto',
            subtitle: 'Intelecto',
            abbrev: 'Int'
        },
        cunning: {
            title: 'Astucia',
            subtitle: 'Astucia',
            abbrev: 'Ast'
        },
        willpower: {
            title: 'Voluntad',
            subtitle: 'Voluntad',
            abbrev: 'Vol'
        },
        presence: {
            title: 'Presencia',
            subtitle: 'Presencia',
            abbrev: 'Pre'
        }
    },
    // skills section
    skills: {
        // section header
        title: 'Habilidades',
        // section aurebesh
        subtitle: 'Habilidades',
        // used in the header of the general skills area
        general: 'Habilidades Generales',
        // used in the header of the knowledge skills area
        knowledge: 'Habilidades de Conocimiento',
        // used in the header of combat skills area
        combat: 'Habilidades de Combate',
        // used in the custom skills area
        custom: 'Habilidades Personales',
        // used in the header for each skills section
        experience: 'PE',
        characteristic: 'Car',
        dicepool: 'Reserva',
        // Skill names
        astrogation: 'Astronavegación',
        athletics: 'Atletismo',
        charm: 'Carisma',
        coercion: 'Coacción',
        computers: 'Computadoras',
        cool: 'Frialdad',
        coordination: 'Coordinación',
        deception: 'Engaño',
        discipline: 'Disciplina',
        leadership: 'Liderazgo',
        mechanics: 'Mecánica',
        medicine: 'Medicina',
        negotiation: 'Negociación',
        perception: 'Percepción',
        piloting: {
            planetary: 'Pilotar vehículo planetario',
            space: 'Pilotar vehículo espacial'
        },
        resilience: 'Aguante',
        skulduggery: 'Actividad criminal',
        stealth: 'Sigilo',
        streetwise: 'Callejeo',
        survival: 'Surpervivencia',
        vigilence: 'Alerta',
        core_worlds: 'Mundose del Núcleo',
        education: 'Educación',
        lore: 'Saber arcaico',
        outer_rim: 'Borde Exterior',
        underworld: 'Bajos Fondos',
        warefare: 'Estrategia militar',
        xenology: 'Xenología',
        brawl: 'Pelea',
        gunnery: 'Artillería',
        lightsaber: 'Sable Láser',
        melee: 'Armas cuerpo a cuerpo',
        ranged: {
            heavy: 'Armas a distancia pesadas',
            light: 'Armas a distancia ligeras'
        }
    },
    abilities: {
        // section header
        title: 'Talentos y Aptitudes especiales',
        // section aurebesh
        subtitle: 'Talentos y Aptitudes especiales',
        activation: 'Act.',
        rank: 'Rango'
    },
    weapons: {
        title: 'Armas',
        subtitle: 'Armas',
        name: 'Nombre',
        skill: 'Habilidad',
        damage: 'Daño',
        critical: 'Crit',
        range: 'Alcance',
        encumbrance: 'Imped',
        hardpoints: 'Ensambl',
        special: 'Especial',
        condition: 'Condición'
    },
    description: {
        title: 'Descripción',
        subtitle: 'Descripción',
        career: 'Profesión',
        species: 'Especie',
        gender: 'Sexo',
        age: 'Edad',
        height: 'Altura',
        build: 'Complexión',
        hair: 'Pelo',
        eyes: 'Ojos'
    },
    motivation: {
        title: 'Motivación',
        subtitle: 'Motivación'
    },
    obligation: {
        title: 'Obligación/Deberes',
        subtitle: 'Obligación/Duberes',
        size: 'Magnitud'
    },
    morality: {
        title: 'Moralidad',
        subtitle: 'Moralidad',
        strength: 'Fuerza',
        weakness: 'Debilidad',
        current: 'Actual',
        conflict: 'Conflicto'
    },
    soak: {
        title: 'Protección',
        subtitle: 'Protección',
        value: 'Valor'
    },
    defense: {
        title: 'Defensa',
        subtitle: 'Defensa',
        melee: 'Cuerpo a cuerpo',
        range: 'A distancia'
    },
    wounds: {
        title: 'Heridas',
        subtitle: 'Heridas',
        threshold: 'Umbral',
        current: 'Actuales'
    },
    strain: {
        title: 'Tensión',
        subtitle: 'Tensión',
        threshold: 'Umbral',
        current: 'Actual'
    },
    criticals: {
        title: 'Heridas Críticas',
        subtitle: 'Heridas Críticas'
    },
    gear: {
        title: 'Inventario',
        subtitle: 'Inventario',
        encumbrance: 'Imped'
    },
    armor: {
        title: 'Blindaje',
        subtitle: 'Blindaje',
        defense: 'Defensa',
        soak: 'Protección',
        encumbrance: 'Imped',
        hardpoints: 'Ensambl',
        special: 'Especial',
        condition: 'Condición'
    },
    credits: {
        title: 'Créditos',
        subtitle: 'Créditos'
    },
    encumbrance: {
        title: 'Impedimenta',
        subtitle: 'Impedimenta',
        threshold: 'Umbral',
        current: 'Actual'
    },
    experience: {
        title: 'Experiencia',
        subtitle: 'Experiencia',
        total: 'Total',
        available: 'Disponible'
    },
    development: {
        title: 'Desarrollo',
        subtitle: 'Desarrollo',
        specialization: 'Especialización',
        signature_ability: 'Cap. distintiva',
        power: 'Poder'
    },
    notes: {
        title: 'Notas',
        subtitle: 'Notas'
    }
});
