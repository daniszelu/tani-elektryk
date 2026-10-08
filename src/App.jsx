import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Check,
  Clock3,
  CookingPot,
  House,
  Lightbulb,
  Languages,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plug,
  ShieldCheck,
  Sparkles,
  Wrench,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const closeMenu = () => setMenuOpen(false)
  const handleContactSubmit = async (event) => {
    event.preventDefault()
    const target = event.currentTarget
    setFormSubmitting(true)
    setFormError('')
    const formData = new FormData(target)
    formData.append('_subject', 'Zapytanie ze strony tani-elektryk.pl')
    try {
      const response = await fetch('https://formsubmit.co/ajax/kontakt@tani-elektryk.pl', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(
          'Nie udało się wysłać wiadomości. Spróbuj ponownie albo zadzwoń pod numer 886 221 993.'
        )
      }
      target.reset()
      setFormSent(true)
    } catch {
      setFormError(
        'Nie udało się wysłać wiadomości. Spróbuj ponownie albo zadzwoń pod numer 886 221 993.'
      )
    } finally {
      setFormSubmitting(false)
    }
  }
  return (
    <div className='site-shell'>
      <div className='topline'>
        <div className='container topbar-content'>
          <span>
            <MapPin size={14} /> Wrocław i okolice
          </span>
          <span className='topbar-note'>Dojeżdżamy tam, gdzie inni nie chcą</span>
          <a href='tel:+48886221993'>
            <Phone size={14} /> +48 886 221 993
          </a>
        </div>
      </div>
      <header className='navbar container'>
        <a className='brand' href='#start' onClick={closeMenu}>
          <span className='brand-mark'>
            <Bolt size={21} fill='currentColor' />
          </span>
          <span>
            Tani<span className='brand-accent'>Elektryk</span>
            <small>WROCŁAW / 24H</small>
          </span>
        </a>
        <button
          className='menu-toggle'
          type='button'
          aria-label='Otwórz menu'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href='#uslugi' onClick={closeMenu}>
            Usługi
          </a>
          <a href='#kontakt' onClick={closeMenu}>
            Kontakt
          </a>
          <a className='nav-call' href='tel:+48886221993'>
            <Phone size={16} /> Zadzwoń teraz
          </a>
        </nav>
      </header>
      <main>
        <section className='hero container' id='start'>
          <div className='hero-copy reveal'>
            <h1>
              Usługi elektryka
              <br />
              <em>nie muszą być drogie.</em>
            </h1>
            <p className='hero-lead'>
              Fachowe i przystępne cenowo usługi elektryka z{' '}
              <strong className='sep-inline'>uprawnieniami SEP</strong> dla mieszkań, domów i firm
              we Wrocławiu i okolicach.
            </p>
          </div>
          <div className='hero-visual reveal reveal-delay'>
            <div className='image-frame'>
              <img
                src='https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85'
                alt='Elektryk podczas pracy przy instalacji'
              />
              <div className='image-label'>
                <span className='label-icon'>
                  <ShieldCheck size={20} />
                </span>
                <span>
                  <strong>Bezpiecznie</strong>
                  <small>z dbałością o detale</small>
                </span>
              </div>
            </div>
            <div className='hero-sticker'>
              <Sparkles size={16} />
              <strong>4.9</strong>
              <span>/ 5</span>
              <small>opinie klientów</small>
            </div>
          </div>
        </section>
        <div className='marquee'>
          <div className='marquee-track'>
            <div className='marquee-group'>
              <span>
                <Languages size={14} /> We speak English
              </span>
              <i />
              <span>
                <MessageCircle size={14} /> Używamy WhatsApp
              </span>
              <i />
              <span>
                <Clock3 size={14} /> Działamy 24/7
              </span>
              <i />
              <span>
                <ShieldCheck size={14} /> Uprawnienia SEP
              </span>
              <i />
              <span>
                <MapPin size={14} /> Wrocław i okolice
              </span>
              <i />
            </div>
            <div className='marquee-group marquee-group-copy' aria-hidden='true'>
              <span>
                <Languages size={14} /> We speak English
              </span>
              <i />
              <span>
                <MessageCircle size={14} /> Używamy WhatsApp
              </span>
              <i />
              <span>
                <Clock3 size={14} /> Działamy 24/7
              </span>
              <i />
              <span>
                <ShieldCheck size={14} /> Uprawnienia SEP
              </span>
              <i />
              <span>
                <MapPin size={14} /> Wrocław i okolice
              </span>
              <i />
            </div>
          </div>
        </div>
        <section className='section services container' id='uslugi'>
          <div className='service-grid'>
            <article className='service-card'>
              <div className='service-icon'>
                <Wrench size={25} />
              </div>
              <h3>Usuwanie awarii</h3>
              <p>
                Diagnozowanie i naprawa usterek, takich jak brak zasilania, zwarcia czy
                niedziałające gniazdka.
              </p>
            </article>
            <article className='service-card'>
              <div className='service-icon'>
                <House size={25} />
              </div>
              <h3>Modernizacja instalacji</h3>
              <p>
                Wymiana i dostosowanie istniejącej instalacji do potrzeb mieszkania, domu lub firmy.
              </p>
            </article>
            <article className='service-card'>
              <div className='service-icon'>
                <Lightbulb size={25} />
              </div>
              <h3>Punkty świetlne</h3>
              <p>Montaż i przenoszenie punktów oświetleniowych oraz podłączenie lamp.</p>
            </article>
            <article className='service-card'>
              <div className='service-icon'>
                <Plug size={25} />
              </div>
              <h3>Biały montaż</h3>
              <p>Montaż i wymiana gniazdek, włączników oraz osprzętu elektrycznego.</p>
            </article>
            <article className='service-card'>
              <div className='service-icon'>
                <CookingPot size={25} />
              </div>
              <h3>Podłączanie płyt indukcyjnych</h3>
              <p>
                Podłączenie płyty indukcyjnej do instalacji oraz sprawdzenie poprawności wykonanych
                połączeń.
              </p>
            </article>
          </div>
        </section>
        <section className='why-section' id='dlaczego-my'>
          <div className='container why-layout'>
            <div className='why-photo'>
              <img
                src='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=1000&q=85'
                alt='Narzędzia elektryka'
              />
              <span className='photo-note'>
                Dobra robota
                <br />
                <strong>zostaje na lata.</strong>
              </span>
            </div>
            <div className='why-copy'>
              <p className='kicker'>Po prostu dobrze</p>
              <h2>
                Nie kombinujemy.
                <br />
                <span>Robimy porządnie.</span>
              </h2>
              <p className='why-lead'>
                Wybierasz fachowca, nie loterię. Pracujemy czysto, terminowo i z szacunkiem do
                Twojego domu.
              </p>
              <ul className='check-list'>
                <li>
                  <span>
                    <Check size={15} />
                  </span>
                  <div>
                    <strong>Wycena przed pracą</strong>
                    <small>Wiesz, na czym stoisz. Bez niespodzianek.</small>
                  </div>
                </li>
                <li>
                  <span>
                    <Check size={15} />
                  </span>
                  <div>
                    <strong>Gwarancja na usługę</strong>
                    <small>Bierzemy odpowiedzialność za swoją pracę.</small>
                  </div>
                </li>
                <li>
                  <span>
                    <Check size={15} />
                  </span>
                  <div>
                    <strong>Porządek po robocie</strong>
                    <small>Zostawiamy miejsce w lepszym stanie niż zastaliśmy.</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='process section container' id='proces'>
          <div className='section-heading process-heading'>
            <div>
              <p className='kicker'>Bez stresu</p>
              <h2>
                Trzy kroki do
                <br />
                <span>sprawnego prądu.</span>
              </h2>
            </div>
            <p className='section-intro'>Zadzwoń lub napisz. Resztą zajmiemy się my.</p>
          </div>
          <div className='process-grid'>
            <div className='process-step'>
              <span>01</span>
              <h3>Opowiedz, co się dzieje</h3>
              <p>Krótko opisujesz problem albo planowaną pracę. Możesz wysłać zdjęcie.</p>
            </div>
            <div className='process-step'>
              <span>02</span>
              <h3>Ustalamy konkrety</h3>
              <p>Podajemy dostępny termin i uczciwą wycenę przed rozpoczęciem prac.</p>
            </div>
            <div className='process-step'>
              <span>03</span>
              <h3>Robimy swoje</h3>
              <p>Przyjeżdżamy na czas, działamy sprawnie i zostawiamy po sobie porządek.</p>
            </div>
          </div>
        </section>
        <section className='contact-section' id='kontakt'>
          <div className='container contact-layout'>
            <div className='contact-copy'>
              <h2>
                Porozmawiajmy o<br />
                <span>Twojej instalacji.</span>
              </h2>
              <p>Napisz kilka słów albo zadzwoń. Odpowiemy tak szybko, jak to możliwe.</p>
              <div className='contact-details'>
                <a href='tel:+48886221993'>
                  <span>
                    <Phone size={19} />
                  </span>
                  <div>
                    <small>Telefon</small>
                    <strong>+48 886 221 993</strong>
                  </div>
                </a>
                <a href='mailto:kontakt@tani-elektryk.pl'>
                  <span>
                    <Mail size={19} />
                  </span>
                  <div>
                    <small>E-mail</small>
                    <strong>kontakt@tani-elektryk.pl</strong>
                  </div>
                </a>
                <a href='https://wa.me/48886221993' target='_blank' rel='noopener noreferrer'>
                  <span>
                    <MessageCircle size={19} />
                  </span>
                  <div>
                    <small>WhatsApp</small>
                    <strong>Napisz do nas</strong>
                  </div>
                </a>
              </div>
            </div>
            <form className='contact-form' onSubmit={handleContactSubmit}>
              {formSent ? (
                <div className='form-success'>
                  <span>
                    <Check size={25} />
                  </span>
                  <h3>Wiadomość wysłana.</h3>
                  <p>Odezwiemy się do Ciebie najszybciej, jak się da.</p>
                  <button type='button' className='text-link' onClick={() => setFormSent(false)}>
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <>
                  <div className='form-row'>
                    <label>
                      Imię
                      <input
                        type='text'
                        name='name'
                        autoComplete='name'
                        placeholder='Jak masz na imię?'
                        required
                      />
                    </label>
                    <label>
                      Telefon
                      <input
                        type='tel'
                        name='phone'
                        autoComplete='tel'
                        placeholder='Twój numer'
                        required
                      />
                    </label>
                  </div>
                  <label>
                    E-mail
                    <input
                      type='email'
                      name='email'
                      autoComplete='email'
                      placeholder='Twój adres e-mail'
                      required
                    />
                  </label>
                  <label>
                    W czym możemy pomóc?
                    <textarea
                      name='message'
                      placeholder='Napisz kilka słów o zleceniu...'
                      rows='4'
                      required
                    />
                  </label>
                  {formError && (
                    <p className='form-error' role='alert'>
                      {formError}
                    </p>
                  )}
                  <button className='button button-dark' type='submit' disabled={formSubmitting}>
                    {formSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}{' '}
                    {!formSubmitting && <ArrowRight size={18} />}
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='container footer-content'>
          <a className='brand' href='#start'>
            <span className='brand-mark'>
              <Bolt size={21} fill='currentColor' />
            </span>
            <span>
              Tani<span className='brand-accent'>Elektryk</span>
              <small>WROCŁAW / 24H</small>
            </span>
          </a>
          <p>Elektryk nie musi być drogi</p>
          <div className='footer-links'>
            <a href='mailto:kontakt@tani-elektryk.pl' aria-label='E-mail'>
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className='container footer-bottom'>
          <span>© 2024 Tani Elektryk</span>
          <span>Wrocław i okolice</span>
        </div>
      </footer>
    </div>
  )
}

export default App
