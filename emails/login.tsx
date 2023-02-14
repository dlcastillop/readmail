import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Head />
      <Section style={main}>
        <Container style={container}>
          <Section style={box}>
            <div style={flex}>
              <Img src="/static/logo.svg" alt="Company logo" />
              <Text style={header}>GetSquare</Text>
            </div>
            <Hr style={hr} />
            <Text style={secondaryHeader}>New login to GetSquare</Text>
            <Text style={paragraph}>Hey Daniel,</Text>
            <Text style={paragraph}>
              We noticed a new sign-in to your account.
            </Text>
            <ul style={list}>
              <li>
                <span style={span}>Location:</span> Cabaiguán, Cuba
              </li>
              <li>
                <span style={span}>Device:</span> Samsung A12
              </li>
              <li>
                <span style={span}>Time:</span> 5:02:07PM
              </li>
              <li>
                <span style={span}>Date:</span> Monday, Feb 13,2023
              </li>
            </ul>
            <Text style={paragraph}>
              If this was you, please can disregard this message. If that wasn't
              you, we highly advise that you change your password as soon as
              possible and also notify us by replying to this mail.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              Need help?{" "}
              <Link style={anchor} href="#">
                Contact our support team
              </Link>{" "}
              or no longer interested in our newsletters?{" "}
              <Link style={anchor} href="#">
                Unsubscribe here
              </Link>
              . Want to give us feedback? Let us know what you think on our{" "}
              <Link style={anchor} href="#">
                feedback site
              </Link>
              .
            </Text>
            <div style={flex}>
              <Link style={anchor} href="#">
                <Img src="/static/facebook.svg" alt="Facebook logo" />
              </Link>
              <Link style={anchorFooter} href="#">
                <Img src="/static/linkedin.svg" alt="LinkedIn logo" />
              </Link>
              <Link style={anchorFooter} href="#">
                <Img src="/static/twitter.svg" alt="Twitter logo" />
              </Link>
              <Link style={anchorFooter} href="#">
                <Img src="/static/instagram.svg" alt="Instagram logo" />
              </Link>
            </div>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const flex = {
  display: "flex",
};

const colors = {
  primary: "#3964ea",
  secondary: "#ffffff",
};

const main = {
  backgroundColor: colors.primary,
  padding: "20px",
};

const container = {
  backgroundColor: colors.secondary,
  margin: "0 auto",
  padding: "20px 0 48px",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
};

const box = {
  padding: "0 48px",
};

const header = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "10px",
};

const secondaryHeader = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const list = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  listStyle: "none",
  padding: "0px",
};

const span = { fontWeight: "500" };

const anchor = {
  color: colors.primary,
};

const anchorFooter = {
  color: colors.primary,
  marginLeft: "7px",
};

const button = {
  backgroundColor: colors.primary,
  borderRadius: "5px",
  color: colors.secondary,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const footer = {
  color: "#8898aa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "12px",
  lineHeight: "16px",
};
