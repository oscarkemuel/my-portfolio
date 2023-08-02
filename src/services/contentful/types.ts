export interface IGetEntries {
  contentType: string;
  revalidateInHours?: number;
  locale?: string;
}

export interface Includes {
  Asset?: {
    sys: {
      id: string;
    },
    fields: {
      file: {
        url: string;
      }
    }
  }[];
}

export interface IGetEntriesResponse {
  items: Array<any>;
  includes?: Includes;
}