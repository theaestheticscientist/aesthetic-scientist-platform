export function NutritionDiagram() {
  return (
    <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 12px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .diagram-arrow { stroke: #5DCAA5; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
          .diagram-box { stroke: #5DCAA5; stroke-width: 2; fill: rgba(93, 202, 165, 0.1); }
        `}</style>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#5DCAA5" />
        </marker>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Nutrition → Facial Definition</text>
      
      <rect x="100" y="70" width="140" height="80" className="diagram-box" rx="8"/>
      <text x="170" y="105" className="diagram-text" textAnchor="middle">Caloric</text>
      <text x="170" y="125" className="diagram-text" textAnchor="middle">Deficit</text>
      
      <path d="M 240 110 L 280 110" className="diagram-arrow"/>
      
      <rect x="280" y="70" width="140" height="80" className="diagram-box" rx="8"/>
      <text x="350" y="105" className="diagram-text" textAnchor="middle">Body Fat</text>
      <text x="350" y="125" className="diagram-text" textAnchor="middle">Loss</text>
      
      <path d="M 420 110 L 460 110" className="diagram-arrow"/>
      
      <rect x="460" y="70" width="140" height="80" className="diagram-box" rx="8"/>
      <text x="530" y="105" className="diagram-text" textAnchor="middle">Facial Fat</text>
      <text x="530" y="125" className="diagram-text" textAnchor="middle">Reduction</text>
      
      <rect x="80" y="190" width="640" height="140" className="diagram-box" rx="8"/>
      <text x="400" y="213" className="diagram-text" textAnchor="middle" style={{fontWeight: 600}}>Result</text>
      <text x="400" y="230" className="diagram-text" textAnchor="middle">Cheekbone definition revealed</text>
      <text x="400" y="245" className="diagram-text" textAnchor="middle">Sharper jawline visible</text>
      <text x="400" y="263" className="diagram-text" textAnchor="middle" style={{fontWeight: 600}}>Protocol</text>
      <text x="400" y="280" className="diagram-text" textAnchor="middle">1g protein/lb • 200-300 cal deficit</text>
      <text x="400" y="297" className="diagram-text" textAnchor="middle">Consistency matters most</text>
      <text x="400" y="314" className="diagram-text" textAnchor="middle">8-12 weeks visible change</text>
    </svg>
  );
}

export function HormonesDiagram() {
  return (
    <svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .hormone-box { stroke-width: 2; fill: rgba(93, 202, 165, 0.08); }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Hormone Effects on Aesthetics</text>
      
      <rect x="50" y="60" width="200" height="140" className="hormone-box" stroke="#5DCAA5" rx="8"/>
      <text x="150" y="78" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>DHT</text>
      <text x="150" y="92" className="diagram-text" textAnchor="middle">Jaw definition</text>
      <text x="150" y="105" className="diagram-text" textAnchor="middle">Bone density</text>
      <text x="150" y="118" className="diagram-text" textAnchor="middle">Facial hair</text>
      <text x="150" y="131" className="diagram-text" textAnchor="middle">Sebum/acne</text>
      <text x="150" y="144" className="diagram-text" textAnchor="middle">Both sexes</text>
      <text x="150" y="157" className="diagram-text" textAnchor="middle">present</text>
      
      <rect x="300" y="60" width="200" height="140" className="hormone-box" stroke="#EF9F27" rx="8"/>
      <text x="400" y="78" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#EF9F27'}}>Testosterone</text>
      <text x="400" y="92" className="diagram-text" textAnchor="middle">Muscle building</text>
      <text x="400" y="105" className="diagram-text" textAnchor="middle">Fat loss</text>
      <text x="400" y="118" className="diagram-text" textAnchor="middle">Strength</text>
      <text x="400" y="131" className="diagram-text" textAnchor="middle">Deeper voice</text>
      <text x="400" y="144" className="diagram-text" textAnchor="middle">Higher in</text>
      <text x="400" y="157" className="diagram-text" textAnchor="middle">males</text>
      
      <rect x="550" y="60" width="200" height="140" className="hormone-box" stroke="#5DCAA5" rx="8"/>
      <text x="650" y="78" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Estrogen</text>
      <text x="650" y="92" className="diagram-text" textAnchor="middle">Fat distrib</text>
      <text x="650" y="105" className="diagram-text" textAnchor="middle">Elasticity</text>
      <text x="650" y="118" className="diagram-text" textAnchor="middle">Bone health</text>
      <text x="650" y="131" className="diagram-text" textAnchor="middle">Hydration</text>
      <text x="650" y="144" className="diagram-text" textAnchor="middle">Higher in</text>
      <text x="650" y="157" className="diagram-text" textAnchor="middle">females</text>
      
      <rect x="50" y="230" width="700" height="130" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.05)" rx="8"/>
      <text x="400" y="251" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Controllable</text>
      <text x="400" y="266" className="diagram-text" textAnchor="middle">Sleep • Stress • Nutrition • Training • Body fat</text>
      <text x="400" y="286" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Result</text>
      <text x="400" y="301" className="diagram-text" textAnchor="middle">Optimal balance improves aesthetics</text>
      <text x="400" y="316" className="diagram-text" textAnchor="middle">Non-controllable: Genes + receptor sensitivity</text>
      <text x="400" y="331" className="diagram-text" textAnchor="middle">BUT lifestyle maximizes what you have</text>
    </svg>
  );
}

export function TrainingDiagram() {
  return (
    <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .diagram-box { stroke: #5DCAA5; stroke-width: 2; fill: rgba(93, 202, 165, 0.1); }
        `}</style>
        <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#5DCAA5" />
        </marker>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Progressive Overload</text>
      
      <circle cx="180" cy="110" r="50" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.1)"/>
      <text x="180" y="100" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Week 1-4</text>
      <text x="180" y="114" className="diagram-text" textAnchor="middle">Form</text>
      <text x="180" y="126" className="diagram-text" textAnchor="middle">Focus</text>
      
      <path d="M 230 110 L 320 110" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
      
      <circle cx="400" cy="110" r="50" stroke="#EF9F27" strokeWidth="2" fill="rgba(239, 159, 39, 0.1)"/>
      <text x="400" y="100" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Week 5-8</text>
      <text x="400" y="114" className="diagram-text" textAnchor="middle">Add weight</text>
      <text x="400" y="126" className="diagram-text" textAnchor="middle">or reps</text>
      
      <path d="M 450 110 L 540 110" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
      
      <circle cx="620" cy="110" r="50" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.1)"/>
      <text x="620" y="100" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Week 9+</text>
      <text x="620" y="114" className="diagram-text" textAnchor="middle">Keep</text>
      <text x="620" y="126" className="diagram-text" textAnchor="middle">progressing</text>
      
      <path d="M 570 160 Q 400 220 230 160" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
      
      <rect x="60" y="175" width="680" height="215" className="diagram-box" rx="8"/>
      <text x="400" y="197" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Beginner Split (3-4x/week)</text>
      <text x="400" y="211" className="diagram-text" textAnchor="middle">Day 1: Push (chest/shoulders/triceps)</text>
      <text x="400" y="224" className="diagram-text" textAnchor="middle">Day 2: Pull (back/biceps)</text>
      <text x="400" y="237" className="diagram-text" textAnchor="middle">Day 3: Legs (quads/hamstrings/glutes)</text>
      <text x="400" y="250" className="diagram-text" textAnchor="middle">Day 4: Upper repeat</text>
      <text x="400" y="269" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Recovery</text>
      <text x="400" y="283" className="diagram-text" textAnchor="middle">48h rest between same muscle</text>
      <text x="400" y="297" className="diagram-text" textAnchor="middle">Sleep 7-9 hours nightly</text>
      <text x="400" y="311" className="diagram-text" textAnchor="middle">Track weights + reps in log</text>
      <text x="400" y="325" className="diagram-text" textAnchor="middle">Master form before heavy weight</text>
      <text x="400" y="339" className="diagram-text" textAnchor="middle">Bad form = no gains + injury</text>
    </svg>
  );
}

