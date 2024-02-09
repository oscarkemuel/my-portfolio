"use client";

import { sendEmail } from "@/services";
import styles from "./styles.module.scss";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IProps {
  translations: {
    formTrans: {
      contactEmailButtonText: string;
      messageLabel: string;
      nameLabel: string;
      requestError: string;
      requestSuccess: string;
    };
  };
}

export const EmailForm = ({ translations }: IProps) => {
  const { formTrans } = translations;
  const [isLoadind, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const response = await sendEmail(data);

    if (response.error) {
      alert(formTrans.requestError);
      setIsLoading(false);
      return;
    }

    alert(formTrans.requestSuccess);
    form.reset();
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      encType="application/json"
      id="contact-form"
      className={styles.form}
    >
      <div className="form-group">
        <div>
          <div>
            <label htmlFor="name">{formTrans.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Joe Doe"
              min={3}
              max={150}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="joedoe@dev.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message">{formTrans.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Hello!"
            minLength={10}
            maxLength={500}
          ></textarea>
        </div>
      </div>

      <button type="submit" disabled={isLoadind}>
        {isLoadind ? (
          <div>
            <AiOutlineLoading3Quarters
              size={16}
              color="#000"
              className={isLoadind ? styles.iconLoading : ""}
            />
          </div>
        ) : (
          formTrans.contactEmailButtonText
        )}
      </button>
    </form>
  );
};
