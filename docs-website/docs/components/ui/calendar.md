---
sidebar_label: Calendar
---

# Calendar Component

A customizable date field component that allows users to select and manipulate dates through an interactive calendar interface.

## Overview

The Calendar component provides a flexible date picker built on top of React DayPicker. It supports various selection modes including single date selection, multiple date selection, and date range selection. The component is fully accessible, provides keyboard navigation, and can be easily styled to match your application's design.

## Import

```tsx
import { Calendar } from "@/components/ui/calendar";
```

## Installation

This component requires the following dependency:

```bash
npx shadcn-ui@latest add calendar
```

The command will install `react-day-picker` and its dependencies, and add the Calendar component to your project.

## Usage

### Basic Usage

```tsx
"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
```

### Date Range Selection

```tsx
"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

export default function CalendarRangeDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });
  
  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  );
}
```

### Multiple Date Selection

```tsx
"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarMultipleDemo() {
  const [dates, setDates] = React.useState<Date[] | undefined>([new Date()]);
  
  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  );
}
```

### With Disabled Dates

```tsx
"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDisabledDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={{ 
        before: new Date(), 
        after: new Date(new Date().setMonth(new Date().getMonth() + 3)),
        dayOfWeek: [0, 6], // Disable weekends (Sunday and Saturday)
      }}
      className="rounded-md border"
    />
  );
}
```

## Integration with React Hook Form

```tsx
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export function DatePickerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => 
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Integration with Date Range in React Hook Form

```tsx
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  dateRange: z.object({
    from: z.date({
      required_error: "Start date is required.",
    }),
    to: z.date({
      required_error: "End date is required.",
    }),
  }),
});

export function DateRangePickerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateRange: {
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 7)),
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date Range</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[300px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date range</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select a date range for your event.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `"single"` \| `"multiple"` \| `"range"` \| `"default"` | `"default"` | The selection mode of the calendar |
| `selected` | `Date` \| `Date[]` \| `DateRange` \| `undefined` | - | The selected date(s) or date range |
| `onSelect` | `(date: Date \| Date[] \| DateRange \| undefined) => void` | - | Function called when date(s) are selected |
| `disabled` | `boolean` \| `Matcher` \| `Matcher[]` | - | Disabled date(s) or matcher for disabled dates |
| `defaultMonth` | `Date` | Current month | The default month to display |
| `initialFocus` | `boolean` | `false` | Whether to initially focus the calendar |
| `numberOfMonths` | `number` | `1` | Number of months to display at once |
| `fromMonth` | `Date` | - | The first month that can be displayed |
| `toMonth` | `Date` | - | The last month that can be displayed |
| `fromYear` | `number` | - | The first year that can be selected |
| `toYear` | `number` | - | The last year that can be selected |
| `captionLayout` | `"dropdown"` \| `"buttons"` | `"buttons"` | Layout of the calendar caption |
| `showOutsideDays` | `boolean` | `true` | Whether to show days from the previous/next month |
| `fixedWeeks` | `boolean` | `false` | Whether weeks should always be 6 to maintain a fixed height |
| `className` | `string` | - | Additional CSS class names for the calendar container |
| `classNames` | `ClassNames` | - | Class names for various calendar elements |
| `required` | `boolean` | `false` | Whether a selection is required |
| `footer` | `ReactNode` | - | Footer element to render at the bottom of the calendar |

### TypeScript Interfaces

```tsx
import { ClassNames, DayPickerProps } from "react-day-picker";

// DateRange type for range selection mode
export interface DateRange {
  from: Date;
  to?: Date;
}

// Calendar component props
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// Matcher type for disabled dates
export type Matcher =
  | Date
  | { after: Date }
  | { before: Date }
  | { from: Date; to: Date }
  | { dayOfWeek: number[] };
```

## Styling

The Calendar component comes with default styling that integrates with your shadcn/ui theme. You can customize the appearance using the `className` prop for the container and the `classNames` prop for specific calendar elements.

### Custom Styling Example

```tsx
<Calendar 
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border-2 border-primary p-2 bg-card"
  classNames={{
    month: "space-y-4",
    caption: "flex justify-center pt-1 relative items-center",
    caption_label: "text-sm font-medium",
    nav: "space-x-1 flex items-center",
    nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full border-collapse space-y-1",
    head_row: "flex",
    head_cell: "text-muted-foreground rounded-md w-8 font-normal text-xs",
    row: "flex w-full mt-2",
    cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent",
    day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "bg-accent text-accent-foreground",
    day_outside: "text-muted-foreground opacity-50",
    day_disabled: "text-muted-foreground opacity-50",
    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
    day_hidden: "invisible",
  }}
/>
```

## Accessibility

The Calendar component follows WCAG 2.1 AA accessibility guidelines and includes the following features:

- Proper ARIA attributes for navigation and selection
- Keyboard navigation support
- Focus management
- Screen reader announcements for date changes

### Keyboard Navigation

- Arrow keys: Navigate between days
- Home/End: Navigate to the first/last day of the week
- PageUp/PageDown: Navigate between months
- Space/Enter: Select the focused day

## Notes and Limitations

1. The Calendar component is built on React DayPicker and may require additional styling to match your application's design system.

2. When using with React Hook Form, make sure to handle the field value transformation correctly, especially with date range selection.

3. For mobile responsiveness, consider using a different layout or a modal for small screens.

4. When using the `captionLayout="dropdown"` option, you'll need to ensure the Select component is properly styled.

5. The calendar will remain visible even when selecting a date in the basic usage. For a date picker that closes upon selection, you should combine it with a Popover component as shown in the React Hook Form examples.

## Related Components

- [DatePicker](/docs/components/ui/date-picker.md) - A complete date picker component that includes a Calendar within a Popover
- [Popover](/docs/components/ui/popover.md) - Used to display the Calendar in a floating panel
- [Form](/docs/components/ui/form.md) - Used to integrate the Calendar with form validation

## Testing

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Calendar } from "@/components/ui/calendar";

describe("Calendar component", () => {
  test("renders a calendar with the current month", () => {
    render(<Calendar />);
    const currentMonth = new Date().toLocaleString("default", { month: "long" });
    expect(screen.getByText(currentMonth, { exact: false })).toBeInTheDocument();
  });

  test("allows selecting a date", () => {
    const handleSelect = jest.fn();
    render(<Calendar mode="single" onSelect={handleSelect} />);
    
    // Find and click on day 15 of the current month
    const dayButton = screen.getByRole("button", { name: /15/i });
    fireEvent.click(dayButton);
    
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
```