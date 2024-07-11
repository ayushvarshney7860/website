import Link from "next/link";
import { Button } from "./ui/button";
import global_config from "@/app/config/global-config";

const BookBtn = ({ outline = false }: { outline?: boolean }) => {
   return (
      <Link href={global_config.book_btn_href}>
         <Button
            className="xs:text-lg xs:p-7"
            variant={outline ? "outline" : "default"}
         >
            {global_config.book_btn_text}
         </Button>
      </Link>
   );
};

export default BookBtn;
