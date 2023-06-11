import { Issue } from "./issues.types";

export type InitialStateType = {
  url: string;
  success: boolean;
  loading: boolean;
  error: boolean;
  data: Issue[];
};

export type GlobalContextType = {
  setUrl?: (url: string) => void;
  fetchUrl?: (url: string) => Promise<void>;
} & InitialStateType;

export type GlobalProviderProps = {
  children: React.ReactNode;
};
