"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Email from "./formFields/Email";
import Message from "./formFields/Message";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import Name from "./formFields/Name";
import Loader from "@/components/commons/Loader";
import { contactSchema } from "@/lib/formSchema";
import { motion } from "framer-motion";
interface Iarg {
  name: string;
  message: string;
  email: string;
}

export interface Iform {
  form: UseFormReturn<Iarg, any, undefined>;
}

async function sendRequest(url: string, { arg }: { arg: Iarg }) {
  return await axios.post(url, arg);
}

const ContactForm = () => {
  type Tschema = z.infer<typeof contactSchema>;
  const { trigger, isMutating, error } = useSWRMutation(
    `/api/send-message`,
    sendRequest,
  );
  const form = useForm({
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data: Tschema) => {
    try {
      await trigger(data);
      toast.success(`Message send successfully`);
    } catch (e) {
      toast.error("Something went wrong, please try again later");
      console.log("Error in formOnSubmit", e);
    }
  };
  if (error) {
    toast.error("Something went wrong, please try again later");
    console.log("Error in onSubmit", error);
  }

  return (
    <motion.div 
      transition={{duration:0.5}}
      initial={{ opacity:0, y:100}}
      animate={{ opacity:1, y:0}}
      className="flex flex-col gap-5 items-center justify-center">
      <Form {...form}>
        <form
          className="flex 
          flex-col 
          gap-5 
          w-1/3 
          bg-white 
          pt-5
          pb-10 
          px-10
          shadow-slate-300
          shadow-lg
          rounded-xl
          "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h1
            className="
            text-center
            text-3xl
        text-neutral-500

        "
          >
            Write a message🖋️
          </h1>
          <Name form={form} />
          <Email form={form} />
          <Message form={form} />
          <Button
            className="mt-10 flex gap-2 "
            disabled={isMutating}
            type="submit"
          >
            Submit
            {isMutating && <Loader />}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
