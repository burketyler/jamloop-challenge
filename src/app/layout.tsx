import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import theme from "@/components/theme";
import { HasChildren } from "@/types/helper-types";
import { Box, CssBaseline } from "@mui/material";
import { PageHeader } from "@/components/layout/header/page-header";
import { PageFooter } from "@/components/layout/page-footer";
import { FlexColumn } from "@/components/layout/flex";

export const metadata: Metadata = {
  title: "Jamloop",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({ children }: Readonly<HasChildren>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FlexColumn gap={4} minHeight={"100vh"}>
              <PageHeader />
              <Box component={"main"} flexGrow={1}>
                {children}
              </Box>
              <PageFooter />
            </FlexColumn>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
