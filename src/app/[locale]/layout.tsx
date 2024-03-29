import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import ThemeContextProvider from "src/theme";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Applayout from "../Layout/Applayout";

export const metadata = {
  title: "Versh OpenAI Teamplate",
  description: "Generated by create next app",
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale?: string;
  };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <ThemeContextProvider>
        <body suppressHydrationWarning={true}>
          <Applayout>{children}</Applayout>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