export function SkincareDiagram() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .layer-label { font-family: 'DM Sans', sans-serif; fill: #5DCAA5; font-size: 11px; font-weight: 600; }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Skin Cross-Section</text>
      
      <rect x="180" y="70" width="440" height="55" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.15)"/>
      <text x="200" y="84" className="layer-label">Epidermis</text>
      <text x="200" y="97" className="diagram-text">SPF 30+ • Retinol • Salicylic Acid • Cleanse 2x</text>
      <text x="200" y="110" className="diagram-text">daily</text>
      
      <rect x="180" y="125" width="440" height="70" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.1)"/>
      <text x="200" y="141" className="layer-label">Dermis</text>
      <text x="200" y="156" className="diagram-text">Vitamin C • Moisturizer • Niacinamide</text>
      <text x="200" y="169" className="diagram-text">Collagen synthesis peaks during sleep</text>
      <text x="200" y="182" className="diagram-text">Sleep = free treatment</text>
      
      <rect x="180" y="195" width="440" height="50" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.05)"/>
      <text x="200" y="211" className="layer-label">Hypodermis</text>
      <text x="200" y="224" className="diagram-text">Nutrition impacts hydration • Water intake</text>
      
      <rect x="60" y="265" width="680" height="115" stroke="#EF9F27" strokeWidth="2" fill="rgba(239, 159, 39, 0.05)" rx="8"/>
      <text x="400" y="284" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Acne = Sebum + Bacteria + Dead Cells + Inflammation</text>
      <text x="400" y="300" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Treatment</text>
      <text x="400" y="314" className="diagram-text" textAnchor="middle">2% Salicylic Acid • Niacinamide</text>
      <text x="400" y="327" className="diagram-text" textAnchor="middle">Retinol 0.25-0.5% (1-2x weekly, increase over 2-3 months)</text>
      <text x="400" y="340" className="diagram-text" textAnchor="middle">Always SPF 30+ • Always moisturize</text>
      <text x="400" y="353" className="diagram-text" textAnchor="middle">Timeline: 6-12 weeks visible improvement</text>
    </svg>
  );
}

