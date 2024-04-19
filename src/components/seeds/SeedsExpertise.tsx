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
      <h2 className="text-center  text-xl md:text-2xl lg:text-3xl font-bold uppercase mt-3">We have expertise in these areas</h2>
      <div className='main-accordion flex justify-center'>
        <ul className="accordion w-[800px] ">
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="first" checked={activeAccordion === 'first'} onChange={() => handleAccordionClick('first')} />
            <label htmlFor="first" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Division & Quality</label>
            <div className={`content ${activeAccordion === 'first' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="second" checked={activeAccordion === 'second'} onChange={() => handleAccordionClick('second')} />
            <label htmlFor="second" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Production</label>
            <div className={`content ${activeAccordion === 'second' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="third" checked={activeAccordion === 'third'} onChange={() => handleAccordionClick('third')} />
            <label htmlFor="third" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Processing</label>
            <div className={`content ${activeAccordion === 'third' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="fourth" checked={activeAccordion === 'fourth'} onChange={() => handleAccordionClick('fourth')} />
            <label htmlFor="fourth" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Packing</label>
            <div className={`content ${activeAccordion === 'fourth' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="fifth" checked={activeAccordion === 'fifth'} onChange={() => handleAccordionClick('fifth')} />
            <label htmlFor="fifth" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Distribution</label>
            <div className={`content ${activeAccordion === 'fifth' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="sixth" checked={activeAccordion === 'sixth'} onChange={() => handleAccordionClick('sixth')} />
            <label htmlFor="sixth" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Sustainability</label>
            <div className={`content ${activeAccordion === 'sixth' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
          <li className='bg-neutral-content'>
            <input type="checkbox" name="accordion" className='accordion-input' id="seventh" checked={activeAccordion === 'seventh'} onChange={() => handleAccordionClick('seventh')} />
            <label htmlFor="seventh" className='text-base md:text-lg lg:text-xl font-semibold e-label'>Customer Support</label>
            <div className={`content ${activeAccordion === 'seventh' ? 'open' : ''}`}>
              <p className='text-xs md:text-sm lg:text-sm font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse mollitia nulla cumque? Rem minima commodi voluptatem nemo? A reprehenderit unde recusandae, commodi laboriosam debitis nisi rerum velit corrupti molestiae.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>)
}