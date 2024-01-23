const apiUrl: string = "https://yummly2.p.rapidapi.com/feeds/search";
const apiKey: string = process.env.REACT_APP_TASTY_API_KEY || "";

interface ogReceipes {
  feed: {
    content: {
      ingredientLines: {
        ingredient: string;
        remainder?: string | null;
      }[];
      details: {
        name: string;
      };
    };
  }[];
  seo: object;
}

interface ModifiedReceipes {
  name: string;
  ingredient: string[];
}
export const getReceipeResponse = async (maxResult: string, ingredient: string) => {
  try {
    const response = await fetch(`${apiUrl}?start=0 &maxResult=${maxResult}&start=10&q=${ingredient}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    } else {
      const jsonRes: ogReceipes = await response.json();
      const modifiedRes:ModifiedReceipes[] = jsonRes.feed.map((el) => {
        return {
          name: el?.content?.details?.name,
          ingredient: el?.content?.ingredientLines?.map((i) => {return i.ingredient})
        };
      });
      return modifiedRes;
    }
  } catch (error) {
    console.error(error);
  }
};
