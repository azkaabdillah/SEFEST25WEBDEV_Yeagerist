import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_03caocp",
      "template_9a1mwoh",
      form.current,
      "SSy1lgcv5L1YeA0Bs"
    )
    .then((result) => {
      alert("Pesan berhasil dikirim ke BNPB!");
    })
    .catch((error) => {
      alert("Gagal mengirim pesan.");
    });

    e.target.reset();
  };

  return (
    <div className="container" style={{ marginTop: "8rem", marginBottom: "5rem" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-2">Contact BNPB</h2>
              <p className="text-center text-muted mb-4">Silakan isi di bawah ini untuk mengirim pesan ke BNPB.</p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="user_name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="user_email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="4" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;