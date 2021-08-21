const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const dataHide=document.querySelector('.middle_layer');
const getinfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value; 

      if(cityVal===""){

city_name.innerText='Please write the name before  search';
      }else{
          try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b9dfe27a90751b683d7760222bc81f3a`;
        const response= await fetch(url); 
        
         const data=await response.json();// convert json data to javaScript object;
         const arrData=[data];

         temp_real_val.innerText=arrData[0].main.temp;
         const tempMood =innerText=arrData[0].weather[0].main;
         city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
         // condition to check suuny or cloudy
         if(tempMood=="Sunny"){
          temp_status.innerHTML='<i class="fas fa-sun" style="color: #eccc68;"></i>'
      } else if(tempMood=="Clouds"){
         temp_status.innerHTML='<i class="fas fa-cloud" style="color: #fff;"></i>'
      }else if (
          tempMood=="rainy"){
             temp_status.innerHTML='<i class="fa-solid fa-raindrops" style="color:blue"></i>'
          }else if(tempMood=="Clear"){
          temp_status.innerHTML='<i class="fas fa-sun" style="color: #eccc68;"></i>'
      }
          else{
             temp_status.innerHTML='<i class="fas fa-cloud" style="color: #44c3de;"></i>'
          }

         dataHide.classList.remove('data_hide')
               

          }catch{
              city_name.innerText='Pl Enter the city name properly'
              dataHide.classList.add('data_hide');
          }
      }
    
}
submitBtn.addEventListener('click',getinfo);
