
let IDarray = [0]
export default function getID() {
    const tempArray =[...IDarray];
    // console.log("TEMPARRY:::::", tempArray);
    let newID = Math.random();
    tempArray.find(id => {
        if (id === newID) {
            newID = Math.random();
        }
        // console.log("NEW-ID CHEK:::>>", newID);
        IDarray.push(newID)
        // console.log("IDARRAY:::=>", IDarray);
        return newID
         }
    )
            return newID
}