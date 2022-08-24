export type PostData = {
  uid?: string;
  type?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    headline?: string;
    category?: string;
    banner: {
      url: string;
    };
    description: string;
    subtitle: string;
    author: string;
    content: {
      heading: string;
      body: string;
      thumb: {
        url: string;
        alt: string;
      };
    }[];
  };
}
