const base_url = 'https://api.apilayer.com/youtube';
// const base_url = 'https://youtube138.p.rapidapi.com';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY_1,
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };
var myHeaders = new Headers();
myHeaders.append("apikey", import.meta.env.VITE_APP_YOUTUBE_API_KEY_2);

var options = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
export const fetchDataFromApi = async(url) =>{
  try{
    const searchQuery = `${base_url}/${url}`
    console.log('search url: ', searchQuery)
    const response = await fetch(searchQuery, options);
    return response.json();
  }catch(error){
    console.log('Error in Api.js',  error)
  }
}



