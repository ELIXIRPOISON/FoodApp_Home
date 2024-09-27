import Cards from "./Cards";

const CardContainer = ()=>{
    const details = [
        {
            nameRes : "CnB Chinese",
            location : "Delhi karol-Bag",
            rating : 5,
            pin : 2002020,
            type : "Chinese"
        },
        {
            nameRes : "Thai-Fai",
            location : "Delhi Anand-Vihar",
            rating : 4.3,
            pin : 200650,
            type : "Thai"
        },
        {
            nameRes : "Thai Night",
            location : "Delhi Meharauli",
            rating : 4,
            pin : 20020,
            type : "Thai"
        },
        {
            nameRes : "Punjabi Delight",
            location : "Gurgaon Sector-22A",
            rating : 4.8,
            pin : 123220,
            type : "Indian"
        },
        {
            nameRes : "Chings",
            location : "Delhi Qutub minar",
            rating : 3.4,
            pin : 102020,
            type : "Chinese"
        },
        {
            nameRes : "Apni Rasoi",
            location : "Delhi ChiragDelhi",
            rating : 3.7,
            pin : 102020,
            type : "Indian"
        },
        {
            nameRes : "Chinese-Mirchi",
            location : "Delhi Dwarka",
            rating : 5,
            pin : 112020,
            type : "Chinese"
        },
        {
            nameRes : "Tinku Naan",
            location : "Delhi karol-Bag",
            rating : 4.2,
            pin : 2002020,
            type : "Indian"
        },
        {
            nameRes : "Thai Land Feel",
            location : "Noida Sector-52",
            rating : 2.8,
            pin :4432020,
            type : "Thai"
        },
        {
            nameRes : "Pizzaria Casa",
            location : "Delhi Rk puram",
            rating : 5,
            pin : 7842020,
            type : "Italian"
        }
    ]
    return(
        <>
        {
            details.map((data ,index) =>{
                // console.log(data);
                <Cards key={index} Details={data} />              
            })
        }                        
        </>
    )
}

export default CardContainer;