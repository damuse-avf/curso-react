const getImage = async() =>{
 //return 'https://media0.giphy.com/media/3orieWHSN3CSDFbpIs/giphy.gif?cid=e515b423e9bebf6fca9a4ab4818124e3b48a93d6d17bf345&rid=giphy.gif&ct=g'
 
 try {
  const apiKey='NHgKbrP6mK4BZk3Dbo8npEK0uXoB7wei'
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const {data} = await resp.json();
  
  const { url } =  data.images.original;
  //console.log(url)
  const img = document.createElement('img');
  img.src = url;
 
  document.body.append(img);
 
  
 }catch (error){
  console.error(error)
 }
 

 
}

getImage()


