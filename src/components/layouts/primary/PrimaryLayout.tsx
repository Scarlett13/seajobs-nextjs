import Head from "next/head";
import Footer from "../../navigation/footer/Footer";
import Header from "../../navigation/header/Header";

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Seajobs</title>
      </Head>
      <section>
        <Header />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default PrimaryLayout;
