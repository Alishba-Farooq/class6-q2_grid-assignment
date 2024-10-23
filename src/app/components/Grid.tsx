export default function Grid(){
    return(
        <div>
            <div className="grid grid-cols-4 grid-rows-3 m-4 gap-5 h-44">
                 <div className="row-span-3 bg-purple-400 "></div>
                  <div className="col-span-2  bg-teal-400"></div>
                  <div className=" bg-sky-400"></div>
                  <div className="bg-fuchsia-400"></div>
                  <div className="bg-orange-400"></div>
                  <div className="row-span-2 bg-purple-400"></div>
                  <div className="bg-sky-400"></div>
                  <div className="bg-sky-400"></div>
                 </div> 
        </div>
    )
}