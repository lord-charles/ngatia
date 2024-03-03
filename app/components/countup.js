"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
    const [visibility, setVisibility] = useState("")
  return (
    <div className="container">
     
          <div
            className="bg-black my-5 text-white grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
          >
            <VisibilitySensor
                onChange={(isVisible) => setVisibility(isVisible)}
              >
                 <>
                <section className="p-2 border border-white">
                  <h2 className="text-lg font-semibold text-center">
                    Clients served
                  </h2>
                  <h2 className="text-base md:text-lg font-bold text-center"><CountUp
                  start={0}
                  end={1000}
                  duration={2}
                  separator=","
                  delay={1}
                  redraw={visibility}
                />
                  </h2>
                </section>{" "}
                <section className="p-2 border border-white">
                  <h2 className="text-lg font-semibold text-center">
                    Cases won
                  </h2>
                  <h2 className="text-base md:text-lg font-bold text-center">
                  <CountUp
                  start={0}
                  end={570}
                  duration={2}
                  separator=","
                  delay={1}
                  redraw={visibility}
                />
                  </h2>
                </section>{" "}
                <section className="p-2 border border-white">
                  <h2 className="text-lg font-semibold text-center">
                    Cumulated Years
                  </h2>
                  <h2 className="text-base md:text-lg font-bold text-center">
                  <CountUp
                  start={0}
                  end={3}
                  duration={2}
                  separator=","
                  delay={1}
                  redraw={visibility}
                />
                  </h2>
                </section>{" "}
                <section className="p-2 border border-white">
                  <h2 className="text-lg font-semibold text-center">
                    Team Members
                  </h2>
                  <h2 className="text-base md:text-lg font-bold text-center">
                  <CountUp
                  start={0}
                  end={3}
                  duration={2}
                  separator=","
                  delay={1}
                  redraw={visibility}
                />
                  </h2>
                </section>
              </>
              </VisibilitySensor>
           
             
              </div>
     
       
    </div>
  );
};

export default Counter;
