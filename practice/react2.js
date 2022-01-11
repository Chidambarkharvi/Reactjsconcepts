const cars = ["bmw","porsche","audi","benz"]
const carlist=<ul>
    {
        cars.map((car,index)=>{
           return <li  key={index}>{car}  </li>
        })
    }
</ul>
console.log(carlist)
const containerElement = <div> 
{carlist}

</div>

ReactDOM.render(containerElement,document.getElementById("container"))
