import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function About() {
  return (
    <>
      <Head>
        <title>The Chance Project - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-wrap py-10">
            <div className="lg:w-5/12 px-4 ml-auto mb-6 text-left ">
              <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                Income
            </h3>
              <p className="text-gray-600 mb-8">Our Economic Mobility Program helps families move toward financial security and introduces pathways to economic opportunity. Outcomes are improved for at-risk families by addressing underlying social determinants of quality of life. Enrolled families work one-on-one with a specially trained coach to identify and to set goals for the future.
              </p>
            </div>
            <div className="lg:w-6/12 px-4 pt-10 mb-6">
              <Image
                src="/images/wallet.svg"
                alt="The Chance Project Logo"
                width={1440}
                height={721}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}