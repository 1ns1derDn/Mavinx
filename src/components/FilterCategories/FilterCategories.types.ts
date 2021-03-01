export interface IFilterCategories {
  count: number;
  tagArr: string[];
  onClickRemoveTag: (tag: string) => void;
}