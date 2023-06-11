export type InitialStateType = {
  url: string;
  loading: boolean;
  error: boolean;
  data: object;
};

export type GlobalContextType = {
  setUrl?: (url: string) => void;
  setLoading?: (loading: boolean) => void;
  setError?: (error: boolean) => void;
  fetchUrl?: (url: string) => Promise<void>;
} & InitialStateType;

export type GlobalProviderProps = {
  children: React.ReactNode;
};
