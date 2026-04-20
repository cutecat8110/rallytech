import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const promptsDir = resolve(projectRoot, 'data/nano-banana/prompts')

const prompts = {
  'services-overview-hero-v1': {
    asset_type: 'homepage services overview hero background image',
    business_context:
      'Rally Technology, an industrial automation and control integration company',
    page_role: 'Main hero image for the Services Overview page',
    goal: 'Create a panoramic industrial control room scene establishing authority, massive scale, and integration capabilities.',
    visual_message:
      'A state-of-the-art, fully integrated industrial control center operating seamlessly.',
    technical_signals: {
      lens: '24mm wide-angle architectural photography',
      aperture: 'f/8 for deep depth of field',
      light_source: 'controlled, cool-toned cinematic interior lighting',
      time_of_day: 'neutral operational hours',
      motion_rule: 'static, highly disciplined environment'
    },
    spatial_positioning: [
      'massive curved SCADA monitoring wall in the background',
      'clean operator consoles in the midground',
      'negative space at the top and center for typography overlay'
    ],
    color_restriction:
      'deep charcoal, brushed steel, dark glass, with accents of cyan and operational green',
    material_notes: [
      'matte metallic console surfaces',
      'clean glass dividers',
      'realistic screen illumination without neon bleed'
    ],
    scene:
      'A panoramic, ultra-modern industrial control center featuring a massive wall of monitoring screens.',
    subject: 'The massive scale and organized complexity of the control room.',
    reality_anchors: [
      'authentic multi-screen SCADA monitor wall',
      'heavy-duty industrial operator desks',
      'architectural ceiling lighting'
    ],
    composition: {
      format: '16:9',
      focal_structure: 'symmetrical or off-center sweeping perspective',
      camera: 'wide-angle interior photography, elevated eye-level'
    },
    lighting: {
      style: 'premium cinematic industrial photography',
      mood: 'authoritative, highly advanced',
      contrast: 'high contrast between dark room surfaces and screen glows'
    },
    avoid: [
      'sci-fi spaceship bridges',
      'cyberpunk neon lights',
      'messy desks',
      'holographic displays',
      'obvious AI artifacts'
    ]
  },

  // 1. SCADA / HMI Graphics
  'scada-hmi-graphics-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'Create a striking, legible close-up of an industrial HMI screen mounted on a control cabinet.',
    technical_signals: {
      lens: '100mm macro/detail',
      aperture: 'f/5.6',
      light_source: 'soft diffused industrial lighting'
    },
    spatial_positioning: [
      'extreme close-up of a panel-mounted touch screen filling 80% of frame',
      'metallic control cabinet in margins'
    ],
    color_restriction:
      'graphite cabinet grey, vibrant UI accents (cyan, amber), deep black screen background.',
    material_notes: [
      'powder-coated metal cabinet',
      'matte touch screen',
      'industrial bezel with screws'
    ],
    scene:
      'Tight close-up of a rugged HMI touch panel in a metal control cabinet displaying industrial process graphics.',
    reality_anchors: [
      'panel-mounted hardware details',
      'industrial interface UI (tanks, valves)',
      'powder-coated metal'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'flat architectural detail shot'
    },
    avoid: [
      'consumer monitors',
      'messy cables',
      'people/hands',
      'blurry graphs',
      'glare'
    ]
  },
  'scada-hmi-graphics-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'Capture the intense focus of an engineer interacting with a modern SCADA interface.',
    technical_signals: {
      lens: '50mm portrait',
      aperture: 'f/2.8',
      light_source: 'directional monitor glow balanced by ambient light'
    },
    spatial_positioning: [
      'operator in foreground/midground from slight angle',
      'right side left intentionally dark/empty for text overlay'
    ],
    color_restriction:
      'deep shadows, cool ambient tones, cyan/amber/green glows from monitors.',
    scene:
      'Automation engineer intently analyzing process data on a multi-monitor SCADA workstation in a darkened control room.',
    reality_anchors: [
      'credible industrial HMI interface',
      'authentic control room',
      'professional focus'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'right half must remain clean and dark for text',
      focal_structure: 'left-aligned operator'
    },
    avoid: [
      'office stock photos',
      'holograms',
      'smiling at camera',
      'messy backgrounds'
    ]
  },
  'scada-hmi-graphics-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: 'Demonstrate field-level visibility with an engineer using a rugged industrial tablet on the factory floor.',
    technical_signals: {
      lens: '35mm environmental',
      aperture: 'f/4',
      light_source: 'bright factory overhead lighting'
    },
    spatial_positioning: [
      'close-up on engineer hands holding rugged tablet',
      'tablet screen clearly visible with graphics',
      'factory background out of focus'
    ],
    color_restriction:
      'factory greys, safety yellows, metallic silvers, bright tablet display.',
    material_notes: [
      'ruggedized tablet casing',
      'worn industrial gloves/workwear',
      'stainless steel piping background'
    ],
    scene:
      'Engineer hands holding an industrial tablet displaying SCADA graphics in a brightly lit manufacturing plant.',
    reality_anchors: [
      'ruggedized tablet',
      'factory floor environment',
      'credible HMI graphics'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'center-weighted on tablet'
    },
    avoid: [
      'consumer iPads without rugged cases',
      'dark moody lighting',
      'generic bar charts'
    ]
  },

  // 2. I&E Services
  'ie-services-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'Highlight complex electrical wiring, terminal blocks, or instrumentation gauges inside a pristine cabinet.',
    technical_signals: {
      lens: '85mm macro',
      aperture: 'f/5.6',
      light_source: 'clinical, bright LED cabinet lighting'
    },
    spatial_positioning: [
      'dense rows of colored wiring and terminal blocks filling the frame',
      'organized and precise'
    ],
    color_restriction:
      'grey metallic cabinet, vibrant wire colors (blue, red, yellow) neatly organized.',
    material_notes: [
      'plastic wire insulation',
      'stainless steel DIN rails',
      'precision copper contacts'
    ],
    scene:
      'A pristine, meticulously organized industrial electrical and instrumentation control cabinet.',
    reality_anchors: [
      'industrial terminal blocks',
      'perfect cable management',
      'wire ferrules and labels'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'textured, dense frame of organized components'
    },
    avoid: [
      'messy spaghetti wiring',
      'consumer electronics',
      'dusty/dirty cabinets'
    ]
  },
  'ie-services-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'Show a field engineer inspecting a large process instrument or electrical panel in a massive facility.',
    technical_signals: {
      lens: '35mm wide',
      aperture: 'f/4',
      light_source: 'mixed natural and high-bay factory lighting'
    },
    spatial_positioning: [
      'engineer in midground interacting with a massive metallic instrument/panel',
      'right side clear for text'
    ],
    color_restriction:
      'metallic silver, industrial blue, safety yellow/orange accents.',
    scene:
      'A field engineer in proper industrial workwear inspecting a complex pressure transmitter or electrical junction box on a large plant floor.',
    reality_anchors: [
      'authentic industrial PPE',
      'massive stainless steel process piping or panels',
      'industrial scale'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'right half empty for text',
      focal_structure: 'left-weighted subject'
    },
    avoid: [
      'cleanroom lab coats',
      'generic mechanics',
      'unrealistic sparks or welding'
    ]
  },
  'ie-services-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: 'Close-up of hands using a multimeter or calibration device on a polished pressure transmitter.',
    technical_signals: {
      lens: '50mm detail',
      aperture: 'f/2.8',
      light_source: 'directional task lighting'
    },
    spatial_positioning: [
      'hands holding testing probes against industrial metallic contacts',
      'shallow depth of field'
    ],
    color_restriction: 'metallic tones, high-vis yellow/red testing equipment.',
    material_notes: [
      'stainless steel instruments',
      'rubberized testing gear',
      'leather/rubber work gloves'
    ],
    scene:
      'Precise calibration and testing of a critical industrial instrument using professional diagnostic tools.',
    reality_anchors: [
      'industrial multimeter/calibrator',
      'process transmitter with metallic housing'
    ],
    composition: {
      format: '4:3',
      focal_structure:
        'tight focus on the point of contact between tool and instrument'
    },
    avoid: [
      'basic home electrician tools',
      'exposed dangerous live wires',
      'messy hands'
    ]
  },

  // 3. PLC & DCS Programming and Migration
  'plc-dcs-programming-and-migration-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'A neatly organized PLC rack with glowing status LEDs and perfect cable management.',
    technical_signals: {
      lens: '85mm',
      aperture: 'f/4',
      light_source: 'cool, dim cabinet lighting emphasizing LED glows'
    },
    spatial_positioning: [
      'layered PLC modules filling the frame',
      'glowing LEDs drawing the eye'
    ],
    color_restriction:
      'dark plastics, metallic rails, distinct green and amber LED lights.',
    material_notes: [
      'industrial polymer housings',
      'metallic heat sinks',
      'glowing diodes'
    ],
    scene:
      'A high-end, modern Programmable Logic Controller (PLC) rack actively processing data, showcasing operational readiness.',
    reality_anchors: [
      'authentic PLC form factor',
      'I/O module LED status lights',
      'organized wire ducts'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'diagonal or flat architectural view of the rack'
    },
    avoid: [
      'consumer PC motherboards',
      'retro/obsolete hardware',
      'messy wiring'
    ]
  },
  'plc-dcs-programming-and-migration-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'An automation engineer programming on a rugged laptop in front of a massive DCS control cabinet.',
    technical_signals: {
      lens: '35mm',
      aperture: 'f/2.8',
      light_source: 'ambient factory light mixed with laptop screen glow'
    },
    spatial_positioning: [
      'engineer on left, facing an open control cabinet',
      'right side dark and empty for copy'
    ],
    color_restriction:
      'industrial greys, cool blue screen glow, warm ambient factory background.',
    scene:
      'An engineer performing a live DCS system migration or programming update on the factory floor using a rugged laptop.',
    reality_anchors: [
      'rugged engineering laptop',
      'massive open DCS cabinet',
      'factory environment'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'right side empty for headline text'
    },
    avoid: [
      'standard shiny MacBooks in clean offices',
      'holographic code',
      'empty generic warehouses'
    ]
  },
  'plc-dcs-programming-and-migration-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: 'Over-the-shoulder shot of a laptop screen showing ladder logic or function block diagrams.',
    technical_signals: {
      lens: '50mm',
      aperture: 'f/2.8',
      light_source: 'screen illuminating the scene'
    },
    spatial_positioning: [
      'laptop screen dominates midground',
      'blurred PLC hardware in background'
    ],
    color_restriction: 'cool blue/grey software UI, dark background.',
    material_notes: [
      'matte laptop screen',
      'blurred industrial metals in background'
    ],
    scene:
      'Close-up over the shoulder view of specialized PLC programming software (ladder logic) actively being edited.',
    reality_anchors: [
      'authentic-looking automation software UI (nodes, logic gates)',
      'industrial context'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'focus heavily on the software interface on the screen'
    },
    avoid: [
      'matrix-style green code',
      'generic HTML/web code',
      'consumer software UIs'
    ]
  },

  // 4. PI Server
  'pi-server-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'Sleek, dark server rack with glowing indicator lights, emphasizing enterprise-grade data infrastructure.',
    technical_signals: {
      lens: '85mm',
      aperture: 'f/2.8',
      light_source: 'dark room, relying on equipment LEDs'
    },
    spatial_positioning: [
      'repeating horizontal lines of server blades',
      'shallow focus on one specific blinking node'
    ],
    color_restriction:
      'pitch black, metallic silver, intense cyan and blue LED indicators.',
    material_notes: [
      'perforated metal server bezels',
      'fiber optic cable hints'
    ],
    scene:
      'High-density enterprise server rack processing massive amounts of industrial plant data.',
    reality_anchors: [
      'authentic server rack form factor',
      'enterprise-grade hardware',
      'data center aesthetic'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'tight, abstract pattern of data hardware'
    },
    avoid: ['retro 90s servers', 'messy ethernet cables', 'red warning lights']
  },
  'pi-server-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'A high-end IT/OT server room aisle with an engineer checking a tablet.',
    technical_signals: {
      lens: '24mm wide',
      aperture: 'f/5.6',
      light_source: 'cool, clinical data center overheads'
    },
    spatial_positioning: [
      'long symmetrical aisle of servers',
      'engineer positioned off-center',
      'negative space in the upper/right area for text'
    ],
    color_restriction:
      'monochromatic silvers and blacks, bright blue/cyan data center lighting.',
    scene:
      'A pristine, climate-controlled IT/OT data center aisle housing industrial historian servers.',
    reality_anchors: [
      'cold aisle containment architecture',
      'raised flooring',
      'clean enterprise aesthetic'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'generous space on the right for typography'
    },
    avoid: [
      'holographic floating data',
      'cluttered server closets',
      'dark spooky rooms'
    ]
  },
  'pi-server-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: 'A massive wall-mounted screen displaying dark-mode, high-density data trends.',
    technical_signals: {
      lens: '35mm',
      aperture: 'f/4',
      light_source: 'screen glow in a dim room'
    },
    spatial_positioning: [
      'screen angled slightly, showing complex data streams',
      'clean architectural edges'
    ],
    color_restriction:
      'dark UI background, vibrant data lines (cyan, green, amber).',
    scene:
      'A modern Network Operations Center (NOC) display showing real-time, high-density industrial data analytics.',
    reality_anchors: [
      'credible data visualization (time-series charts, KPIs)',
      'large format commercial displays'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'focus on the data density and clarity'
    },
    avoid: [
      'stock-market style candlestick charts',
      'generic pie charts',
      'neon cyberpunk grids'
    ]
  },

  // 5. Historians
  'historians-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'Focus on enterprise storage arrays (hard drives/SSDs) blinking in a dark rack.',
    technical_signals: {
      lens: '100mm macro',
      aperture: 'f/4',
      light_source: 'subtle ambient with bright drive LEDs'
    },
    spatial_positioning: ['grid of storage drive bays filling the frame'],
    color_restriction:
      'dark greys, deep blacks, rhythmic blue or green indicator lights.',
    material_notes: ['brushed aluminum drive sleds', 'mesh ventilation'],
    scene:
      'Massive enterprise storage array dedicated to long-term industrial data retention.',
    reality_anchors: [
      'authentic SAN/NAS drive bays',
      'enterprise storage hardware'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'repeating pattern of hardware storage'
    },
    avoid: ['consumer hard drives', 'USB thumb drives', 'messy open computers']
  },
  'historians-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'An analyst or engineer in a quiet, dark control room reviewing years of historical trend data.',
    technical_signals: {
      lens: '50mm',
      aperture: 'f/2.8',
      light_source: 'glow from multiple large curved monitors'
    },
    spatial_positioning: [
      'analyst silhouette or profile on the left',
      'monitors displaying dense charts',
      'right side empty for copy'
    ],
    color_restriction:
      'deep blacks, cool screen glows, distinct amber/cyan data lines.',
    scene:
      'A focused data engineer analyzing long-term historical process trends in a modern, quiet analytics room.',
    reality_anchors: [
      'multi-monitor engineering workstation',
      'complex time-series data UI'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'right side dark and empty for website text'
    },
    avoid: ['hacker hoodies', 'stock market trading desks', 'holograms']
  },
  'historians-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: 'Close-up on a monitor displaying complex, overlapping historical trend lines.',
    technical_signals: {
      lens: '85mm macro',
      aperture: 'f/4',
      light_source: 'direct screen emission'
    },
    spatial_positioning: [
      'extreme close-up of screen pixels and chart lines intersecting'
    ],
    color_restriction:
      'dark mode UI, bright neon data plots (cyan, magenta, yellow).',
    scene:
      'High-resolution display of complex, overlapping historical data trends and analytics.',
    reality_anchors: [
      'authentic industrial trending software UI',
      'visible chart axes and legends (blurred)'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'abstract but recognizable data lines'
    },
    avoid: ['generic bar graphs', 'financial charts', 'Matrix code']
  },

  // 6. Network Design
  'network-design-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'Extreme close-up of industrial ethernet switches with perfectly managed Cat6/fiber cables.',
    technical_signals: {
      lens: '85mm macro',
      aperture: 'f/5.6',
      light_source: 'crisp rack lighting'
    },
    spatial_positioning: [
      'ruggedized DIN-rail switch or rack switch with neatly bundled cables'
    ],
    color_restriction:
      'industrial greys, vibrant blue/yellow network cables, glowing link lights.',
    material_notes: ['rugged metal switch casing', 'shielded ethernet cables'],
    scene:
      'Highly organized, ruggedized industrial network switch routing critical plant communications.',
    reality_anchors: [
      'industrial-grade ethernet switches',
      'perfect cable dressing',
      'RJ45/Fiber ports'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'tight focus on ports and cabling'
    },
    avoid: ['home routers', 'tangled spaghetti cables', 'dusty equipment']
  },
  'network-design-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'A wide architectural shot of an industrial communications room showing racks and structured overhead cabling.',
    technical_signals: {
      lens: '24mm wide',
      aperture: 'f/8',
      light_source: 'bright, clean architectural lighting'
    },
    spatial_positioning: [
      'perspective looking down a clean corridor of network racks',
      'overhead yellow cable trays prominent',
      'negative space for text'
    ],
    color_restriction:
      'clean whites, silvers, prominent yellow/orange fiber trays.',
    scene:
      'A pristine, highly structured industrial telecommunications and networking room.',
    reality_anchors: [
      'overhead cable trays (ladder racks)',
      'enclosed network cabinets',
      'pristine facility architecture'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'large empty area on one side or top for text'
    },
    avoid: [
      'dark spooky server rooms',
      'messy wiring closets',
      'generic empty offices'
    ]
  },
  'network-design-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: "An engineer's hands patching a fiber optic cable into a ruggedized switch inside a factory enclosure.",
    technical_signals: {
      lens: '50mm detail',
      aperture: 'f/2.8',
      light_source: 'directional task light inside the cabinet'
    },
    spatial_positioning: [
      'hands in focus connecting a cable',
      'industrial factory background beautifully blurred'
    ],
    color_restriction:
      'metallic, bright yellow/aqua fiber cables, warm factory background.',
    scene:
      'An OT network engineer precisely connecting a critical fiber optic link inside a rugged plant-floor enclosure.',
    reality_anchors: [
      'fiber optic LC/SC connectors',
      'rugged enclosure',
      'industrial gloves'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'action-oriented close-up on the connection point'
    },
    avoid: ['home networking gear', 'bare wires', 'unprofessional handling']
  },

  // 7. Remote Monitoring and Data
  'remote-monitoring-and-data-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'A sleek tablet or secondary monitor displaying a map with multiple glowing nodes/sites.',
    technical_signals: {
      lens: '50mm',
      aperture: 'f/4',
      light_source: 'screen glow'
    },
    spatial_positioning: [
      'device angled in frame, displaying a dark-mode geographical map with data nodes'
    ],
    color_restriction: 'dark UI, bright glowing telemetry nodes (cyan, amber).',
    scene:
      'An industrial tablet displaying a wide-area remote telemetry and monitoring dashboard.',
    reality_anchors: [
      'geographical map UI with industrial assets',
      'rugged tablet bezel'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'device screen filling the frame diagonally'
    },
    avoid: [
      'Google Maps street view',
      'consumer iPads',
      'generic app interfaces'
    ]
  },
  'remote-monitoring-and-data-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'A centralized remote operations center (ROC) with operators looking at a massive wall displaying remote site feeds.',
    technical_signals: {
      lens: '24mm wide',
      aperture: 'f/5.6',
      light_source: 'cinematic ambient light from massive display walls'
    },
    spatial_positioning: [
      'operators at curved desks in foreground',
      'massive multi-screen wall showing maps and data in background',
      'ample negative space'
    ],
    color_restriction:
      'deep shadows, cool blue/cyan map displays, professional dark aesthetic.',
    scene:
      'A cutting-edge Remote Operations Center (ROC) actively monitoring dozens of distributed industrial sites.',
    reality_anchors: [
      'massive video wall',
      'specialized control desks',
      'multi-site telemetry UI'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'top or side airspace left dark and clean for text'
    },
    avoid: ['NASA rocket launches', 'cyberpunk hackers', 'empty boardrooms']
  },
  'remote-monitoring-and-data-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: 'Close-up of a remote telemetry unit (RTU) or cellular antenna mounted on an outdoor industrial pipeline/tank against a dramatic sky.',
    technical_signals: {
      lens: '85mm telephoto',
      aperture: 'f/4',
      light_source: 'dramatic golden hour or overcast natural light'
    },
    spatial_positioning: [
      'rugged RTU box and antenna attached to thick steel pipes',
      'sky background'
    ],
    color_restriction:
      'weathered steel, bright industrial enclosure (grey/white), dramatic sky tones.',
    scene:
      'A ruggedized Remote Telemetry Unit (RTU) transmitting critical data from a harsh outdoor industrial site.',
    reality_anchors: [
      'NEMA-rated weatherproof enclosure',
      'industrial piping/valves',
      'cellular/radio antenna'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'hero shot of the physical remote hardware'
    },
    avoid: [
      '5G cell towers',
      'residential satellite dishes',
      'indoor environments'
    ]
  },

  // 8. Alarm Monitoring
  'alarm-monitoring-overview-card-v1': {
    asset_type: 'service overview card thumbnail',
    goal: 'A bright, flashing amber/red physical annunciator panel or a highly visible digital alarm banner on a dark screen.',
    technical_signals: {
      lens: '85mm macro',
      aperture: 'f/4',
      light_source: 'intense LED emission from the panel'
    },
    spatial_positioning: [
      'close-up of a physical industrial alarm annunciator panel with engraved text slots'
    ],
    color_restriction:
      'deep blacks, intense amber and red illuminated plastics.',
    scene:
      'A critical industrial alarm annunciator panel lighting up to signal an event.',
    reality_anchors: [
      'authentic engraved annunciator tiles',
      'industrial pushbuttons',
      'high-visibility LED colors'
    ],
    composition: {
      format: '3:2',
      focal_structure: 'tight pattern of alarm tiles, one brightly illuminated'
    },
    avoid: [
      'home security keypads',
      'cartoonish red sirens',
      'blurry generic screens'
    ]
  },
  'alarm-monitoring-detail-hero-v1': {
    asset_type: 'service detail page hero image',
    goal: 'An operator focusing on a screen with critical alerts (amber/red UI elements) amidst a dark control room.',
    technical_signals: {
      lens: '50mm portrait',
      aperture: 'f/2.8',
      light_source:
        "warm/amber glow from the alarm screen lighting the operator's face"
    },
    spatial_positioning: [
      'operator in tense but professional focus',
      'screen emitting alert colors',
      'right side dark for text'
    ],
    color_restriction:
      'dark ambient room, distinct amber/orange/red alert glows.',
    scene:
      'An alert, highly trained operator responding to a critical system notification in an industrial control center.',
    reality_anchors: [
      'professional response posture',
      'credible alarm management UI (lists, colored banners)',
      'modern control desk'
    ],
    composition: {
      format: '16:9',
      hero_safe_area: 'right side completely dark/empty for typography'
    },
    avoid: [
      'panic or chaotic running',
      'fire or smoke',
      'overly dramatic red strobe lights flooding the room'
    ]
  },
  'alarm-monitoring-detail-feature-v1': {
    asset_type: 'service detail feature image',
    goal: "A close-up of an operator's hand reaching to acknowledge an alarm on a physical control desk with illuminated pushbuttons.",
    technical_signals: {
      lens: '50mm macro',
      aperture: 'f/2.8',
      light_source: 'directional desk light and button illumination'
    },
    spatial_positioning: [
      "hand pressing a glowing 'ACK' or alarm button",
      'shallow depth of field blurring the rest of the console'
    ],
    color_restriction:
      'industrial console greys, bright illuminated buttons (amber, white, red).',
    scene:
      'Precise, immediate physical interaction with an industrial alarm acknowledgment system.',
    reality_anchors: [
      'heavy-duty industrial pushbuttons (e.g., Allen Bradley style)',
      'metal control desk surface',
      'professional workwear'
    ],
    composition: {
      format: '4:3',
      focal_structure: 'action-oriented tight focus on the button press'
    },
    avoid: ['nuclear launch buttons', 'consumer keyboards', 'messy hands']
  }
}

async function main() {
  await mkdir(promptsDir, { recursive: true })
  for (const [id, content] of Object.entries(prompts)) {
    const filePath = resolve(promptsDir, id + '.txt')
    await writeFile(filePath, JSON.stringify(content, null, 2))
    console.log('Created ' + id + '.txt')
  }
}

main().catch(console.error)
