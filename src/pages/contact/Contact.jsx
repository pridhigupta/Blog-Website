import "./contact.css"

export default function Contact() {
    return (
        <div className="contacts">

            <span className="contactHead"><h1>GET IN TOUCH</h1></span>

            <form action="" className="contactForm">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea type="text" placeholder="Type your message here" /><br></br>
                <button>Submit </button>
            </form>
        </div>
    )
}