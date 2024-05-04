import React, { FC } from 'react'
import { Iform } from '../ContactForm'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from '@/components/ui/textarea';

const Message:FC<Iform> = ({
    form
}) => {
  return (
    <>
      <FormField
        name="message"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Your message...." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

export default Message;