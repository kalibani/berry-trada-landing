import { FooterLink } from "@/types/footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FooterLinkItem({ linkItem }: { linkItem: FooterLink }) {
  const t = useTranslations("footer");
  return (
    <li>
      <Link
        href={linkItem?.href}
        target={linkItem?.external ? "_blank" : "_self"}
        className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
      >
        {t(linkItem?.title)}

        {linkItem?.badge && (
          <span className="ml-4 rounded bg-primary px-2 py-1 font-heading text-xs text-white">
            {linkItem?.badge?.text}
          </span>
        )}
      </Link>
    </li>
  );
}
