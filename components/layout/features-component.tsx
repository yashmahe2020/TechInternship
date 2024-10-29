import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto w-full mt-16 mb-8 lg:gap-4 lg:grid-cols-3">
      <section 
        className="mx-auto w-full rounded-2xl overflow-hidden col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] relative z-10"
        style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', transition: 'transform 0.1s ease-out' }}
      >
        <div 
          className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden z-10"
          style={{ boxShadow: '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)' }}
        >
          <div 
            className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette z-10"
            style={{ backgroundImage: 'url(https://www.codecentric.de/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FFsra70rRo2TcGWLq5PPw&w=3840&q=75)', backgroundSize: '30%' }}
          ></div>
          <div className="h-full px-4 py-20 sm:px-10 flex flex-col justify-between">
            <div className="max-w-xs lg:max-w-full lg:flex lg:justify-between lg:items-center lg:space-x-8">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">Discover a Global Network of Young Founders</h2>
                <p className="mt-4 text-left text-base/6 text-neutral-600">Our comprehensive Founders Database allows you to find and connect with like-minded entrepreneurs, fostering collaboration and innovation on a global scale.</p>
              </div>
              <img 
                alt="network image" 
                loading="lazy" 
                width="500" 
                height="400" 
                decoding="async" 
                className="mt-4 lg:mt-0 lg:max-w-sm object-contain rounded-2xl" 
                src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1639322537231-2f206e06af84%3Fw%3D800%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV0d29ya3xlbnwwfHwwfHx8MA%253D%253D&w=1080&q=75"
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        className="mx-auto w-full rounded-2xl overflow-hidden col-span-1 min-h-[300px] bg-gray-100 relative z-10"
        style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', transition: 'transform 0.1s ease-out' }}
      >
        <div 
          className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden z-10"
          style={{ boxShadow: '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)' }}
        >
          <div 
            className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette z-10"
            style={{ backgroundImage: 'url(https://www.codecentric.de/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FFsra70rRo2TcGWLq5PPw&w=3840&q=75)', backgroundSize: '30%' }}
          ></div>
          <div className="h-full px-4 py-20 sm:px-10">
            <div className="max-w-xs lg:max-w-full lg:flex lg:justify-between lg:items-center lg:space-x-8">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">Access Learning Resources on VC, Funds, and Startups</h2>
                <p className="mt-4 text-left text-base/6 text-neutral-600">Explore our curated educational resources to gain insights into venture capital, funding opportunities, and startup strategies, empowering you to take your venture to the next level.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="mx-auto w-full rounded-2xl overflow-hidden col-span-1 lg:col-span-3 bg-gray-100 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative z-10"
        style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', transition: 'transform 0.1s ease-out' }}
      >
        <div 
          className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden z-10"
          style={{ boxShadow: '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)' }}
        >
          <div 
            className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette z-10"
            style={{ backgroundImage: 'url(https://www.codecentric.de/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FFsra70rRo2TcGWLq5PPw&w=3840&q=75)', backgroundSize: '30%' }}
          ></div>
          <div className="h-full px-4 py-20 sm:px-10">
            <div className="max-w-xs lg:max-w-full lg:flex lg:justify-between lg:items-center lg:space-x-8">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">Upcoming Integration of AI, Semantic Search, and API Extraction</h2>
                <p className="mt-4 text-left text-base/6 text-neutral-600">Stay ahead with our soon-to-be-launched features, including AI-driven insights, advanced semantic search, and API extraction, designed to streamline your startup journey and enhance your decision-making process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Features;
