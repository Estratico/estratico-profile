import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  data: any;
  type: "contact" | "newsletter";
}

export function EmailTemplate({ data, type }: EmailTemplateProps) {
  switch (type) {
    case "contact":
      return <ContactEmailTemplate data={data} />;
    case "newsletter":
      return <NewsletterEmailTemplate data={data} />;
  }
}

export function ContactEmailTemplate({
  data,
}: {
  data: EmailTemplateProps["data"];
}) {
  return (
    <Tailwind>
      <Container className="w-full bg-gray-100 py-10 font-sans text-gray-800">
        <Section className="mx-auto max-w-[600px] overflow-hidden rounded-lg bg-white shadow">
          {/* Header */}
          <Section className="bg-black px-6 py-4">
            <Text className="text-lg font-semibold text-white">
              New Website Enquiry - {data.service}
            </Text>
          </Section>

          {/* Content */}
          <Body className="px-6 py-6 text-sm leading-relaxed">
            <Text className="mb-4">Hello Estratico Team,</Text>

            <Text className="mb-6">
              You have received a new enquiry through the website contact form.
            </Text>

            {/* Details */}
            <Section className="space-y-2">
              <Text>
                <span className="font-semibold text-gray-600">Name:</span>{" "}
                {data.name}
              </Text>
              <Text>
                <span className="font-semibold text-gray-600">Email:</span>{" "}
                {data.email}
              </Text>
              {data.company && (
                <Text>
                  <span className="font-semibold text-gray-600">Company:</span>{" "}
                  {data.company}
                </Text>
              )}
              {data.service && (
                <Text>
                  <span className="font-semibold text-gray-600">
                    Service Interested In:
                  </span>{" "}
                  {data.service}
                </Text>
              )}
              {data.budget && (
                <Text>
                  <span className="font-semibold text-gray-600">
                    Budget Range:
                  </span>{" "}
                  {data.budget}
                </Text>
              )}
            </Section>

            {/* Message */}
            <div className="mt-6 rounded-md border-l-4 border-black bg-gray-50 p-4 whitespace-pre-line">
              {data.message}
            </div>
          </Body>

          {/* Footer */}
          <Text className="bg-gray-50 px-6 py-4 text-center text-xs text-gray-500">
            This email was generated automatically from your website contact
            form.
          </Text>
        </Section>
      </Container>
    </Tailwind>
  );
}

export function NewsletterEmailTemplate({
  data,
}: {
  data: EmailTemplateProps["data"];
}) {
  return (
    <div>
      <h1>Welcome, {data.name}!</h1>
    </div>
  );
}
