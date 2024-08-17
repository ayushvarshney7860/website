"use client";

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { ContactFormConfig } from "@/types";

const ContactCard = ({ config }: { config: ContactFormConfig }) => {
   const { toast } = useToast();
   return (
      <Card>
         <CardHeader className="px-4 py-5 sm:p-6">
            <CardTitle>{config.heading}</CardTitle>
            <CardDescription>{config.description}</CardDescription>
         </CardHeader>
         <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            className="hidden"
         ></iframe>
         <form
            method="POST"
            action={config.formAction}
            target="hidden_iframe"
            onSubmit={(e: any) => {
               e.preventDefault();
               e.target.submit();
               e.target.reset();
               toast({
                  title: config.submission_text,
               });
            }}
         >
            <CardContent className="px-4 sm:px-6">
               <div className="flex flex-col space-y-3">
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
                     <Input
                        type="text"
                        placeholder="Name"
                        name={config.form_fields.name}
                        required
                     />
                     <Input
                        type="email"
                        placeholder="Email"
                        name={config.form_fields.email}
                        required
                     />
                  </div>
                  <Input
                     type="phone"
                     placeholder="Phone number"
                     name={config.form_fields.phone}
                     required
                  />
                  <Textarea
                     placeholder="Type your message here."
                     className="resize-none"
                     name={config.form_fields.message}
                     required
                  />
               </div>
            </CardContent>
            <CardFooter className="px-4 sm:px-6">
               <Button type="submit">{config.submit_button}</Button>
            </CardFooter>
         </form>
      </Card>
   );
};

export default ContactCard;
