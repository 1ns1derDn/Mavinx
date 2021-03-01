import { Dispatch, SetStateAction } from 'react'

export interface IInputCategories extends React.HTMLAttributes<HTMLElement> {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  onSubmitTag: (e: React.FormEvent) => void;
}