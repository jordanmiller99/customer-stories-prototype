export default function CTASection() {
  return (
    <section
      className="my-16 rounded-2xl px-8 py-12 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(123,97,255,0.15) 0%, rgba(0,212,170,0.1) 50%, rgba(255,60,172,0.1) 100%)',
        border: '1px solid rgba(123,97,255,0.2)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: '#7B61FF' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: '#00D4AA' }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <h2
          className="text-4xl font-display mb-3"
          style={{
            color: '#F5F5F7',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          }}
        >
          You&rsquo;re next. Ready?
        </h2>
        <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: '#C7C7CC' }}>
          Join the marketers who are redefining what&rsquo;s possible with content engineering.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #7B61FF, #FF3CAC)',
              color: '#fff',
            }}
          >
            Start a Trial
          </a>
          <a
            href="https://www.airops.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#F5F5F7',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Enroll in Cohort
          </a>
        </div>
      </div>
    </section>
  )
}
