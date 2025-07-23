'use client'
import Image from 'next/image'

const AboutCareLoop = () => {
  const ImageExist = true;

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Careloop, our mission is to create a healthy community where all children feel loved and cared for.
            The true definition of care reflects through the smiles on the faces of the children we look after.
            We ensure the highest level of personalized care going by the development stage of every child.

            We are empowered with: innovative resources, seamless communication to parents and hurdle help to support learning.
            <br/><br/>
            Care Loop offers an integrated platform dedicated to enhancing well-being, improving learning, and facilitating growth. 
            <br/> Join us in redefining care and building a loop of continuous support.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          
          {ImageExist ? (
            <Image
            src="/image18.jpg"
            alt="Care Loop Illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-md h-auto"
            />
          ):(
            <p>Image not found!</p> )}
        </div>
      </div>
    </section>
  )
}

export default AboutCareLoop;
