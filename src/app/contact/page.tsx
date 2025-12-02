import React from "react";
import {
  Column,
  Heading,
  Text,
  Button,
  Row,
  Meta,
  Schema,
  Avatar,
  Icon,
  IconButton,
  Background
} from "@once-ui-system/core";
import { baseURL, contact, person, social } from "@/resources";
import ContactForm from "./ContactForm";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path
  });
}

export default function Contact() {
  return (
    <Column maxWidth="xl" paddingTop="16">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`
        }}
      />

      <Row
        gap="24"
        fillWidth
        s={{ direction: "column" }}
        style={{ alignItems: "flex-start", width: "100%" }}
      >
        {/* left: quick contact card */}
        <Column
          flex={1}
          style={{ minWidth: 320 }}
          gap="16"
          padding="32"
          radius="l"
          border="neutral-alpha-weak"
          background="surface"
        >
          <Text variant="body-default-m" onBackground="brand-weak">
            {contact.leftCard?.blurb ?? contact.description}
          </Text>

          <Heading as="h3" marginTop="20" variant="heading-strong-s">
            Contact details
          </Heading>
          <Text variant="body-default-m">{contact.contactDetails}</Text>
        </Column>

        {/* right: contact form */}
        <Column
          fillWidth
          flex={1}
          gap="8"
          style={{ minWidth: 320 }}
          padding="32"
          radius="l"
          border="neutral-alpha-weak"
          background="surface"
        >
          <Heading variant="display-strong-s">
            {contact.form?.title ?? "Send a message"}
          </Heading>

          <ContactForm />

          <Background
            style={{ pointerEvents: "none" }}
            top="-28"
            left="-28"
            width="120"
            height="120"
            radius="full"
            gradient={{
              display: true,
              opacity: 0.06,
              x: 16,
              y: 16,
              width: 120,
              height: 120,
              colorStart: "brand-strong",
              colorEnd: "accent-weak",
              tilt: 16
            }}
          />
        </Column>
      </Row>
    </Column>
  );
}
