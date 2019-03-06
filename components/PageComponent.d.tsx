import { NextFunctionComponent } from "next";

export type PageComponent<P = {}, IP = P> = NextFunctionComponent<P, IP> & {
  Heading?: NextFunctionComponent;
};
