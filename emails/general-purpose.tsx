import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";
import { Img } from "@react-email/img";

export default function Email() {
  return (
    <Html>
      <Head />
      <Section style={main}>
        <Container style={container}>
          <Section style={box}>
            <div style={flex}>
              <Img
                src="https://drive.google.com/uc?export=view&id=1liFdoCHjSqGokBuWJ3Kngi09wr8Ey2CI"
                alt="Company logo"
              />
              <Text style={header}>GetSquare</Text>
            </div>
            <Hr style={hr} />
            <Text style={secondaryHeader}>Here you add the title</Text>
            <Text style={paragraph}>
              This is a paragraph for you to explain everything you need in your
              email.
            </Text>
            <Text style={paragraph}>
              You can also use links within paragraphs{" "}
              <Link style={anchor} href="#">
                like this
              </Link>
              .
            </Text>
            <Text style={paragraph}>
              If you want you can use buttons with links. Watch this. 👇{" "}
            </Text>
            <Section style={{ textAlign: "center" }}>
              <Button pX={20} pY={12} style={button} href="#">
                Click here
              </Button>
            </Section>
            <Text style={paragraph}>
              You can also use these separators to delimit the parts of your
              email. 👇
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
                <Img
                  src="https://drive.google.com/uc?export=view&id=1blKqvFmaqwbsozE19wkZHD2kIz_Gm8nA"
                  alt="Facebook logo"
                />
              </Link>
              <Link style={anchorFooter} href="#">
                <Img
                  src="https://drive.google.com/uc?export=view&id=1SEee18Kz739s3WqHFSIimeMYxpTPcUo1"
                  alt="LinkedIn logo"
                />
              </Link>
              <Link style={anchorFooter} href="#">
                <Img
                  src="https://drive.google.com/uc?export=view&id=1tCGWLqJmAVyhOBHxMO4ynAd9CDnH6KRf"
                  alt="Twitter logo"
                />
              </Link>
              <Link style={anchorFooter} href="#">
                <Img
                  src="https://drive.google.com/uc?export=view&id=1UV5PqC10J5XxsAk30KzPrwQApPYLonCW"
                  alt="Instagram logo"
                />
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

const anchorFooter = {
  color: colors.primary,
  marginLeft: "7px",
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

const anchor = {
  color: colors.primary,
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
