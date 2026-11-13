import { useState } from 'react'
import './App.css'

const angles = [
  { id: 'full-rep', label: 'Full rep' },
  { id: 'waistband', label: 'Waistband' },
  { id: 'fabric', label: 'Fabric' },
]

export default function App() {
  const [activeAngle, setActiveAngle] = useState(angles[0])
  const isFullRep = activeAngle.id === 'full-rep'
  const isWaistband = activeAngle.id === 'waistband'
  const isFabric = activeAngle.id === 'fabric'

  const imageFile = isFabric ? 'fabric.png' : 'full-rep.png'
  const imageAlt = {
    'full-rep': 'Lifter in navy training shorts at the bottom of a barbell squat',
    waistband: 'Close-up of the high-rise waistband at the bottom of the squat',
    fabric: 'Close-up of navy knit fabric with a diagonal flat seam',
  }[activeAngle.id]

  return (
    <div className="rebound">
      <header className="masthead">
        <span className="wordmark">REBOUND</span>
        <span className="collection-label">First Lift Collection</span>
      </header>

      <main>
        <section className="campaign" aria-labelledby="campaign-title">
          <div className="hero">
            <div className="hero-copy">
              <h1 id="campaign-title">
                Built
                <br />
                to lift.
              </h1>
            </div>

            <figure className="hero-media">
              <div
                className="media-placeholder"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${imageFile}`}
                  alt={imageAlt}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transformOrigin: '50% 57%',
                    transform: isWaistband ? 'scale(2.2)' : 'scale(1)',
                  }}
                />

                {isFullRep && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '57%',
                      left: '50%',
                      right: 8,
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--paper)',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'currentColor',
                      }}
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: 'clamp(8px, 3vw, 48px)',
                        borderTop: '1px solid',
                      }}
                    />
                    <span
                      style={{
                        padding: '4px 6px',
                        background: 'var(--ink)',
                        fontSize: 'clamp(0.625rem, 1.2vw, 0.875rem)',
                      }}
                    >
                      High-rise waistband
                    </span>
                  </div>
                )}
              </div>

              <figcaption className="angle-caption" aria-live="polite">
                {activeAngle.label}
              </figcaption>
            </figure>
          </div>

          <div className="angle-controls" role="group" aria-label="Squat angle">
            {angles.map((angle) => (
              <button
                key={angle.id}
                type="button"
                aria-pressed={activeAngle.id === angle.id}
                onClick={() => setActiveAngle(angle)}
              >
                {angle.label}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}