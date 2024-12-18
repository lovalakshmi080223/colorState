import React,{useState} from 'react'

function ColorState() {

  const [colors,setcolors] = useState(["Blue","Red"])
  const[fruits,setFruits] = useState(['Apple',"Banana"])
  const[food,SetFood] = useState(['Biryani','checken'])
  const [deletedColor, setDeletedColor] = useState('');

  function AddColor(){
    const color = document.getElementById('colorInput').value
    if(color !==''){
      setcolors([...colors,color]);
      document.getElementById('colorInput').value = ''
    }else{
      alert('Please Enter color')
    }
    
  }
  function RemoveItem(){
    setcolors(colors.slice(0,-1))
    document.getElementById('removeItem').innerHTML = `Deleted color is: ${colors.slice(-1)}`;
  }

  function AddFruit(){
   const fruitName = document.getElementById('fruitInput').value
   if(fruitName !== ''){
    setFruits([...fruits,fruitName]);
    document.getElementById('fruitInput').value = ''
   }else{
    alert('Enter Fruit Name')
   }
  }
  function RemoveFruit(){
    setFruits(fruits.slice(0,-1))
    document.getElementById('removeFruit').innerHTML = 'Deleted Fruit Name : '+fruits.slice(-1)
  }
  function AddFood(){
    const foodName = document.getElementById('foodInput').value
    if(foodName !== ''){
      SetFood([...food,foodName])
      document.getElementById('foodInput').value = ''
    }else{
      alert('Enter your fevorite')
    }
  }
  function RemoveFood(){
    SetFood(food.slice(0,-1))
    document.getElementById('removeFood').innerHTML = 'Removed Food Name :'+ food.slice(-1)
  }


  return (
    <div className='mainContainer'>
      <div className='colorContainer'>
      <div className='colorHeader'>Color State</div>
      <input type="Text" placeholder='Enter Color' id="colorInput" className='inputText'/>
      <button className='addBtn' onClick={AddColor}>Add Color</button>
      <ul className='colorList'>
      {colors.map((color,index)=><li key={index}>{color}</li>)}
      </ul>
      <button className='removeBtn' onClick={RemoveItem}>
        <img src="images/bin1.png"width="80px" height="80px" />
      </button>
      <h3 id="removeItem" className='removeText'></h3>
      </div>

      <div className='fruitContainer'>
        <div className='fruitHeader'>Fruit Box</div>
        <input type="text" placeholder='Enter fruit Name' id="fruitInput" className='inputText'/>
        <button className='addBtn' onClick={AddFruit}>Add Fruit</button>
        
        <ul className='fruitList'>
          {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
        </ul>

        <button className='removeBtn fruitBtn' onClick={RemoveFruit}>
          <img src="images/bin1.png"width="80px" height="80px" />
        </button>
        <h3 id="removeFruit" className='removeText'></h3>
       
        
      </div>
      <div className='foodContainer'>
          <div className='foodHeader'>Food conatainer</div>
          <input type="text" placeholder='Enter your fevorite Food' id="foodInput" className='inputText'/>
          <button className='addBtn' onClick={AddFood}>Add Food</button>
          <ul className='foodList'>
            {food.map((item,index)=>
            <li key={index}>{item}</li>)}
          </ul>
          <button className='removeBtn foodBtn' onClick={RemoveFood}>
            <img src="images/bin1.png"width="80px" height="80px" />
          </button>
          <h3 id="removeFood" className='removeText'></h3>
                
      </div>
      
    </div>
  )
}

export default ColorState