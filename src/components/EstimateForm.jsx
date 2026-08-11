import { useState } from "react";
import { EMAIL_HREF, PHONE } from "../data/site";

export default function EstimateForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact__form reveal reveal--delay-1"
      action={EMAIL_HREF}
      method="post"
      encType="text/plain"
      onSubmit={() => setSent(true)}
    >
      <label>
        Name
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" required autoComplete="tel" />
      </label>
      <label>
        Email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label className="contact__full">
        Message
        <textarea name="message" rows="5" required></textarea>
      </label>
      <button className="btn btn--accent contact__full" type="submit">
        Send Request
      </button>
      {sent ? (
        <p className="form-note contact__full">
          Thanks — open your email app to finish sending, or call us at {PHONE}.
        </p>
      ) : null}
    </form>
  );
}
