"use client"
import { useState } from 'react';

export default function SeedsExpertise() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handleAccordionClick = (id: any) => {
    if (activeAccordion === id) {
      setActiveAccordion(null); // Collapse the currently active accordion
    } else {
      setActiveAccordion(id); // Expand the clicked accordion
    }
  };

  return (<>
    <div className='bg-secondary text-primary-content  m-3 md:m-0 p-1 md:p-3 '>
      <h2 className="text-center  text-xl md:text-3xl font-bold mt-3">We have expertise in these areas</h2>
      <div className='main-accordion flex justify-center'>
        <ul className="accordion w-[800px] ">
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="first" checked={activeAccordion === 'first'} onChange={() => handleAccordionClick('first')} />
            <label htmlFor="first" className='font-bold text-base md:text-lg e-label'>Division & Quality</label>
            <div className={`content ${activeAccordion === 'first' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                At PLPL, our Seed Division is at the heart of our commitment to agriculture and horticulture. We understand that the quality of seeds is paramount to the success of any planting endeavor. That&#39;s why we have dedicated ourselves to providing turnkey infrastructure installation and management services, starting from land acquisition to capital equipment installation, ensuring the meticulous care and management of seeds from their very inception to the point of delivery.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="second" checked={activeAccordion === 'second'} onChange={() => handleAccordionClick('second')} />
            <label htmlFor="second" className='font-bold text-base md:text-lg e-label'>Production</label>
            <div className={`content ${activeAccordion === 'second' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                Our Seed Division is responsible for the careful cultivation of various seed varieties. We prioritize the use of best practices, ensuring that the parent plants are healthy and disease-free, resulting in seeds of exceptional quality.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="third" checked={activeAccordion === 'third'} onChange={() => handleAccordionClick('third')} />
            <label htmlFor="third" className='font-bold text-base md:text-lg e-label'>Processing</label>
            <div className={`content ${activeAccordion === 'third' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                Once the seeds are harvested, they undergo rigorous cleaning, sorting, and quality control processes within our Seed Division. We take every measure to remove impurities and ensure uniformity, so you receive seeds that are pure and reliable. With a processing capacity of 2 metric tons per hour, our advanced technology guarantees efficiency without compromising on quality.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="fourth" checked={activeAccordion === 'fourth'} onChange={() => handleAccordionClick('fourth')} />
            <label htmlFor="fourth" className='font-bold text-base md:text-lg e-label'>Packing</label>
            <div className={`content ${activeAccordion === 'fourth' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                Our Seed Division pays attention to the finer details. We believe that packaging matters, and our seeds are thoughtfully packaged with clear instructions and information, making your planting experience more convenient and successful.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="fifth" checked={activeAccordion === 'fifth'} onChange={() => handleAccordionClick('fifth')} />
            <label htmlFor="fifth" className='font-bold text-base md:text-lg e-label'>Distribution</label>
            <div className={`content ${activeAccordion === 'fifth' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                We understand the urgency of getting the right seeds to you when you need them. Our Seed Division manages efficient distribution networks to ensure that you have access to our high-quality seeds when and where you need them.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="sixth" checked={activeAccordion === 'sixth'} onChange={() => handleAccordionClick('sixth')} />
            <label htmlFor="sixth" className='font-bold text-base md:text-lg e-label'>Sustainability</label>
            <div className={`content ${activeAccordion === 'sixth' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                Our Seed Division is committed to sustainability. We prioritize eco-friendly practices throughout the seed production and distribution process, ensuring that we contribute positively to the environment.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="seventh" checked={activeAccordion === 'seventh'} onChange={() => handleAccordionClick('seventh')} />
            <label htmlFor="seventh" className='font-bold text-base md:text-lg e-label'>Customer Support</label>
            <div className={`content ${activeAccordion === 'seventh' ? 'open' : ''}`}>
              <p className='font-semibold  text-xs md:text-base'>
                We know that questions may arise during your planting journey. Our dedicated Customer Support team, part of the Seed Division, is here to provide resources, guidance, and solutions to ensure your success.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>)
}