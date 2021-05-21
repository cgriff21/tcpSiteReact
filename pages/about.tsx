import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function About() {
  return (
    <>
    <div className="wrapper">
      <Head>
        <title>The Chance Project - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <div className="content-wrap">
      <section className="bg-white py-8 mt-auto sm:pl-5">
        <div className="container max-w-5xl mx-auto">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            About Us
        </h1>

            <p className="py-10 mx-4">We offer a wide range of programs and services designed to give individuals and families more control of their economic mobility by helping them address the root causes of their circumstances and move to a life of self-reliance and prosperity. We help them and their families by providing programs, information and resources and by advocacy, public outreach and media. 
              
            We leverage technology, entrepreneurial approaches and collective impact collaboration to create sustainable solutions that transform the lives of children, families and communities locally, nationally and worldwide. We bring together entrepreneurs, community organizations, government and like minded individuals to create, finance and implement collaborative projects for the common good.</p>

          <div className="flex flex-wrap py-10">
            <div className="lg:w-5/12 px-4 ml-auto mb-6 text-left ">
              <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                Housing
            </h3>
              <p className="text-gray-600 mb-8">We create and administer partnerships between landlords, property managers, government and non-profit organizations to address families in housing crisis throughout Southern California. We provide individuals with solutions to prevent homelessness.</p>
            </div>
            <div className="lg:w-6/12 px-4 mb-6">
            <Image
              src="/images/housing.svg"
              alt="The Chance Project Logo"
              width={1440}
              height={721}
            />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse lg:flex-row  py-10">
            <div className="lg:w-6/12 px-4 mb-6">
            <Image
              src="/images/income.svg"
              alt="The Chance Project Logo"
              width={1440}
              height={721}
            />
            </div>
            <div className="lg:w-5/12 px-4 ml-auto mb-6 text-right">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                  Income
              </h3>
                <p className="text-gray-600">
                We create opportunities for individuals to increase their income and ensure stability and ongoing training and advancement
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap align-center mb-8 items-center py-10">
            <div className="lg:w-5/12 px-4 ml-auto mb-6 text-left ">
              <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
              Early Childhood Education
            </h3>
              <p className="text-gray-600 mb-6">Research has found that the best way to improve economic mobility is through investing in early childhood education, but the increasing costs of early education is creating a stumbling block, especially for low-income families. It's a form of structural inequality that keeps the poor from improving their lives.

              90% of a child’s brain is fully developed by the age of 5 years old. For this reason, The Chance Project has adopted a Cradle to Career approach that starts immediately at the very beginning..</p>
            </div>
            <div className="lg:w-6/12 px-4 mb-6">
            <Image
              src="/images/education.svg"
              alt="The Chance Project Logo"
              width={1440}
              height={721}
            />
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
      </div>
    </>
  )
}
