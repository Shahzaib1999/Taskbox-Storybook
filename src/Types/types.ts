import React from "react";

export type buttonProp = {
  title: string;
  icon?: any;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  classes?: string;
};
