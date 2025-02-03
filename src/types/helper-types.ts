import { ReactNode } from "react";

export interface HasChildren {
  children?: ReactNode;
}

export interface DynamicRouteProps {
  params: Promise<{ [key: string]: string }>;
}