export function HairCycleDiagram() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .phase-box { stroke-width: 2; fill: rgba(93, 202, 165, 0.1); }
        `}</style>
        <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#5DCAA5" />
        </marker>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Hair Cycle</text>
      
      <rect x="80" y="75" width="140" height="140" className="phase-box" stroke="#5DCAA5" rx="8"/>
      <text x="150" y="95" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>ANAGEN</text>
      <text x="150" y="109" className="diagram-text" textAnchor="middle">(Growth)</text>
      <text x="150" y="122" className="diagram-text" textAnchor="middle">2-7 years</text>
      <text x="150" y="135" className="diagram-text" textAnchor="middle">85% hair</text>
      <text x="150" y="148" className="diagram-text" textAnchor="middle">in phase</text>
      <text x="150" y="161" className="diagram-text" textAnchor="middle">Active growth</text>
      <text x="150" y="174" className="diagram-text" textAnchor="middle">mode</text>
      
      <path d="M 220 145 L 270 145" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
      
      <rect x="270" y="75" width="140" height="140" className="phase-box" stroke="#EF9F27" rx="8"/>
      <text x="340" y="95" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#EF9F27'}}>CATAGEN</text>
      <text x="340" y="109" className="diagram-text" textAnchor="middle">(Transition)</text>
      <text x="340" y="122" className="diagram-text" textAnchor="middle">2-3 weeks</text>
      <text x="340" y="135" className="diagram-text" textAnchor="middle">Hair stops</text>
      <text x="340" y="148" className="diagram-text" textAnchor="middle">growing</text>
      <text x="340" y="161" className="diagram-text" textAnchor="middle">Very short</text>
      <text x="340" y="174" className="diagram-text" textAnchor="middle">phase</text>
      
      <path d="M 410 145 L 460 145" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
      
      <rect x="460" y="75" width="140" height="140" className="phase-box" stroke="#5DCAA5" rx="8"/>
      <text x="530" y="95" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>TELOGEN</text>
      <text x="530" y="109" className="diagram-text" textAnchor="middle">(Resting)</text>
      <text x="530" y="122" className="diagram-text" textAnchor="middle">2-3 months</text>
      <text x="530" y="135" className="diagram-text" textAnchor="middle">Hair falls</text>
      <text x="530" y="148" className="diagram-text" textAnchor="middle">New grows</text>
      <text x="530" y="161" className="diagram-text" textAnchor="middle">to replace</text>
      <text x="530" y="174" className="diagram-text" textAnchor="middle">it</text>
      
      <path d="M 600 145 L 650 145" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
      <path d="M 620 220 Q 400 280 180 220" stroke="#5DCAA5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" strokeDasharray="5,5"/>
      
      <rect x="70" y="240" width="660" height="80" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.05)" rx="8"/>
      <text x="400" y="260" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Minimize Heat Damage</text>
      <text x="400" y="274" className="diagram-text" textAnchor="middle">Protectant spray • 300-350°F max • 3-4x weekly</text>
      <text x="400" y="288" className="diagram-text" textAnchor="middle">Deep condition weekly • Silk pillowcase • Trim every 6-8 weeks</text>
      <text x="400" y="302" className="diagram-text" textAnchor="middle">Result: Stronger, healthier hair</text>
    </svg>
  );
}

export function SleepDiagram() {
  return (
    <svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .benefit-box { stroke: #5DCAA5; stroke-width: 2; fill: rgba(93, 202, 165, 0.08); }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Sleep Impact</text>
      
      <rect x="80" y="65" width="300" height="130" className="benefit-box" rx="8"/>
      <text x="230" y="85" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Hormones During Sleep</text>
      <text x="230" y="100" className="diagram-text" textAnchor="middle">↑ Testosterone</text>
      <text x="230" y="113" className="diagram-text" textAnchor="middle">↑ Growth Hormone</text>
      <text x="230" y="126" className="diagram-text" textAnchor="middle">↓ Cortisol</text>
      <text x="230" y="139" className="diagram-text" textAnchor="middle">Better balance</text>
      <text x="230" y="152" className="diagram-text" textAnchor="middle">= recovery</text>
      <text x="230" y="165" className="diagram-text" textAnchor="middle">Built-in healing</text>
      
      <rect x="420" y="65" width="300" height="130" className="benefit-box" rx="8"/>
      <text x="570" y="85" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Physical Changes</text>
      <text x="570" y="100" className="diagram-text" textAnchor="middle">Protein synthesis</text>
      <text x="570" y="113" className="diagram-text" textAnchor="middle">Collagen regen</text>
      <text x="570" y="126" className="diagram-text" textAnchor="middle">Less water retain</text>
      <text x="570" y="139" className="diagram-text" textAnchor="middle">Less facial puff</text>
      <text x="570" y="152" className="diagram-text" textAnchor="middle">Clearer skin</text>
      <text x="570" y="165" className="diagram-text" textAnchor="middle">Healthier look</text>
      
      <rect x="80" y="220" width="640" height="90" stroke="#EF9F27" strokeWidth="2" fill="rgba(239, 159, 39, 0.05)" rx="8"/>
      <text x="400" y="240" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Sleep Deprivation Effects</text>
      <text x="400" y="254" className="diagram-text" textAnchor="middle">↑ Hunger hormones • ↓ Satiety hormones</text>
      <text x="400" y="268" className="diagram-text" textAnchor="middle">↑ Cortisol → water retention → puffy face</text>
      <text x="400" y="282" className="diagram-text" textAnchor="middle">Dull skin • Accelerated aging</text>
      <text x="400" y="296" className="diagram-text" textAnchor="middle">All aesthetic gains VANISH</text>
      
      <rect x="80" y="330" width="640" height="35" className="benefit-box" rx="8"/>
      <text x="400" y="348" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>7-9 hrs • Consistent • Dark • Cool (65-68°F) • No screens 1hr before</text>
    </svg>
  );
}

export function PostureDiagram() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 11px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .posture-box { stroke-width: 2; fill: rgba(93, 202, 165, 0.08); }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Posture Impact</text>
      
      <rect x="80" y="65" width="300" height="150" className="posture-box" stroke="#ef4444" rx="8"/>
      <text x="230" y="87" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ef4444'}}>Forward Head</text>
      <line x1="230" y1="104" x2="230" y2="180" stroke="#ef4444" strokeWidth="2"/>
      <circle cx="230" cy="109" r="8" stroke="#ef4444" strokeWidth="1" fill="rgba(239, 68, 68, 0.2)"/>
      <text x="230" y="199" className="diagram-text" textAnchor="middle">Neck compressed</text>
      
      <text x="100" y="223" className="diagram-text">❌ Rounds shoulders</text>
      <text x="100" y="237" className="diagram-text">❌ Neck invisible</text>
      <text x="100" y="251" className="diagram-text">❌ Face smaller</text>
      <text x="100" y="265" className="diagram-text">❌ Jawline weak</text>
      <text x="100" y="279" className="diagram-text">❌ Tech neck look</text>
      
      <rect x="420" y="65" width="300" height="150" className="posture-box" stroke="#5DCAA5" rx="8"/>
      <text x="570" y="87" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Optimal Posture</text>
      <line x1="570" y1="104" x2="570" y2="180" stroke="#5DCAA5" strokeWidth="2"/>
      <circle cx="570" cy="109" r="8" stroke="#5DCAA5" strokeWidth="1" fill="rgba(93, 202, 165, 0.2)"/>
      <text x="570" y="199" className="diagram-text" textAnchor="middle">Neck defined</text>
      
      <text x="440" y="223" className="diagram-text">✓ Shoulders back</text>
      <text x="440" y="237" className="diagram-text">✓ Chest open</text>
      <text x="440" y="251" className="diagram-text">✓ Face larger</text>
      <text x="440" y="265" className="diagram-text">✓ Jawline sharp</text>
      <text x="440" y="279" className="diagram-text">✓ Neck visible</text>
    </svg>
  );
}

export function GeneticsVsEffortDiagram() {
  return (
    <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">80/20 Rule</text>
      
      <circle cx="220" cy="140" r="80" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.15)"/>
      <path d="M 220 140 L 220 60 A 80 80 0 1 1 92 206" stroke="#5DCAA5" strokeWidth="3" fill="none"/>
      <text x="220" y="150" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff', fontSize: '18px'}}>80%</text>
      <text x="220" y="166" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Effort</text>
      
      <text x="80" y="243" className="diagram-text">✓ Low body fat</text>
      <text x="80" y="257" className="diagram-text">✓ Muscle dev</text>
      <text x="80" y="271" className="diagram-text">✓ Skin quality</text>
      <text x="80" y="285" className="diagram-text">✓ Good posture</text>
      <text x="80" y="299" className="diagram-text">✓ Consistency</text>
      <text x="80" y="318" className="diagram-text" style={{fontWeight: 600, fill: '#5DCAA5'}}>Result: Shocking</text>
      
      <circle cx="580" cy="140" r="80" stroke="#EF9F27" strokeWidth="2" fill="rgba(239, 159, 39, 0.1)"/>
      <path d="M 580 140 L 580 60 A 80 80 0 0 1 708 206" stroke="#EF9F27" strokeWidth="3" fill="none"/>
      <text x="580" y="150" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff', fontSize: '18px'}}>20%</text>
      <text x="580" y="166" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#EF9F27'}}>Genetics</text>
      
      <text x="500" y="243" className="diagram-text">• Bone struct</text>
      <text x="500" y="257" className="diagram-text">• Ratios</text>
      <text x="500" y="271" className="diagram-text">• Eye spot</text>
      <text x="500" y="285" className="diagram-text">• Height</text>
      <text x="500" y="299" className="diagram-text">• Hormones</text>
      <text x="500" y="318" className="diagram-text" style={{fontWeight: 600, fill: '#EF9F27'}}>Fixed</text>
    </svg>
  );
}

export function BoneStructureDiagram() {
  return (
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 10px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .fixed-box { stroke: #ef4444; stroke-width: 2; fill: rgba(239, 68, 68, 0.08); }
          .changeable-box { stroke: #5DCAA5; stroke-width: 2; fill: rgba(93, 202, 165, 0.08); }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Bone: Fixed vs Changeable</text>
      
      <rect x="80" y="65" width="300" height="165" className="fixed-box" rx="8"/>
      <text x="230" y="84" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ef4444'}}>FIXED (Post-Puberty)</text>
      <text x="230" y="100" className="diagram-text" textAnchor="middle">Bone length &amp; width</text>
      <text x="230" y="113" className="diagram-text" textAnchor="middle">Jaw angle</text>
      <text x="230" y="126" className="diagram-text" textAnchor="middle">Zygomatic arch</text>
      <text x="230" y="139" className="diagram-text" textAnchor="middle">Eye socket</text>
      <text x="230" y="160" className="diagram-text" textAnchor="middle">Cannot change w/o</text>
      <text x="230" y="173" className="diagram-text" textAnchor="middle">invasive surgery</text>
      <text x="230" y="186" className="diagram-text" textAnchor="middle">Accept &amp; optimize</text>
      
      <rect x="420" y="65" width="300" height="165" className="changeable-box" rx="8"/>
      <text x="570" y="84" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>CHANGEABLE</text>
      <text x="570" y="100" className="diagram-text" textAnchor="middle">Bone density</text>
      <text x="570" y="113" className="diagram-text" textAnchor="middle">(resistance training)</text>
      <text x="570" y="126" className="diagram-text" textAnchor="middle">Soft tissue</text>
      <text x="570" y="139" className="diagram-text" textAnchor="middle">(muscle, fat)</text>
      <text x="570" y="160" className="diagram-text" textAnchor="middle">Dramatic change</text>
      <text x="570" y="173" className="diagram-text" textAnchor="middle">within months</text>
      <text x="570" y="186" className="diagram-text" textAnchor="middle">Effort matters here</text>
      
      <rect x="80" y="250" width="640" height="40" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.05)" rx="8"/>
      <text x="400" y="270" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Reduce facial fat + Build jaw/neck muscle + Maintain density</text>
    </svg>
  );
}

export function FacialAssessmentDiagram() {
  return (
    <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 9px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .ratio-box { stroke: #5DCAA5; stroke-width: 2; fill: rgba(93, 202, 165, 0.08); }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Facial Ratios &amp; Assessment</text>
      
      <rect x="80" y="60" width="300" height="120" className="ratio-box" rx="8"/>
      <text x="230" y="78" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Ideal Ratios</text>
      <text x="230" y="93" className="diagram-text" textAnchor="middle">L:W = 1.3:1</text>
      <text x="230" y="106" className="diagram-text" textAnchor="middle">Thirds balanced</text>
      <text x="230" y="119" className="diagram-text" textAnchor="middle">Jawline: 120-130°</text>
      <text x="230" y="132" className="diagram-text" textAnchor="middle">Interocular: 1 eye</text>
      <text x="230" y="145" className="diagram-text" textAnchor="middle">width</text>
      <text x="230" y="158" className="diagram-text" textAnchor="middle">Symmetric</text>
      
      <rect x="420" y="60" width="300" height="120" className="ratio-box" rx="8"/>
      <text x="570" y="78" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>Assess Yourself</text>
      <text x="570" y="93" className="diagram-text" textAnchor="middle">Face shape</text>
      <text x="570" y="106" className="diagram-text" textAnchor="middle">Cheekbone prom</text>
      <text x="570" y="119" className="diagram-text" textAnchor="middle">Jawline def</text>
      <text x="570" y="132" className="diagram-text" textAnchor="middle">Skin quality</text>
      <text x="570" y="145" className="diagram-text" textAnchor="middle">Symmetry</text>
      <text x="570" y="158" className="diagram-text" textAnchor="middle">Focal points</text>
      
      <rect x="80" y="200" width="640" height="140" stroke="#5DCAA5" strokeWidth="2" fill="rgba(93, 202, 165, 0.05)" rx="8"/>
      <text x="400" y="219" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Photo Assessment</text>
      <text x="400" y="233" className="diagram-text" textAnchor="middle">Front-facing • Neutral • Natural lighting</text>
      <text x="400" y="245" className="diagram-text" textAnchor="middle">Profile (both sides) • Relaxed + smiling</text>
      <text x="400" y="257" className="diagram-text" textAnchor="middle">Same angles • Consistent lighting</text>
      <text x="400" y="269" className="diagram-text" textAnchor="middle">Track every week</text>
      <text x="400" y="285" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Priorities</text>
      <text x="400" y="299" className="diagram-text" textAnchor="middle">Low body fat • Cheekbone def • Jawline • Eye puffiness</text>
      <text x="400" y="311" className="diagram-text" textAnchor="middle">Symmetry • Skin quality</text>
      <text x="400" y="327" className="diagram-text" textAnchor="middle">Personalization &gt; generic. Target YOUR weaknesses.</text>
    </svg>
  );
}

export function SupplementationDiagram() {
  return (
    <svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" className="module-diagram">
      <defs>
        <style>{`
          .diagram-text { font-family: 'DM Sans', sans-serif; fill: #a0a09a; font-size: 9px; }
          .diagram-title { font-family: 'DM Sans', sans-serif; fill: #ffffff; font-size: 16px; font-weight: 600; }
          .supplement-box { stroke-width: 2; fill: rgba(93, 202, 165, 0.08); }
          .priority-high { stroke: #5DCAA5; }
          .priority-low { stroke: #ef4444; }
        `}</style>
      </defs>
      
      <text x="400" y="30" className="diagram-title" textAnchor="middle">Supplement Priority</text>
      
      <rect x="80" y="65" width="300" height="160" className="supplement-box priority-high" rx="8"/>
      <text x="230" y="84" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>ESSENTIAL</text>
      <text x="230" y="99" className="diagram-text" textAnchor="middle">Protein Powder</text>
      <text x="230" y="112" className="diagram-text" textAnchor="middle">20-30g post-WO</text>
      <text x="230" y="126" className="diagram-text" textAnchor="middle">Creatine 5g daily</text>
      <text x="230" y="138" className="diagram-text" textAnchor="middle">(5-10% strength)</text>
      <text x="230" y="152" className="diagram-text" textAnchor="middle">Vitamin D</text>
      <text x="230" y="164" className="diagram-text" textAnchor="middle">1000-4000 IU</text>
      <text x="230" y="178" className="diagram-text" textAnchor="middle">Multivitamin</text>
      <text x="230" y="190" className="diagram-text" textAnchor="middle">Cheap + effective</text>
      
      <rect x="420" y="65" width="300" height="160" className="supplement-box priority-high" rx="8"/>
      <text x="570" y="84" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#5DCAA5'}}>BENEFICIAL</text>
      <text x="570" y="99" className="diagram-text" textAnchor="middle">Omega-3 Fish Oil</text>
      <text x="570" y="112" className="diagram-text" textAnchor="middle">1-2g EPA/DHA</text>
      <text x="570" y="126" className="diagram-text" textAnchor="middle">Reduces inflam</text>
      <text x="570" y="138" className="diagram-text" textAnchor="middle">Magnesium</text>
      <text x="570" y="151" className="diagram-text" textAnchor="middle">200-400mg bed</text>
      <text x="570" y="165" className="diagram-text" textAnchor="middle">Sleep quality</text>
      <text x="570" y="177" className="diagram-text" textAnchor="middle">Recovery</text>
      <text x="570" y="191" className="diagram-text" textAnchor="middle">Not food/sleep</text>
      
      <rect x="80" y="245" width="640" height="115" className="supplement-box priority-low" rx="8"/>
      <text x="400" y="264" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ef4444'}}>NOT RECOMMENDED</text>
      <text x="400" y="278" className="diagram-text" textAnchor="middle">Fat burners • Pre-workout • Excessive</text>
      <text x="400" y="290" className="diagram-text" textAnchor="middle">Synthetics • Thermogenics</text>
      <text x="400" y="302" className="diagram-text" textAnchor="middle">Minimal effect, costs more than food</text>
      <text x="400" y="318" className="diagram-text" textAnchor="middle" style={{fontWeight: 600, fill: '#ffffff'}}>Priority</text>
      <text x="400" y="332" className="diagram-text" textAnchor="middle">FOOD FIRST → Sleep → Training → THEN supps</text>
      <text x="400" y="344" className="diagram-text" textAnchor="middle">Master fundamentals before adding anything</text>
    </svg>
  );
}

export function ModuleDiagram({ moduleId }) {
  const diagrams = {
    1: <NutritionDiagram />,
    2: <BoneStructureDiagram />,
    3: <TrainingDiagram />,
    4: <HormonesDiagram />,
    5: <PostureDiagram />,
    6: <SkincareDiagram />,
    7: <HairCycleDiagram />,
    8: <SleepDiagram />,
    9: <FacialAssessmentDiagram />,
    10: <GeneticsVsEffortDiagram />,
    11: <SupplementationDiagram />
  };

  return diagrams[moduleId] || null;
}