import { FormEvent, useState } from "react";
import api from "../api/axios";

interface FormData {
  name: string;
  email: string;
  message: string;
  interests: string[];
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    interests: [],
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");

  const interests = [
    "Automation",
    "Marketing",
    "Finance",
    "Consulting",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData((previous) => {
      const exists = previous.interests.includes(interest);

      return {
        ...previous,

        interests: exists
          ? previous.interests.filter(
              (item) => item !== interest
            )
          : [...previous.interests, interest],
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await api.post("/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        interests: formData.interests,
      });

      if (response.data.success) {
        setStatus("success");

        setStatusMessage(
          "Thank you. Your message has been sent successfully."
        );

        setFormData({
          name: "",
          email: "",
          message: "",
          interests: [],
        });
      } else {
        setStatus("error");

        setStatusMessage(
          response.data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setStatusMessage(
        "We couldn't send your message. Please try again later."
      );
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <div className="contact-box">

          <div className="contact-info">

            <p className="eyebrow">
              GET IN TOUCH
            </p>

            <h2>
              Let's Build
              <span> Something.</span>
            </h2>

            <p>
              Have an idea, a business challenge, or a
              project in mind? Tell us about it. We'd love
              to hear what you're working on.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              />

            </div>


            <div className="form-group">

              <label>
                I'm Interested In
              </label>

              <div className="interest-options">

                {interests.map((interest) => (
                  <button
                    type="button"
                    key={interest}
                    className={
                      formData.interests.includes(
                        interest
                      )
                        ? "interest-option active"
                        : "interest-option"
                    }
                    onClick={() =>
                      toggleInterest(interest)
                    }
                    disabled={status === "sending"}
                  >
                    {interest}
                  </button>
                ))}

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              />

            </div>


            <button
              className="submit-button"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}

              {status !== "sending" && (
                <span>→</span>
              )}
            </button>


            {statusMessage && (
              <p
                className={`form-status ${status}`}
              >
                {statusMessage}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;