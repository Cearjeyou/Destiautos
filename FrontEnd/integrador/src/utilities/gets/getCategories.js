export const getCategories = async () => {
  //CATEGORIES
  // const urlCategories = `http://localhost:8080/category`;
  const urlCategories = `http://ec2-18-222-230-254.us-east-2.compute.amazonaws.com:8080/category`;

  const resp = await fetch(urlCategories);
  const data = await resp.json();

  const category = await data;
  // console.log("FROM CATEGORY:", category);
  return category;
};
