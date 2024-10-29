import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const metadata = {
  title: "MVHS Steam Week",
  description:
    "MVHS Steam Week takes place from ",
  icons: {
    icon: 'logo.png',
  },
  metadataBase: new URL('https://steam-week.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="logo.png" sizes="any"/>
        </head>
        <body className={cx(sfPro.variable, inter.variable)}>
              {children}
          <VercelAnalytics />
        </body>
      </html>
    </>
  );
}