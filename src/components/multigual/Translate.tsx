import { useCookies } from "react-cookie";

const Translate = (p: { hi: string; en: string; gu: string }) => {
    const [cookie] = useCookies(["preferedLanguage"]);
    let lang = cookie.preferedLanguage;
    if (lang === "gu") return p.gu;
    if (lang === "hi") return p.hi;
    return p.en;
  };

export default Translate;