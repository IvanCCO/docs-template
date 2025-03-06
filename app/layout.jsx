import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";
import Image from "next/image";
import ExportPDFButton from "./ExportPDFButton";

export const metadata = {
  title: "Blog Example",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: "#0f172a", light: "#fefce8" }} />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Image
              alt="fioeunwb"
              src={
                "https://static.wixstatic.com/media/41893d_0a71ebc4ef5b4562a90d766b04d77088~mv2.png/v1/fit/w_2500,h_1330,al_c/41893d_0a71ebc4ef5b4562a90d766b04d77088~mv2.png"
              }
              height={100}
              width={100}
            />
            <Search />
            <ThemeSwitch />
          </Navbar>
          <ExportPDFButton>{children}</ExportPDFButton>

          <Footer>
            <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: "help" }}
            >
              CC BY-NC 4.0
            </abbr>{" "}
            {new Date().getFullYear()} © Dimitri POSTOLOV.
            <a href="/feed.xml" style={{ float: "right" }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
