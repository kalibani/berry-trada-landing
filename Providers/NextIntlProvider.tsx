"use client";
import React from "react";

import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

type Props = {
  children: React.ReactNode;
  locale?: string;
  messages?: AbstractIntlMessages;
};

const NextIntlProvider = ({ children, locale, messages }: Props) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlProvider;
