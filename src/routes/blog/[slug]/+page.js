export function load({params}){
    
    const data = params.slug 

    return {
          content:`Hello world ${data}`
    } 
}