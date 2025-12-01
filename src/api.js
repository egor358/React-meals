import { API_URL } from './config'

const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
};

const getCategorysByName = async (catName) =>{
     const response = await fetch(API_URL + `filter.php?c=${catName}`)
     if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );

}

const getMileById = async (id)=>{
    const response = await fetch(API_URL + `lookup.php?i=${id}`)
     if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );
}
const getRandomButton = async ()=> {
   const response = await fetch(API_URL + `random.php`)
     if (response.ok) {
    return await response.json();
  }
  throw new Error(
    `Ошибка по адресу ${response.url}, статус ошибки ${response.status}`
  );

}



export {getAllCategories,getCategorysByName,getMileById,getRandomButton}