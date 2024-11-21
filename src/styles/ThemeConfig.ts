export interface Theme {
  name: string;
  primary_color: {
    default: string;
    default_contast_00: string;
    default_contast_01: string;
  };
  primary_text_color: {
    default: string;
  };
  secondary_text_color: {
    default: string;
  };
  terciary_text_color: {
    default: string;
  };
  background_level_color: {
    deep_00: string;
    deep_01: string;
    deep_02: string;
    deep_03: string;
    deep_04: string;
  };
}

export const lightTheme: Theme = {
  name: "light",
  primary_color: {
    default: "#C1CAD4",
    default_contast_00: "#74899E",
    default_contast_01: "#F4F4F4",
  },
  primary_text_color: {
    default: "#323444",
  },
  secondary_text_color: {
    default: "#67686E",
  },
  terciary_text_color: {
    default: "#A5A5A5",
  },
  background_level_color: {
    deep_00: "#E3E3E3",
    deep_01: "#E8E9E9",
    deep_02: "#F1F1F1",
    deep_03: "#F9F9F9",
    deep_04: "#FFFFFF",
  },
};

export const darkTheme: Theme = {
  name: "dark",
  primary_color: {
    default: "#393A3B",
    default_contast_00: "#DFDFDF",
    default_contast_01: "#1D1D1D",
  },
  primary_text_color: {
    default: "#FAFAFA",
  },
  secondary_text_color: {
    default: "#E6E6E6",
  },
  terciary_text_color: {
    default: "#A5A5A5",
  },
  background_level_color: {
    deep_00: "#000000",
    deep_01: "#131314",
    deep_02: "#1D1D20",
    deep_03: "#2E2E32",
    deep_04: "#404047",
  },
};
