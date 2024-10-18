import axios from 'axios';


async function fetchData(url:string, callback: (data: Object)=> void) {
  try {
    const response = await axios.get(url);
    if (typeof response === `object` && response !== null )
        return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
