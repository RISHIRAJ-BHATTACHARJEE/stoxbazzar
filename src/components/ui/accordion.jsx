import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon, Plus, X } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    (<AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("bg-white", className)}
      {...props} />)
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    (<AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "lg:text-[1.2vw] border-b border-black flex  flex-1 items-start justify-between gap-4 rounded-md lg:rounded-none py-4 lg:px-3 lg:py-5 text-left text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45",
          className
        )}
        {...props}>
        {children}
        <Plus
          strokeWidth={2}
          className="text-black pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>)
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    (<AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up text-zinc-500 data-[state=open]:animate-accordion-down overflow-hidden text-sm lg:text-xs"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>)
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
