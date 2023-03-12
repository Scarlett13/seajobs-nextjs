"use client";

import { Flowbite } from "flowbite-react";
import { FC, PropsWithChildren } from "react";

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
  return (
    <Flowbite
      theme={{
        theme: {
          sidebar: {
            base: "h-full top-0",
            inner: "bg-black rounded-none pt-8 sticky",
            itemGroup:
              "space-y-2 sticky border-t border-black first:mt-0 first:border-t-0 first:pt-0 dark:border-black0 bg-form-bg",
          },
          footer: {
            base: "left:0 right:0 bottom-0 rounded-none bg-black shadow dark:bg-black md:flex md:items-center md:justify-between",
            container: "left:0 right:0 bottom-0 p-6",
          },
          timeline: {
            direction: {
              vertical: "relative border-l border-timeline-line-color",
            },
            item: {
              point: {
                marker: {
                  base: {
                    vertical:
                      "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-timeline-line-color bg-timeline-line-color",
                  },
                },
              },
              content: {
                title: "text-md font-semibold text-white",
              },
            },
          },
        },
      }}
    >
      {children}
    </Flowbite>
  );
};

export default FlowbiteContext;
