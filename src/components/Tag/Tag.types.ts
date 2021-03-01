import { HTMLAttributes } from "react";

export interface ITag extends React.HTMLAttributes<HTMLElement> {
  tag: String;
  background?: boolean;
  closeHover?: boolean;
}

export interface ITagStyled {
  background?: boolean;
  close?: boolean;
}

  