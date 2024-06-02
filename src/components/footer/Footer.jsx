import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <span className="footerSub">
        <h1>Subscribe Form</h1>
      </span>
      <form className="footerForm">+
        <input className="footerInput" type='email' placeholder="Enter your email..." />
        <button className="footerSubButton">
          SUBSCRIBE
        </button>
      </form>

      <div className="copyRight">
        <p>
          © 2023, Tiny Tales & Aesthetics
        </p>
      </div>
    </div>
  )
}
