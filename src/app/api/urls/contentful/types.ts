export interface IGetEntries {
  contentType: string;
  revalidateInHours?: number;
  locale?: string;
  limit?: number;
  params?: string;
}

export interface Includes {
  Asset?: {
    sys: {
      id: string;
    };
    fields: {
      file: {
        url: string;
      };
    };
  }[];
}

export interface IGetEntriesResponse {
  items: Array<{
    fields: any;
    sys: {
      id: string;
      updatedAt: string;
    };
  }>;
  includes?: Includes;
}

export interface IGetEntry {
  id: string;
  revalidateInHours?: number;
  locale?: string;
}
