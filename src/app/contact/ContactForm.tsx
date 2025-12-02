"use client";

import React, { useState } from "react";
import {
  Input,
  Button,
  Row,
  Column,
  Text,
  Textarea
} from "@once-ui-system/core";
import { person, contact } from "@/resources";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // Create a mailto fallback so the form works without a backend.
    const subject = encodeURIComponent(
      `Contact from ${name || "Website"} — ${person.name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailto = `mailto:${person.email}?subject=${subject}&body=${body}`;

    // open mailto in new window/tab — this will open the user's mail app
    window.location.href = mailto;

    // Best-effort set status for UI; actual delivery depends on mail client
    setStatus("sent");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 1600);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Column gap="12">
        <Input
          id="contact-name"
          name="name"
          placeholder={contact.form?.placeholders?.name ?? "Your name"}
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />

        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder={contact.form?.placeholders?.email ?? "Your email"}
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <Textarea
          id="contact-message"
          name="message"
          placeholder={
            contact.form?.placeholders?.message ??
            "Tell me about your project or what you'd like to talk about..."
          }
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <Row gap="8" horizontal="between" vertical="center">
          <Button
            type="submit"
            size="m"
            prefixIcon="arrowUpRight"
            data-border="rounded"
          >
            {status === "sending"
              ? "Sending…"
              : contact.form?.buttons?.submit ?? "Send message"}
          </Button>

          <Text variant="body-default-xs" onBackground="neutral-weak">
            {status === "sent" &&
              (contact.form?.hints?.success ??
                "Ready — open your mail client to send.")}
            {status === "error" &&
              (contact.form?.hints?.validation ??
                "Please fill required fields (email & message).")}
          </Text>
        </Row>
      </Column>
    </form>
  );
}
