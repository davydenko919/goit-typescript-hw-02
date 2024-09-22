export interface imageItem {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
  }
  
  export interface Photo {
    url: string;
    alt: string;
  }
  
  export interface ApiResponse {
    results: imageItem[];
    total_pages: number;
  }