export interface HomePageTypes {
  site: {
    headerPhrase: string;
    mobileHeaderPhrase: string;
    profileImage: string;
  };
  profile: Array<{
    label: string;
    value: string;
  }>;
  sections: {
    pitch: {
      items: Array<{
        title: string;
        content: string;
      }>;
    };
    social: {
      items: Array<{
        label: string;
        image_url: string;
        target_url: string;
      }>;
    };
    loadouts: Array<{
      category: string;
      badges: string[];
    }>;
  };
}